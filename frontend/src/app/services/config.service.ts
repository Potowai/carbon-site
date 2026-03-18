import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError, first } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface AppConfig {
  supabaseUrl: string;
  supabaseKey: string;
  apiUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configSubject = new BehaviorSubject<AppConfig | null>(null);
  public config$ = this.configSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Load configuration from the backend
   */
  loadConfig(): Observable<AppConfig> {
    const configUrl = environment.configUrl || `${environment.apiUrl}/config`;
    
    return this.http.get<{ success: boolean; data: AppConfig }>(configUrl).pipe(
      tap((response) => {
        if (response.success && response.data) {
          this.configSubject.next(response.data);
        }
      }),
      catchError((error) => {
        console.error('Failed to load configuration from backend:', error);
        // Return empty config on error - the user won't be able to use authentication
        return of({
          supabaseUrl: '',
          supabaseKey: '',
          apiUrl: environment.apiUrl
        } as AppConfig);
      }),
      first(),
      tap((config) => {
        if (!config.supabaseUrl || !config.supabaseKey) {
          console.warn('Configuration is incomplete - Supabase credentials not available');
        }
      })
    );
  }

  /**
   * Get the current configuration synchronously if already loaded
   */
  getConfig(): AppConfig | null {
    return this.configSubject.value;
  }

  /**
   * Get configuration as observable
   */
  getConfig$(): Observable<AppConfig | null> {
    return this.config$;
  }
}
