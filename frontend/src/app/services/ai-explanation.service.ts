import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export interface DashboardContext {
  total_footprint: number;
  carbon_intensity: number;
  global_score: number;
  active_sites: number;
  avg_surface: number;
  material_distribution: any[];
  trend_data: any[];
  currency: string;
  unit: string;
}

export interface AIExplanationResponse {
  response: string;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AiExplanationService {
  private readonly API_URL = 'https://openrouter.ai/api/v1/chat/completions';
  private readonly DEFAULT_MODEL = 'google/gemma-2-9b-it:free';

  constructor(private http: HttpClient) {}

  /**
   * Expliquer les données du dashboard avec l'IA via OpenRouter (direct)
   * @param question La question de l'utilisateur
   * @param context Les données du dashboard
   */
  explainDashboardData(
    question: string,
    context: DashboardContext
  ): Observable<AIExplanationResponse> {
    const apiToken = environment.openRouterApiKey;
    
    if (!apiToken) {
      return throwError(() => new Error('Token API non configuré. Ajoutez OPENROUTER_API_KEY dans .env.local'));
    }

    const systemPrompt = this.buildSystemPrompt(context);

    const request = {
      model: this.DEFAULT_MODEL,
      messages: [
        { role: 'system' as const, content: systemPrompt },
        { role: 'user' as const, content: question }
      ],
      temperature: 0.7,
      max_tokens: 2000,
      top_p: 1
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiToken}`,
      'HTTP-Referer': window.location.origin,
      'X-Title': 'CarbonSite Pro Dashboard AI'
    });

    return this.http.post<any>(this.API_URL, request, { headers }).pipe(
      catchError(error => {
        console.error('Erreur OpenRouter:', error);
        let errorMessage = 'Erreur lors de la communication avec l\'IA';
        
        if (error.status === 401) {
          errorMessage = 'Token API OpenRouter invalide. Vérifiez votre token dans .env.local';
        } else if (error.status === 429) {
          errorMessage = 'Limite de requêtes atteinte. Veuillez réessayer plus tard.';
        } else if (error.status === 0) {
          errorMessage = 'Erreur réseau. Vérifiez votre connexion internet.';
        }
        
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  /**
   * Construit le prompt système avec le contexte du dashboard
   */
  private buildSystemPrompt(context: DashboardContext): string {
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
  }

  /**
   * Vérifie si le token API est configuré
   */
  isTokenConfigured(): boolean {
    return !!environment.openRouterApiKey && environment.openRouterApiKey.length > 20;
  }
}
