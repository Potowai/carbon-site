const { z } = require('zod');

const siteCreateSchema = z.object({
  name: z.string().min(3, "Le nom doit faire au moins 3 caractères"),
  address: z.string().min(5, "L'adresse est requise"),
  surface: z.number().min(1, "La surface doit être supérieure à 0"),
  type: z.enum(['logement', 'bureau', 'industriel'], {
    errorMap: () => ({ message: "Type de site invalide" })
  })
});

const estimationSchema = z.object({
  concreteVolume: z.number().min(0),
  steelWeight: z.number().min(0),
  woodVolume: z.number().min(0),
  energyUsage: z.number().min(0)
});

module.exports = {
  siteCreateSchema,
  estimationSchema
};
