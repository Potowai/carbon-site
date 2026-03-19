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

const getAllSites = async (req, res, next) => {
  try {
    const { data: sites, error } = await supabase
      .from('sites')
      .select('*, consommations(*), materiaux(*)')
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json({ success: true, data: sites });
  } catch (error) {
    next(error);
  }
};

const createSite = async (req, res, next) => {
  try {
    const payload = siteCreateSchema.parse(req.body);
    const userId = req.auth?.userId;
    gettypesetqtty(payload);
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
    const { data: stats, error } = await supabase
      .from('dashboard_stats')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error && error.code !== 'PGRST116') throw error;

    res.json({ success: true, data: stats || null });
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
  createSite,
  estimateCarbon,
  getGlobalDashboard,
  getAdemeRecommendations
};
