import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSnackBarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isLogin = true;
  email = '';
  password = '';
  loading = false;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(
    private auth: AuthService, 
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.auth.user$.subscribe(user => {
      if (user) this.router.navigate(['/dashboard']);
    });
  }

  async handleSubmit() {
    this.loading = true;
    try {
      const { data, error } = this.isLogin 
        ? await this.auth.signIn(this.email, this.password)
        : await this.auth.signUp(this.email, this.password);
      
      if (error) throw error;

      if (!this.isLogin) {
        this.snackBar.open(
          'Inscription réussie ! Veuillez vérifier votre boîte mail pour valider votre compte.', 
          'OK', 
          { duration: 10000, panelClass: ['success-snackbar'] }
        );
        this.isLogin = true;
      }
    } catch (e: any) {
      const message = e.message.includes('Email not confirmed') 
        ? 'Veuillez valider votre adresse email avant de vous connecter.'
        : e.message;
      
      this.snackBar.open(message, 'Fermer', { duration: 5000, panelClass: ['error-snackbar'] });
    } finally {
      this.loading = false;
    }
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
  }
}
