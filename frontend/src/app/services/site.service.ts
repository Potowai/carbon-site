import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private apiUrl = `${environment.apiUrl}/sites`;

  constructor(private http: HttpClient) { }

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

  createSite(siteData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, siteData).pipe(
      map(response => response.data)
    );
  }
}
