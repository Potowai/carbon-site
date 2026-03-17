require('dotenv').config();
const supabase = require('./src/config/supabase');

async function seed() {
  console.log("Seeding real data via Supabase into dashboard_stats...");

  const dashboardData = {
    site_name: 'Capgemini - Campus Rennes',
    total_footprint: 3993,
    carbon_intensity: 42.8,
    global_score: 'B+',
    active_sites: 12,
    carbon_trend: {
      data: [
        { "name": "Jan", "value": 400 },
        { "name": "Feb", "value": 350 },
        { "name": "Mar", "value": 500 },
        { "name": "Apr", "value": 280 },
        { "name": "May", "value": 200 }
      ]
    },
    material_distribution: {
      data: [
        { "name": "Béton", "value": 45 },
        { "name": "Acier", "value": 25 },
        { "name": "Verre", "value": 15 },
        { "name": "Autres", "value": 15 }
      ]
    },
    user_id: 'mock_demo'
  };

  try {
    const { data, error } = await supabase
      .from('dashboard_stats')
      .insert([dashboardData])
      .select();

    if (error) throw error;
    console.log("✅ Dashboard data inserted via Supabase:", data[0].id);
  } catch (err) {
    console.error("Supabase Seed Error:", err);
  }
}

seed();
