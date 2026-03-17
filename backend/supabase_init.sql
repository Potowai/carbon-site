-- Create sites table
CREATE TABLE IF NOT EXISTS sites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nom TEXT NOT NULL,
    surface_m2 FLOAT,
    parking_sous_dalle INT,
    parking_sous_sol INT,
    parking_aerien INT,
    nb_employes INT,
    postes_travail INT,
    user_id TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Create materiaux table
CREATE TABLE IF NOT EXISTS materiaux (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    type_materiau TEXT NOT NULL,
    quantite_tonnes FLOAT,
    estime_par_algo BOOLEAN DEFAULT false
);

-- Create consommations table
CREATE TABLE IF NOT EXISTS consommations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    annee INT NOT NULL,
    energie_mwh FLOAT
);

-- Create dashboard_stats table
CREATE TABLE IF NOT EXISTS dashboard_stats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_name TEXT NOT NULL,
    total_footprint FLOAT,
    carbon_intensity FLOAT,
    global_score TEXT,
    active_sites INT,
    carbon_trend JSONB,
    material_distribution JSONB,
    user_id TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS and public access for demo purposes (optional but common for hackathons)
ALTER TABLE sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE materiaux ENABLE ROW LEVEL SECURITY;
ALTER TABLE consommations ENABLE ROW LEVEL SECURITY;
ALTER TABLE dashboard_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all" ON sites FOR ALL USING (true);
CREATE POLICY "Allow all" ON materiaux FOR ALL USING (true);
CREATE POLICY "Allow all" ON consommations FOR ALL USING (true);
CREATE POLICY "Allow all" ON dashboard_stats FOR ALL USING (true);
