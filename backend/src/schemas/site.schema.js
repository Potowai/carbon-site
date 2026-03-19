const { z } = require('zod');

const optionalNumber = z.preprocess((value) => {
  if (value === '' || value === null || value === undefined) {
    return undefined;
  }

  const parsedValue = Number(value);
  return Number.isNaN(parsedValue) ? value : parsedValue;
}, z.number().nonnegative().optional());

const optionalInteger = z.preprocess((value) => {
  if (value === '' || value === null || value === undefined) {
    return undefined;
  }

  const parsedValue = Number(value);
  return Number.isNaN(parsedValue) ? value : parsedValue;
}, z.number().int().nonnegative().optional());

const materialSchema = z.object({
  type_materiau: z.string().trim().min(1, 'Le type de materiau est requis'),
  quantite_tonnes: optionalNumber,
  estime_par_algo: z.boolean().default(false)
});

const consommationSchema = z.object({
  annee: z.preprocess((value) => Number(value), z.number().int().min(2000).max(2100)),
  energie_mwh: optionalNumber
});

const siteCreateSchema = z.object({
  nom: z.string().trim().min(3, 'Le nom doit faire au moins 3 caracteres'),
  surface_m2: optionalNumber,
  parking_sous_dalle: optionalInteger,
  parking_sous_sol: optionalInteger,
  parking_aerien: optionalInteger,
  nb_employes: optionalInteger,
  postes_travail: optionalInteger,
  auto_estimer_materiaux: z.boolean().optional().default(true),
  materiaux: z.array(materialSchema).default([]),
  consommations: z.array(consommationSchema).default([])
});

const siteRecommendationSchema = z.object({
  surface_m2: optionalNumber,
  materiaux: z.array(materialSchema).min(1, 'Au moins un materiau est requis')
});

const estimationSchema = z.object({
  concreteVolume: z.number().min(0),
  steelWeight: z.number().min(0),
  woodVolume: z.number().min(0),
  energyUsage: z.number().min(0)
});

module.exports = {
  siteCreateSchema,
  estimationSchema,
  siteRecommendationSchema
};
