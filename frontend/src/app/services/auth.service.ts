import { Component, Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase: SupabaseClient;
  private userSubject = new BehaviorSubject<User | null>(null);

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );

    // Initial check
    this.supabase.auth.getUser().then(({ data: { user } }) => {
      this.userSubject.next(user);
    });

    // Listen to changes
    this.supabase.auth.onAuthStateChange((event, session) => {
      this.userSubject.next(session?.user ?? null);
    });
  }

  get user$(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  get currentUser(): User | null {
    return this.userSubject.value;
  }

  async signUp(email: string, pass: string) {
    return this.supabase.auth.signUp({ email, password: pass });
  }

  async signIn(email: string, pass: string) {
    return this.supabase.auth.signInWithPassword({ email, password: pass });
  }

  async signOut() {
    await this.supabase.auth.signOut();
  }

  // Helper for RLS headers if needed for REST API
  async getSession() {
    const { data, error } = await this.supabase.auth.getSession();
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
      const refreshed = await this.supabase.auth.refreshSession();
      if (refreshed.error) {
        // If refresh fails, fall back to current session (may 401) and let UI handle re-login.
        return session;
      }
      return refreshed.data.session;
    }

    return session;
  }
}
