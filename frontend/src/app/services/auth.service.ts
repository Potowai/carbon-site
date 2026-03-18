import { Component, Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { filter, tap, take } from 'rxjs/operators';
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
    console.log('[AuthService] Initializing Supabase client...');
    console.log('[AuthService] Waiting for config from ConfigService');
    
    this.initializePromise = firstValueFrom(
      this.configService.config$.pipe(
        tap(config => {
          console.log('[AuthService] Config observable emitted:', { 
            isNull: config === null,
            hasUrl: config?.supabaseUrl ? '✓' : '✗',
            hasKey: config?.supabaseKey ? '✓' : '✗'
          });
        }),
        filter(config => config !== null), // Accept any config, even empty ones
        tap((config) => {
          // Only create client if we have valid credentials
          if (config.supabaseUrl && config.supabaseKey) {
            console.log('[AuthService] ✓ Valid config received, creating Supabase client');
            this.supabase = createClient(config.supabaseUrl, config.supabaseKey);
            console.log('[AuthService] ✓ Supabase client created successfully');
            this.setupAuthListeners();
          } else {
            console.warn('[AuthService] ⚠ Config loaded but missing Supabase credentials - auth will be unavailable');
          }
        }),
        take(1) // Complete after first config emission
      )
    ).then(() => {
      console.log('[AuthService] ✓ Supabase initialization complete');
    }).catch(err => {
      console.error('[AuthService] ✗ Failed to initialize Supabase:', err);
    });
  }

  /**
   * Setup auth state listeners
   */
  private setupAuthListeners() {
    if (!this.supabase) {
      console.error('[AuthService] Cannot setup listeners, Supabase client is null');
      return;
    }

    console.log('[AuthService] Setting up authentication listeners');

    // Initial check
    this.supabase.auth.getUser().then(({ data: { user } }) => {
      console.log('[AuthService] ✓ Initial user check:', user ? `user logged in (${user.email})` : 'no user');
      this.userSubject.next(user);
    }).catch(err => {
      console.error('[AuthService] Error checking user:', err);
    });

    // Listen to changes
    this.supabase.auth.onAuthStateChange((event, session) => {
      console.log('[AuthService] Auth state changed:', event, session?.user?.email || 'no user');
      this.userSubject.next(session?.user ?? null);
    });
  }

  /**
   * Ensure client is initialized before operations
   */
  private async ensureInitialized(): Promise<SupabaseClient> {
    console.log('[AuthService] ensureInitialized() called');
    
    if (this.supabase) {
      console.log('[AuthService] ✓ Supabase client already initialized');
      return this.supabase;
    }

    console.log('[AuthService] Waiting for initialization promise...');
    if (this.initializePromise) {
      await this.initializePromise;
    }

    if (!this.supabase) {
      console.warn('[AuthService] ⚠ Supabase client not initialized - configuration unavailable. Auth operations unavailable.');
      // Return a stub object instead of throwing - allows app to function without auth
      return null as any;
    }

    console.log('[AuthService] ✓ Supabase client is ready');
    return this.supabase;
  }

  get user$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  get currentUser(): User | null {
    return this.userSubject.value;
  }

  async signUp(email: string, pass: string) {
    console.log('[AuthService] signUp called for:', email);
    try {
      const client = await this.ensureInitialized();
      console.log('[AuthService] Calling supabase.auth.signUp()');
      const result = await client.auth.signUp({ email, password: pass });
      console.log('[AuthService] signUp result:', { 
        hasUser: !!result.data.user,
        error: result.error?.message || 'none'
      });
      return result;
    } catch (err) {
      console.error('[AuthService] signUp error:', err);
      throw err;
    }
  }

  async signIn(email: string, pass: string) {
    console.log('[AuthService] signIn called for:', email);
    try {
      const client = await this.ensureInitialized();
      console.log('[AuthService] Calling supabase.auth.signInWithPassword()');
      const result = await client.auth.signInWithPassword({ email, password: pass });
      console.log('[AuthService] signIn result:', { 
        hasUser: !!result.data.user,
        error: result.error?.message || 'none'
      });
      return result;
    } catch (err) {
      console.error('[AuthService] signIn error:', err);
      throw err;
    }
  }

  async signOut() {
    console.log('[AuthService] signOut called');
    try {
      const client = await this.ensureInitialized();
      const result = await client.auth.signOut();
      console.log('[AuthService] ✓ signOut successful');
      return result;
    } catch (err) {
      console.error('[AuthService] signOut error:', err);
      throw err;
    }
  }

  // Helper for RLS headers if needed for REST API
  async getSession() {
    console.log('[AuthService] getSession called');
    
    // If Supabase not initialized, just return null quickly (no auth configured)
    if (!this.supabase) {
      console.log('[AuthService] Supabase not initialized - no auth available');
      return null;
    }
    
    try {
      const { data, error } = await this.supabase.auth.getSession();
      if (error) {
        console.error('[AuthService] getSession error:', error);
        return null;
      }

      const session = data.session;
      console.log('[AuthService] getSession result:', { 
        hasSession: !!session,
        expiresAt: session?.expires_at 
      });
      
      if (!session) {
        return null;
      }

      // Refresh token if expired (or about to expire soon)
      const expiresAtMs = (session.expires_at || 0) * 1000;
      const nowMs = Date.now();
      const skewMs = 60_000; // 60s safety window

      if (expiresAtMs > 0 && expiresAtMs - nowMs <= skewMs) {
        console.log('[AuthService] Token expiring soon, refreshing...');
        const refreshed = await this.supabase.auth.refreshSession();
        if (refreshed.error) {
          console.warn('[AuthService] Token refresh failed, using existing session');
          return session;
        }
        console.log('[AuthService] ✓ Token refreshed');
        return refreshed.data.session;
      }

      return session;
    } catch (err) {
      console.error('[AuthService] getSession error:', err);
      return null;
    }
  }
}
