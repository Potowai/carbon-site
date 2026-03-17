const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function run() {
  const { data, error } = await supabase.rpc('run_sql', {
    sql_query: 'ALTER TABLE sites ADD COLUMN IF NOT EXISTS total_carbon_tons FLOAT;'
  });

  if (error) {
    // If rpc run_sql doesn't work (common on public keys), we can try a hacky select if needed, 
    // but usually rpc is blocked. We'll use the API to check if we can insert it.
    console.error('SQL Error (might be expected if RPC disabled):', error);
  } else {
    console.log('SQL Success:', data);
  }
}

run();
