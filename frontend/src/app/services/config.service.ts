import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
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
    
    console.log('[ConfigService] Starting config load from:', configUrl);
    console.log('[ConfigService] Environment:', { production: environment.production, apiUrl: environment.apiUrl });
    
    return this.http.get<{ success: boolean; data: AppConfig }>(configUrl).pipe(
      tap((response) => {
        console.log('[ConfigService] ✓ HTTP Request succeeded', response);
      }),
      map((response) => {
        if (!response.success || !response.data) {
          console.error('[ConfigService] ✗ Invalid response structure:', response);
          throw new Error('Invalid response format from config endpoint');
        }
        console.log('[ConfigService] ✓ Response is valid, extracted config');
        return response.data;
      }),
      tap((config) => {
        console.log('[ConfigService] Config after mapping:', { 
          supabaseUrl: config.supabaseUrl ? '✓ set' : '✗ missing',
          supabaseKey: config.supabaseKey ? '✓ set' : '✗ missing',
          apiUrl: config.apiUrl
        });
        
        if (!config.supabaseUrl || !config.supabaseKey) {
          console.error('[ConfigService] ✗ Missing Supabase credentials');
          throw new Error('Missing Supabase credentials in config');
        }
        console.log('[ConfigService] ✓ Config loaded successfully with valid Supabase credentials');
        this.configSubject.next(config);
      }),
      catchError((error) => {
        console.warn('[ConfigService] ⚠ Failed to load config from backend:', error?.message);
        // Return neutral response - app can still load but won't have auth
        const emptyConfig: AppConfig = {
          supabaseUrl: '',
          supabaseKey: '',
          apiUrl: environment.apiUrl
        };
        this.configSubject.next(emptyConfig);
        return of(emptyConfig);
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
