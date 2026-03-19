import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ConfigService } from '../../services/config.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSnackBarModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  isLogin = true;
  email = '';
  password = '';
  loading = false;
  isMenuOpen = false;
  configError = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(
    private auth: AuthService, 
    private configService: ConfigService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.auth.user$.subscribe(user => {
      if (user) this.router.navigate(['/dashboard']);
    });
  }

  ngOnInit() {
    // Config is now guaranteed to be loaded via APP_INITIALIZER
    const config = this.configService.getConfig();
    console.log('[HomeComponent] ngOnInit - Config status:', {
      isLoaded: config !== null,
      hasUrl: config?.supabaseUrl ? '✓' : '✗',
      hasKey: config?.supabaseKey ? '✓' : '✗'
    });
    
    if (!config || !config.supabaseUrl || !config.supabaseKey) {
      console.warn('[HomeComponent] ✗ Configuration still not available - this should not happen');
      this.configError = true;
      this.snackBar.open(
        'Configuration error: Unable to load authentication service. Please refresh the page.',
        'OK',
        { duration: 0, panelClass: ['error-snackbar'] }
      );
    } else {
      console.log('[HomeComponent] ✓ Configuration is valid and ready');
    }
  }

  async handleSubmit() {
    console.log('[HomeComponent] Login attempt:', { isLogin: this.isLogin, email: this.email });
    
    if (this.configError) {
      console.warn('[HomeComponent] Config error - blocking login');
      this.snackBar.open('Configuration not ready. Please refresh the page.', 'OK', { duration: 3000 });
      return;
    }

    this.loading = true;
    console.log('[HomeComponent] Starting authentication...');
    
    try {
      const method = this.isLogin ? 'signIn' : 'signUp';
      console.log(`[HomeComponent] Calling auth.${method}(${this.email})`);
      
      const { data, error } = this.isLogin 
        ? await this.auth.signIn(this.email, this.password)
        : await this.auth.signUp(this.email, this.password);
      
      console.log(`[HomeComponent] auth.${method} response:`, { 
        hasData: !!data,
        error: error?.message || 'none'
      });
      
      if (error) {
        console.error('[HomeComponent] Auth error:', error);
        throw error;
      }

      console.log('[HomeComponent] ✓ Authentication successful');

      if (!this.isLogin) {
        this.snackBar.open(
          'Inscription réussie ! Veuillez vérifier votre boîte mail pour valider votre compte.', 
          'OK', 
          { duration: 10000, panelClass: ['success-snackbar'] }
        );
        this.isLogin = true;
      }
    } catch (e: any) {
      console.error('[HomeComponent] ✗ Authentication failed:', {
        message: e.message,
        code: e.code,
        status: e.status
      });
      
      const message = e.message?.includes('Email not confirmed') 
        ? 'Veuillez valider votre adresse email avant de vous connecter.'
        : e.message || 'Une erreur s\'est produite lors de l\'authentification.';
      
      this.snackBar.open(message, 'Fermer', { duration: 5000, panelClass: ['error-snackbar'] });
    } finally {
      this.loading = false;
      console.log('[HomeComponent] Authentication attempt completed');
    }
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
  }
}
