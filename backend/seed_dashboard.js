/**
 * Seed de données de test pour remplir le dashboard avec des données réalistes
 * 
 * Usage: node seed_dashboard.js
 */

require('dotenv').config();
const supabase = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://YOUR_SUPABASE_URL.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY || 'your-anon-key';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Données de test réalistes
const TEST_SITES = [
  {
    nom: 'Chantier Tour Business Paris',
    surface_m2: 45000,
    nb_employes: 350,
    parking_sous_sol: 450,
    parking_sous_dalle: 200,
    parking_aerien: 100,
  },
  {
    nom: 'Logements Collectifs Marseille',
    surface_m2: 12500,
    nb_employes: 85,
    parking_sous_sol: 150,
    parking_sous_dalle: 75,
    parking_aerien: 50,
  },
  {
    nom: 'Centre Commercial Lyon',
    surface_m2: 35000,
    nb_employes: 420,
    parking_sous_sol: 800,
    parking_sous_dalle: 300,
    parking_aerien: 200,
  },
  {
    nom: 'Hôtel 4 étoiles Bordeaux',
    surface_m2: 18000,
    nb_employes: 250,
    parking_sous_sol: 200,
    parking_sous_dalle: 150,
    parking_aerien: 100,
  },
  {
    nom: 'Usine Automobile Toulouse',
    surface_m2: 75000,
    nb_employes: 1200,
    parking_sous_sol: 600,
    parking_sous_dalle: 400,
    parking_aerien: 800,
  },
  {
    nom: 'Hôpital Universitaire Nice',
    surface_m2: 95000,
    nb_employes: 2500,
    parking_sous_sol: 350,
    parking_sous_dalle: 250,
    parking_aerien: 150,
  },
  {
    nom: 'Université Nantes',
    surface_m2: 125000,
    nb_employes: 850,
    parking_sous_sol: 400,
    parking_sous_dalle: 300,
    parking_aerien: 600,
  },
  {
    nom: 'Aéroport Lille',
    surface_m2: 250000,
    nb_employes: 3500,
    parking_sous_sol: 1000,
    parking_sous_dalle: 500,
    parking_aerien: 2000,
  }
];

async function seedDatabase() {
  console.log('🌱 Starting database seed...\n');

  try {
    // Vérifier que la table sites existe
    const { data: tables, error: tableError } = await client
      .rpc('get_rows', {});

    console.log('📊 Creating test sites...');

    // Insérer les sites avec des dates réparties sur les 12 derniers mois
    const now = new Date();
    const sitesWithDates = TEST_SITES.map((site, index) => {
    // Répartir les créations sur les 12 derniers mois
      const monthOffset = Math.floor((index / TEST_SITES.length) * 12);
      const createdDate = new Date(now.getFullYear(), now.getMonth() - monthOffset, Math.random() * 28 + 1);

      // Calculer le total carbone (pour affichage uniquement)
      const estConcrete = (site.surface_m2 * 1.2) + (site.parking_sous_sol * 15);
      const estSteel = site.surface_m2 * 0.1;
      const totalKg = (estConcrete * 200) + (estSteel * 2500);
      const totalTons = totalKg / 1000;

      return {
        nom: site.nom,
        surface_m2: site.surface_m2,
        nb_employes: site.nb_employes,
        parking_sous_sol: site.parking_sous_sol,
        parking_sous_dalle: site.parking_sous_dalle,
        parking_aerien: site.parking_aerien,
        created_at: createdDate.toISOString(),
      };
    });

    // Insérer sans user_id pour les données de test publiques
    const { data: insertedSites, error: insertError } = await client
      .from('sites')
      .insert(sitesWithDates)
      .select();

    if (insertError) {
      console.error('❌ Error inserting sites:', insertError);
      throw insertError;
    }

    console.log(`✅ Successfully created ${insertedSites?.length || 0} test sites\n`);

    // Afficher les données créées
    console.log('📈 Created Sites:');
    sitesWithDates.forEach((site, i) => {
      // Calculer le carbon pour l'affichage
      const estConcrete = (site.surface_m2 * 1.2) + (site.parking_sous_sol * 15);
      const estSteel = site.surface_m2 * 0.1;
      const totalKg = (estConcrete * 200) + (estSteel * 2500);
      const totalTons = totalKg / 1000;
      
      console.log(`  ${i + 1}. ${site.nom}`);
      console.log(`     → Surface: ${site.surface_m2.toLocaleString()} m²`);
      console.log(`     → Carbon estimé: ${totalTons.toFixed(2)} tCO2e`);
      console.log(`     → Créé: ${new Date(site.created_at).toLocaleDateString('fr-FR')}`);
    });

    console.log('\n✨ Seed completed successfully!');
    console.log('📊 Dashboard should now display data from these sites.');

    return true;
  } catch (error) {
    console.error('❌ Seed failed:', error.message);
    throw error;
  }
}

// Exécuter le seed
seedDatabase()
  .then(() => {
    console.log('\n✅ All done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
