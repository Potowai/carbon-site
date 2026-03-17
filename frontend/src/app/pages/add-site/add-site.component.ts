import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-add-site',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './add-site.component.html',
  styleUrl: './add-site.component.scss'
})
export class AddSiteComponent {
  generalFormGroup: FormGroup;
  infraFormGroup: FormGroup;
  energyFormGroup: FormGroup;

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
    const payload = {
      ...this.generalFormGroup.value,
      ...this.infraFormGroup.value,
      ...this.energyFormGroup.value
    };

    try {
      this.siteService.createSite(payload).subscribe({
        next: (response) => {
          this.snackBar.open("Site créé avec succès!", "Fermer", {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['/sites']);
        },
        error: (error) => {
          this.snackBar.open("Erreur lors de la création du site", "Réessayer", {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
          console.error("Erreur API:", error);
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
}
