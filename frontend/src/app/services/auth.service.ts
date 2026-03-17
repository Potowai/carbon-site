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
    const { data } = await this.supabase.auth.getSession();
    return data.session;
  }
}
