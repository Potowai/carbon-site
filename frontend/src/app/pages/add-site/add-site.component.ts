import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SiteService } from '../../services/site.service';
import { LucideAngularModule, Building2, LayoutDashboard, ChevronLeft } from 'lucide-angular';

@Component({
  selector: 'app-add-site',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    LucideAngularModule
  ],
  templateUrl: './add-site.component.html',
  styleUrl: './add-site.component.scss',
})
export class AddSiteComponent {
  generalFormGroup: FormGroup;
  infraFormGroup: FormGroup;
  energyFormGroup: FormGroup;
  isMenuOpen = false;
  isSubmitting = false;
  analysisResult: any = null;
  step = 1;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(
    private _formBuilder: FormBuilder, 
    private router: Router,
    private snackBar: MatSnackBar,
    private siteService: SiteService
  ) {
    this.generalFormGroup = this._formBuilder.group({
      nom: ['', Validators.required],
      surface_m2: ['', Validators.min(1)],
      nb_employes: ['', Validators.min(1)]
    });

    this.infraFormGroup = this._formBuilder.group({
      parking_sous_sol: [''],
      parking_sous_dalle: [''],
      parking_aerien: ['']
    });

    this.energyFormGroup = this._formBuilder.group({
      energie_mwh: [''],
      auto_estimer_materiaux: [true]
    });
  }

  async submit() {
    this.isSubmitting = true;
    const payload = {
      ...this.generalFormGroup.value,
      ...this.infraFormGroup.value,
      ...this.energyFormGroup.value
    };

    try {
      this.siteService.createSite(payload).subscribe({
        next: (response: any) => {
          this.isSubmitting = false;
          this.analysisResult = response.data;
          console.log('Analysis result received:', this.analysisResult);
          
          this.snackBar.open("Site ajouté avec succès ! Impact Carbone Estimé: " + 
            (this.analysisResult?.total_carbon_tons ? this.analysisResult.total_carbon_tons.toFixed(2) + " tCO₂e" : "N/A"), "OK", {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.isSubmitting = false;
          const errorMsg = err.error?.message || "Erreur lors de l'ajout du site.";
          this.snackBar.open(errorMsg, "Réessayer", {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
          console.error('Create Site Error:', err);
        }
      });
    } catch (err) {
      this.isSubmitting = false;
      console.error('Session retrieval error:', err);
    }
  }
}
