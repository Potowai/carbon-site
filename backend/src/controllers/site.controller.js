const { ZodError } = require('zod');
const supabase = require('../config/supabase');
const { siteCreateSchema, estimationSchema, siteRecommendationSchema } = require('../schemas/site.schema');

// Facteurs d'emissions simplifies (Kg CO2eq / unite)
const FACTORS = {
  concrete: 200, // par m3
  steel: 2500, // par tonne
  wood: -700, // par m3 (stockage carbone)
  energy: 0.05 // par kWh (mix francais)
};

/**
 * Calcule l'impact carbone d'un site à partir de ses caractéristiques
 */
const calculateSiteCarbon = (site) => {
  const surface = parseFloat(site.surface_m2) || 0;
  const pSub = parseInt(site.parking_sous_sol) || 0;
  
  // Ratios d'estimation (en tonnes/m3) (Palier 1)
  const estConcrete = (surface * 1.2) + (pSub * 15);
  const estSteel = (surface * 0.1);
  
  // Impact en tonnes CO2eq
  const totalKg = (estConcrete * 200) + (estSteel * 2500);
  return totalKg / 1000;
};

const getAllSites = async (req, res, next) => {
  try {
    const { data: sites, error } = await supabase
      .from('sites')
      .select('*, consommations(*), materiaux(*)')
      .order('created_at', { ascending: false });

    if (error) throw error;

    // S'assurer que chaque site a un total_carbon_tons (recalculer si manquant/zéro)
    const processedSites = (sites || []).map(site => {
      if (!site.total_carbon_tons || site.total_carbon_tons === 0) {
        return {
          ...site,
          total_carbon_tons: calculateSiteCarbon(site)
        };
      }
      return site;
    });

    res.json({ success: true, data: processedSites });
  } catch (error) {
    next(error);
  }
};

const getMySites = async (req, res, next) => {
  try {
    const userId = req.auth?.userId;

    const { data: sites, error } = await supabase
      .from('sites')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json({ success: true, data: sites });
  } catch (error) {
    next(error);
  }
};

const getSiteById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { data: site, error } = await supabase
      .from('sites')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ success: false, message: 'Site not found' });
      }
      throw error;
    }

    // Calculer les émissions si manquantes
    const siteWithCarbon = {
      ...site,
      total_carbon_tons: site.total_carbon_tons || calculateSiteCarbon(site)
    };

    res.json({ success: true, data: siteWithCarbon });
  } catch (error) {
    next(error);
  }
};

const createSite = async (req, res, next) => {
  try {
    const payload = siteCreateSchema.parse(req.body);
    const userId = req.auth?.userId;

    const { data: site, error } = await supabase
      .from('sites')
      .insert([
        {
          nom: payload.nom,
          surface_m2: payload.surface_m2,
          parking_sous_dalle: payload.parking_sous_dalle,
          parking_sous_sol: payload.parking_sous_sol,
          parking_aerien: payload.parking_aerien,
          nb_employes: payload.nb_employes,
          postes_travail: payload.postes_travail,
          user_id: userId
        }
      ])
      .select()
      .single();

    if (error) throw error;

    try {
      if (payload.consommations.length > 0) {
        const { error: consommationError } = await supabase
          .from('consommations')
          .insert(
            payload.consommations.map((consommation) => ({
              site_id: site.id,
              annee: consommation.annee,
              energie_mwh: consommation.energie_mwh
            }))
          );

        if (consommationError) throw consommationError;
      }

      if (payload.materiaux.length > 0) {
        const { error: materiauxError } = await supabase
          .from('materiaux')
          .insert(
            payload.materiaux.map((materiau) => ({
              site_id: site.id,
              type_materiau: materiau.type_materiau,
              quantite_tonnes: materiau.quantite_tonnes,
              estime_par_algo: materiau.estime_par_algo
            }))
          );

        if (materiauxError) throw materiauxError;
      }
    } catch (relatedError) {
      await supabase.from('sites').delete().eq('id', site.id);
      throw relatedError;
    }

    const { data: fullSite, error: fullSiteError } = await supabase
      .from('sites')
      .select('*, consommations(*), materiaux(*)')
      .eq('id', site.id)
      .single();

    if (fullSiteError) throw fullSiteError;

    res.status(201).json({ success: true, data: fullSite });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Payload invalide',
        errors: error.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: issue.message
        }))
      });
    }

    next(error);
  }
};

