const supabase = require('../config/supabase');

// Facteurs d'émissions simplifiés (Kg CO2eq / unité)
const FACTORS = {
  concrete: 200, // par m3
  steel: 2500,  // par tonne
  wood: -700,   // par m3 (stockage carbone)
  energy: 0.05  // par kWh (mix français)
};

const getAllSites = async (req, res, next) => {
  try {
    const { data: sites, error } = await supabase
      .from('sites')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json({ success: true, data: sites });
  } catch (error) {
    next(error);
  }
};

const createSite = async (req, res, next) => {
  try {
    const { 
      nom, 
      surface_m2, 
      nb_employes, 
      parking_sous_sol, 
      parking_sous_dalle, 
      parking_aerien 
    } = req.body;
    const userId = req.auth?.userId; 

    console.log('--- Site Creation Input ---');
    console.log('Body:', req.body);

    // Calcul d'estimation simplifié (Palier 1)
    const surface = parseFloat(surface_m2) || 0;
    const pSub = parseInt(parking_sous_sol) || 0;
    
    // Ratios d'estimation (en tonnes/m3)
    const estConcrete = (surface * 1.2) + (pSub * 15); // Tons
    const estSteel = (surface * 0.1); // Tons
    
    // Impact en Kg CO2eq
    // Concrete: 200kg/m3 (approx 1 ton = 0.4m3 -> 80kg/ton?) 
    // Let's keep it simple as per Palier 1
    const totalKg = (estConcrete * 200) + (estSteel * 2500);
    const totalTons = totalKg / 1000;

    console.log('Estimation Results:', { estConcrete, estSteel, totalKg, totalTons });

    const { data: site, error } = await supabase
      .from('sites')
      .insert([
        { 
          nom, 
          surface_m2: surface,
          nb_employes: parseInt(nb_employes) || 0,
          parking_sous_sol: pSub,
          parking_sous_dalle: parseInt(parking_sous_dalle) || 0,
          parking_aerien: parseInt(parking_aerien) || 0,
          total_carbon_tons: totalTons,
          user_id: userId 
        }
      ])
      .select()
      .single();

    if (error) {
      // Supabase/PostgREST can fail with schema cache errors when a column is missing.
      // Provide an actionable message for hackathon setup.
      const msg = String(error?.message || '');
      if (msg.includes("total_carbon_tons") && msg.includes("schema cache")) {
        const e = new Error(
          "La colonne 'total_carbon_tons' est manquante dans la table 'sites'. " +
          "Exécutez la migration SQL: backend/migrations/2026-03-17_add_total_carbon_tons.sql (Supabase SQL Editor), puis réessayez."
        );
        e.statusCode = 500;
        throw e;
      }
      throw error;
    }
    console.log('Site Created Successfully:', site);
    res.status(201).json({ success: true, data: site });
  } catch (error) {
    next(error);
  }
};

