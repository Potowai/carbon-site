import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, map, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

export interface SitePayload {
  nom: string;
  surface_m2?: number | null;
  parking_sous_dalle?: number | null;
  parking_sous_sol?: number | null;
  parking_aerien?: number | null;
  nb_employes?: number | null;
  postes_travail?: number | null;
  consommations: Array<{
    annee: number;
    energie_mwh?: number | null;
  }>;
  materiaux: Array<{
    type_materiau: string;
    quantite_tonnes?: number | null;
    estime_par_algo: boolean;
  }>;
}

export interface SiteRecommendationPayload {
  surface_m2?: number | null;
  materiaux: Array<{
    type_materiau: string;
    quantite_tonnes?: number | null;
    estime_par_algo: boolean;
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private apiUrl = `${environment.apiUrl}/sites`;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getGlobalDashboardStats(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/global-dashboard`).pipe(
      map(response => response.data)
    );
  }

  getAllSites(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }

  getMySites(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/me`).pipe(
      map(response => response.data)
    );
  }

  getSiteById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(response => response.data)
    );
  }

  createSite(payload: SitePayload): Observable<any> {
    return from(this.authService.getSession()).pipe(
      switchMap((session) => {
        const headers = session?.access_token
          ? new HttpHeaders({ Authorization: `Bearer ${session.access_token}` })
          : undefined;

        return this.http.post<any>(this.apiUrl, payload, { headers });
      }),
      map(response => response.data)
    );
  }

  getRecommendationsFromAdeme(payload: SiteRecommendationPayload): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/recommendations`, payload).pipe(
      map(response => response.data)
    );
  }
}
