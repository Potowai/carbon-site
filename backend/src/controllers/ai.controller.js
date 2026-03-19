const express = require('express');
const { z } = require('zod');

// Schéma de validation pour la requête d'explication IA
const explainDashboardSchema = z.object({
  question: z.string().min(1, 'La question est requise'),
  context: z.object({
    total_footprint: z.number().default(0),
    carbon_intensity: z.number().default(0),
    global_score: z.number().default(0),
    active_sites: z.number().default(0),
    avg_surface: z.number().default(0),
    material_distribution: z.array(z.any()).default([]),
    trend_data: z.array(z.any()).default([]),
    currency: z.string().default('tCO2e'),
    unit: z.string().default('kg/m²')
  })
});

/**
 * Construit le prompt système pour l'IA
 */
const buildSystemPrompt = (context) => {
  const materialSummary = context.material_distribution
    ?.map((m) => `- ${m?.name || 'Inconnu'}: ${m?.value || 0} ${context.currency || 'tCO2e'}`)
    .join('\n') || 'Aucune donnée disponible';

  const trendSummary = context.trend_data
    ?.slice(-3)
    .map((t) => `- ${t?.month || t?.name || 'Date'}: ${t?.value || 0} ${context.currency || 'tCO2e'}`)
    .join('\n') || 'Aucune donnée disponible';

  return `Tu es un assistant expert en analyse carbone et en construction BTP. Tu expliques les données de dashboard de manière claire, pédagogique et accessible.

CONTEXTE DU DASHBOARD:
Voici les données actuelles du dashboard CarbonSite Pro:

📊 INDICATEURS CLÉS:
- Empreinte carbone totale: ${context.total_footprint || 0} ${context.currency || 'tCO2e'}
- Intensité carbone: ${context.carbon_intensity || 0} ${context.unit || 'kg/m²'}
- Score RE2020: ${context.global_score || 0}/100
- Nombre de sites actifs: ${context.active_sites || 0}
- Surface moyenne: ${context.avg_surface || 0} m²

🏗️ RÉPARTITION DES MATÉRIAUX:
${materialSummary}

📈 TENDANCE RÉCENTE (3 derniers points):
${trendSummary}

INSTRUCTIONS:
1. Explique ce que signifient ces données de manière simple et professionnelle
2. Utilise des analogies si nécessaire pour faciliter la compréhension
3. Donne des conseils actionnables basés sur les données
4. Si des valeurs semblent anormales ou préoccupantes, mentionne-le
5. Réponds en français de manière concise mais complète (max 500 mots)
6. Contextualise les chiffres (bons/mauvais par rapport aux standards RE2020)

L'utilisateur va te poser des questions sur ces données. Réponds en t'appuyant sur le contexte fourni.`;
};

/**
 * POST /api/ai/explain-dashboard
 * Explique les données du dashboard avec l'IA
 */
const explainDashboard = async (req, res, next) => {
  try {
    // Validation de la requête
    const { question, context } = explainDashboardSchema.parse(req.body);

    // Récupération du token depuis les variables d'environnement
    const apiToken = process.env.OPENROUTER_API_KEY;
    
    if (!apiToken) {
      return res.status(401).json({
        success: false,
        message: 'Token API OpenRouter non configuré',
        error: 'OPENROUTER_API_KEY manquant dans les variables d\'environnement'
      });
    }

    // Construction du prompt système
    const systemPrompt = buildSystemPrompt(context);

    // Appel à l'API OpenRouter
    const openRouterResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`,
        'HTTP-Referer': req.headers.origin || 'https://carbonsite.pro',
        'X-Title': 'CarbonSite Pro Dashboard AI'
      },
      body: JSON.stringify({
        model: 'google/gemma-2-9b-it:free',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: question }
        ],
        temperature: 0.7,
        max_tokens: 2000,
        top_p: 1
      })
    });

    if (!openRouterResponse.ok) {
      const errorData = await openRouterResponse.json().catch(() => ({}));
      console.error('OpenRouter API error:', errorData);
      
      if (openRouterResponse.status === 401) {
        return res.status(401).json({
          success: false,
          message: 'Token API OpenRouter invalide',
          error: 'Vérifiez votre OPENROUTER_API_KEY'
        });
      }
      
      if (openRouterResponse.status === 429) {
        return res.status(429).json({
          success: false,
          message: 'Limite de requêtes atteinte',
          error: 'Veuillez réessayer plus tard'
        });
      }

      return res.status(503).json({
        success: false,
        message: 'Service IA temporairement indisponible',
        error: `OpenRouter HTTP ${openRouterResponse.status}`
      });
    }

    const data = await openRouterResponse.json();

    if (!data.choices || data.choices.length === 0) {
      return res.status(503).json({
        success: false,
        message: 'Réponse IA vide',
        error: 'Aucune réponse générée'
      });
    }

    // Réponse succès
    res.json({
      success: true,
      data: {
        response: data.choices[0].message.content,
        model: data.model || 'google/gemma-2-9b-it:free',
        usage: data.usage || {
          prompt_tokens: 0,
          completion_tokens: 0,
          total_tokens: 0
        }
      }
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Données invalides',
        errors: error.errors.map(e => ({
          path: e.path.join('.'),
          message: e.message
        }))
      });
    }

    console.error('Erreur explainDashboard:', error);
    next(error);
  }
};

module.exports = {
  explainDashboard
};