const estimateCarbon = async (req, res, next) => {
  try {
    const { concreteVolume, steelWeight, woodVolume, energyUsage } = req.body;

    const total = (concreteVolume * FACTORS.concrete) +
                  (steelWeight * FACTORS.steel) +
                  (woodVolume * FACTORS.wood) +
                  (energyUsage * FACTORS.energy);

    res.json({
      success: true,
      estimation: {
        total_kg: total,
        total_tons: total / 1000,
        breakdown: {
          concrete: concreteVolume * FACTORS.concrete,
          steel: steelWeight * FACTORS.steel,
          wood: woodVolume * FACTORS.wood,
          energy: energyUsage * FACTORS.energy
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

const getGlobalDashboard = async (req, res, next) => {
  try {
    const { data: sites, error: sitesErr } = await supabase
      .from('sites')
      .select('*');

    if (sitesErr && sitesErr.code !== 'PGRST116') throw sitesErr;

    const sitesList = sites || [];

    // Calculer les émissions carbone pour chaque site à partir de la surface
    const sitesWithCarbon = sitesList.map(site => {
      // Facteurs d'émission
      const estConcrete = (site.surface_m2 * 1.2) + ((site.parking_sous_sol || 0) * 15);
      const estSteel = site.surface_m2 * 0.1;
      const totalKg = (estConcrete * 200) + (estSteel * 2500);
      const totalTons = totalKg / 1000;
      
      return {
        ...site,
        total_carbon_tons: totalTons
      };
    });

    // Calculer les statistiques
    const total_footprint = sitesWithCarbon.reduce((sum, site) => sum + (parseFloat(site.total_carbon_tons) || 0), 0);
    const active_sites = sitesWithCarbon.length;
    
    // Moyenne des surfaces
    const avg_surface = active_sites > 0 
      ? sitesWithCarbon.reduce((sum, site) => sum + (parseFloat(site.surface_m2) || 0), 0) / active_sites
      : 0;
    
    // Intensité carbone (CO2eq par m2)
    const total_surface = sitesWithCarbon.reduce((sum, site) => sum + (parseFloat(site.surface_m2) || 0), 0);
    const carbon_intensity = total_surface > 0 
      ? (total_footprint * 1000) / total_surface // kg CO2e par m2
      : 0;
    
    // Score global (simplifié: 0-100 basé sur intensité carbone)
    // Objectif: < 100 kg CO2e/m2 pour un score de 100
    const global_score = Math.min(100, Math.max(0, 100 - (carbon_intensity / 1.5)));

    // Répartition des matériaux (estimée à partir des surfaces et estimations)
    const material_distribution = {
      data: [
        {
          name: 'Béton',
          value: Math.round((total_surface * 1.2 * 200) / 1000) || 0, // tCO2e
          percentage: 50
        },
        {
          name: 'Acier',
          value: Math.round((total_surface * 0.1 * 2500) / 1000) || 0, // tCO2e
          percentage: 30
        },
        {
          name: 'Bois',
          value: Math.round((total_surface * 0.05 * 700) / 1000) || 0, // tCO2e (crédit carbone négatif)
          percentage: 15
        },
        {
          name: 'Autres',
          value: Math.round(total_footprint * 0.05) || 0, // tCO2e
          percentage: 5
        }
      ]
    };

    // Données de tendance par mois (les 12 derniers mois)
    const monthlyTrend = {};
    const now = new Date();
    
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = d.toISOString().slice(0, 7); // 'YYYY-MM'
      monthlyTrend[key] = 0;
    }

    // Agréger les émissions par mois
    sitesWithCarbon.forEach(site => {
      const created = new Date(site.created_at || site.createdAt || site.date || 0);
      if (!isNaN(created.getTime())) {
        const key = created.toISOString().slice(0, 7);
        if (monthlyTrend[key] !== undefined) {
          monthlyTrend[key] += parseFloat(site.total_carbon_tons) || 0;
        }
      }
    });

    const trend_data = Object.entries(monthlyTrend)
      .map(([month, value]) => ({
        month,
        value: Math.round(value * 100) / 100
      }));

    const stats = {
      total_footprint: Math.round(total_footprint * 100) / 100,
      carbon_intensity: Math.round(carbon_intensity * 100) / 100,
      global_score: Math.round(global_score),
      active_sites,
      avg_surface: Math.round(avg_surface),
      material_distribution,
      trend_data,
      currency: 'tCO2e',
      unit: 'kg/m²',
      last_updated: new Date().toISOString()
    };

    // Essayer de sauvegarder en cache (optionnel)
    try {
      await supabase
        .from('dashboard_stats')
        .delete()
        .neq('id', 0); // supprimer tous

      await supabase
        .from('dashboard_stats')
        .insert([
          {
            stats_data: stats,
            created_at: new Date().toISOString()
          }
        ]);
    } catch (e) {
      // Si la table n'existe pas, on continue sans cache
      console.log('Dashboard stats cache not available');
    }

    res.json({ success: true, data: stats });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSites,
  createSite,
  estimateCarbon,
  getGlobalDashboard
};
