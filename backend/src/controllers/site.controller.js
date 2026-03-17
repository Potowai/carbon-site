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
    const { nom, surface_m2, type } = req.body;
    const userId = req.auth?.userId; 

    const { data: site, error } = await supabase
      .from('sites')
      .insert([
        { 
          nom, 
          surface_m2: parseFloat(surface_m2), 
          user_id: userId 
        }
      ])
      .select()
      .single();

    if (error) throw error;
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
  createSite,
  estimateCarbon,
  getGlobalDashboard
};
