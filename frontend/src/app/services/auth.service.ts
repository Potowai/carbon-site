import { Component, Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase: SupabaseClient | null = null;
  private userSubject = new BehaviorSubject<User | null>(null);
  private initializePromise: Promise<void> | null = null;

  constructor(private configService: ConfigService) {
    this.initializeSupabase();
  }

  /**
   * Initialize Supabase client once config is available
   */
  private initializeSupabase() {
    this.initializePromise = this.configService.config$
      .pipe(
        filter(config => config !== null),
        tap((config) => {
          if (config && config.supabaseUrl && config.supabaseKey) {
            this.supabase = createClient(config.supabaseUrl, config.supabaseKey);
            this.setupAuthListeners();
          }
        })
      )
      .toPromise()
      .then(() => {});
  }

  /**
   * Setup auth state listeners
   */
  private setupAuthListeners() {
    if (!this.supabase) return;

    // Initial check
    this.supabase.auth.getUser().then(({ data: { user } }) => {
      this.userSubject.next(user);
    });

    // Listen to changes
    this.supabase.auth.onAuthStateChange((event, session) => {
      this.userSubject.next(session?.user ?? null);
    });
  }

  /**
   * Ensure client is initialized before operations
   */
  private async ensureInitialized(): Promise<SupabaseClient> {
    if (this.supabase) {
      return this.supabase;
    }

    if (this.initializePromise) {
      await this.initializePromise;
    }

    if (!this.supabase) {
      throw new Error('Supabase client not initialized - configuration not available');
    }

    return this.supabase;
  }

  get user$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  get currentUser(): User | null {
    return this.userSubject.value;
  }

  async signUp(email: string, pass: string) {
    const client = await this.ensureInitialized();
    return client.auth.signUp({ email, password: pass });
  }

  async signIn(email: string, pass: string) {
    const client = await this.ensureInitialized();
    return client.auth.signInWithPassword({ email, password: pass });
  }

  async signOut() {
    const client = await this.ensureInitialized();
    await client.auth.signOut();
  }

  // Helper for RLS headers if needed for REST API
  async getSession() {
    const client = await this.ensureInitialized();
    const { data, error } = await client.auth.getSession();
    if (error) {
      throw error;
    }

    const session = data.session;
    if (!session) {
      return null;
    }

    // Refresh token if expired (or about to expire soon)
    const expiresAtMs = (session.expires_at || 0) * 1000;
    const nowMs = Date.now();
    const skewMs = 60_000; // 60s safety window

    if (expiresAtMs > 0 && expiresAtMs - nowMs <= skewMs) {
      const refreshed = await client.auth.refreshSession();
      if (refreshed.error) {
        // If refresh fails, fall back to current session (may 401) and let UI handle re-login.
        return session;
      }
      return refreshed.data.session;
    }

    return session;
  }
}
