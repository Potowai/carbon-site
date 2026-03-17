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
    const userId = req.auth?.userId;
    const { id } = req.params;
 
    const { data: site, error } = await supabase
      .from('sites')
      .select(`
        *,
        materiaux (type_materiau, quantite_tonnes),
        consommations (annee, energie_mwh)
      `)
      .eq('id', id)
      .eq('user_id', userId)
      .single();
 
    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ success: false, message: 'Site not found' });
      }
      throw error;
    }
 
    res.json({ success: true, data: site });
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

    if (error) throw error;
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
    const { data: stats, error } = await supabase
      .from('dashboard_stats')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') throw error; // PGRST116 is "no rows returned"

    res.json({ success: true, data: stats || null });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllSites,
  getMySites,
  getSiteById,
  createSite,
  estimateCarbon,
  getGlobalDashboard
};