const estimateCarbon = async (req, res, next) => {
  try {
    const { concreteVolume, steelWeight, woodVolume, energyUsage } = estimationSchema.parse(req.body);

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
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Payload invalide',
        errors: error.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: issue.message
        }))
      });
    }

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

    // Nouveau: Répartition Construction vs Exploitation (Palier 2)
    // Construction: Empreinte totale actuelle
    // Exploitation: Estimation annuelle basée sur la surface (ex: 50 kg CO2/m2/an)
    const est_exploitation = (total_surface * 50) / 1000; // tCO2e/an
    const construction_vs_exploitation = {
      data: [
        { name: 'Construction (Phase une)', value: Math.round(total_footprint), percentage: 70 },
        { name: 'Exploitation (Par an)', value: Math.round(est_exploitation), percentage: 30 }
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
      construction_vs_exploitation,
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

const normalizeText = (value = '') => value
  .toString()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase();

const readField = (row, expectedKey) => {
  const normalizedExpected = normalizeText(expectedKey).replace(/[^a-z0-9]/g, '');
  const rowKey = Object.keys(row).find((key) => (
    normalizeText(key).replace(/[^a-z0-9]/g, '') === normalizedExpected
  ));

  return rowKey ? row[rowKey] : undefined;
};

const getFactorFromUnit = (unit = '', value = 0) => {
  const normalizedUnit = normalizeText(unit);

  if (normalizedUnit.includes('/tonne') || normalizedUnit.includes('/ton')) {
    return Number(value);
  }

  if (normalizedUnit.includes('/kg')) {
    return Number(value) * 1000;
  }

  return null;
};

const getMaterialAction = (materialName) => {
  const name = normalizeText(materialName);

  if (name.includes('beton') || name.includes('ciment')) {
    return 'Etudier un beton bas carbone (CEM III/CEM VI) et optimiser les volumes de structure.';
  }

  if (name.includes('acier') || name.includes('metal')) {
    return 'Favoriser de l acier recycle et reduire les sections avec une optimisation structurelle.';
  }

  if (name.includes('aluminium')) {
    return 'Privilegier l aluminium recycle et limiter les lots a forte intensite carbone.';
  }

  if (name.includes('bois')) {
    return 'Conserver et augmenter la part de bois certifie FSC/PEFC sur les lots compatibles.';
  }

  return 'Verifier des alternatives a plus faible impact dans la Base Carbone ADEME pour ce lot.';
};

const fetchAdemeMatch = async (materialName) => {
  if (typeof fetch !== 'function') {
    const error = new Error('Runtime fetch indisponible pour appeler ADEME');
    error.statusCode = 503;
    throw error;
  }

  const endpoint = `https://data.ademe.fr/data-fair/api/v1/datasets/base-carboner/lines?size=12&q=${encodeURIComponent(materialName)}`;
  let response;
  try {
    response = await fetch(endpoint);
  } catch (error) {
    const networkError = new Error('API ADEME indisponible (erreur reseau)');
    networkError.statusCode = 503;
    throw networkError;
  }

  if (!response.ok) {
    const ademeError = new Error(`API ADEME indisponible (HTTP ${response.status})`);
    ademeError.statusCode = 503;
    throw ademeError;
  }

  let payload;
  try {
    payload = await response.json();
  } catch (error) {
    const parseError = new Error('Reponse ADEME invalide');
    parseError.statusCode = 503;
    throw parseError;
  }

  const results = Array.isArray(payload?.results) ? payload.results : [];

  const candidates = results
    .filter((row) => normalizeText(readField(row, 'Type_de_l_element')).replace(/[^a-z0-9]/g, '') === 'facteurdemission')
    .map((row) => {
      const factor = getFactorFromUnit(
        readField(row, 'Unite_francais'),
        readField(row, 'Total_poste_non_decompose')
      );
      return {
        raw: row,
        factor
      };
    })
    .filter((candidate) => candidate.factor !== null);

  if (candidates.length === 0) {
    return null;
  }

  candidates.sort((a, b) => {
    const statusA = normalizeText(readField(a.raw, 'Statut_de_l_element'));
    const statusB = normalizeText(readField(b.raw, 'Statut_de_l_element'));
    const validA = statusA.includes('valide') ? 1 : 0;
    const validB = statusB.includes('valide') ? 1 : 0;
    const scoreA = Number(a.raw._score || 0);
    const scoreB = Number(b.raw._score || 0);

    if (validA !== validB) {
      return validB - validA;
    }

    return scoreB - scoreA;
  });

  return candidates[0];
};

const getAdemeRecommendations = async (req, res, next) => {
  try {
    const payload = siteRecommendationSchema.parse(req.body);
    const materialAnalyses = [];

    for (const material of payload.materiaux) {
      const match = await fetchAdemeMatch(material.type_materiau);
      const quantityTonnes = Number(material.quantite_tonnes || 0);

      if (!match) {
        materialAnalyses.push({
          input: material.type_materiau,
          quantity_tonnes: quantityTonnes,
          matched: false,
          recommendation: 'Aucun facteur ADEME exploitable trouve automatiquement pour ce materiau.'
        });
        continue;
      }

      const emissionKg = quantityTonnes * match.factor;
      materialAnalyses.push({
        input: material.type_materiau,
        quantity_tonnes: quantityTonnes,
        matched: true,
        ademe_match: {
          label: readField(match.raw, 'Nom_base_francais') || null,
          attribute: readField(match.raw, 'Nom_attribut_francais') || null,
          identifier: readField(match.raw, 'Identifiant_de_l_element') || null,
          category: readField(match.raw, 'Code_de_la_categorie') || null,
          status: readField(match.raw, 'Statut_de_l_element') || null,
          source: match.raw.Source || 'ADEME Base Carbone'
        },
        factor_kgco2e_per_tonne: Number(match.factor.toFixed(2)),
        estimated_kgco2e: Number(emissionKg.toFixed(2)),
        recommendation: getMaterialAction(material.type_materiau)
      });
    }

    const matchedMaterials = materialAnalyses.filter((item) => item.matched);
    const totalKg = matchedMaterials.reduce((sum, item) => sum + item.estimated_kgco2e, 0);
    const sortedByImpact = [...matchedMaterials].sort((a, b) => b.estimated_kgco2e - a.estimated_kgco2e);
    const topHotspots = sortedByImpact.slice(0, 3);
    const surface = Number(payload.surface_m2 || 0);
    const intensity = surface > 0 ? totalKg / surface : null;

    const genericRecommendations = [];
    if (topHotspots.length > 0) {
      genericRecommendations.push(
        `Prioriser les actions sur: ${topHotspots.map((item) => item.input).join(', ')}.` 
      );
    }
    if (intensity !== null) {
      genericRecommendations.push(
        `Intensite estimee: ${intensity.toFixed(2)} kgCO2e/m2. Fixer un objectif de reduction par m2 pour le prochain cycle.` 
      );
    }
    genericRecommendations.push(
      'Verifier les fournisseurs avec FDES/PEP et imposer des seuils carbone dans les achats.'
    );

    res.json({
      success: true,
      data: {
        source: {
          provider: 'ADEME Base Carbone',
          endpoint: 'https://data.ademe.fr/data-fair/api/v1/datasets/base-carboner/lines',
          dataset_version: 'v23.6',
          live_api_used: true
        },
        summary: {
          total_estimated_kgco2e: Number(totalKg.toFixed(2)),
          total_estimated_tco2e: Number((totalKg / 1000).toFixed(3)),
          estimated_intensity_kgco2e_per_m2: intensity === null ? null : Number(intensity.toFixed(2)),
          matched_materials: matchedMaterials.length,
          total_materials: payload.materiaux.length
        },
        hotspots: topHotspots,
        materials: materialAnalyses,
        recommendations: genericRecommendations
      }
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Payload invalide',
        errors: error.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: issue.message
        }))
      });
    }

    if (error?.statusCode === 503) {
      return res.status(503).json({
        success: false,
        message: error.message,
        errors: [
          {
            path: 'ademe',
            message: 'Reessayez plus tard ou verifiez la connectivite reseau.'
          }
        ]
      });
    }

    next(error);
  }
};

module.exports = {
  getAllSites,
  getMySites,
  getSiteById,
  createSite,
  estimateCarbon,
  getGlobalDashboard,
  getAdemeRecommendations
};
