-- Ajoute la colonne manquante si la table existe déjà sans.
-- À exécuter dans Supabase (SQL Editor) si vous voyez:
-- "Could not find the 'total_carbon_tons' column of 'sites' in the schema cache"

ALTER TABLE public.sites
ADD COLUMN IF NOT EXISTS total_carbon_tons double precision;

