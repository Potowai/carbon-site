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
  private readonly API_URL = `${environment.apiUrl}/ai/explain-dashboard`;

  constructor(private http: HttpClient) {}

  /**
   * Explique les données du dashboard via le backend (proxy vers OpenRouter)
   */
  explainDashboardData(
    question: string,
    context: DashboardContext
  ): Observable<AIExplanationResponse> {
    const request = {
      question,
      context
    };

    return this.http.post<any>(this.API_URL, request).pipe(
      catchError(error => {
        console.error('Erreur AI Explanation:', error);
        let errorMessage = 'Erreur lors de la communication avec l\'IA';
        
        if (error.status === 401) {
          errorMessage = 'Token API OpenRouter non configuré sur le serveur. Contactez l\'administrateur.';
        } else if (error.status === 429) {
          errorMessage = 'Limite de requêtes atteinte. Veuillez réessayer plus tard.';
        } else if (error.status === 0) {
          errorMessage = 'Erreur réseau. Vérifiez votre connexion internet.';
        } else if (error.error?.message) {
          errorMessage = error.error.message;
        }
        
        return throwError(() => new Error(errorMessage));
      })
    );
  }

  /**
   * Vérifie si le service IA est disponible (token configuré côté backend)
   */
  isTokenConfigured(): boolean {
    // Le token est géré côté backend, on considère toujours que c'est configuré
    // L'erreur 401 sera gérée au moment de l'appel si nécessaire
    return true;
  }
}
