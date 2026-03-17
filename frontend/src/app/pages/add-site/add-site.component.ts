import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
    private snackBar: MatSnackBar
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

  submit() {
    const payload = {
      ...this.generalFormGroup.value,
      ...this.infraFormGroup.value,
      ...this.energyFormGroup.value
    };

    // Simulate API error as requested by the user for testing
    setTimeout(() => {
      this.snackBar.open("Erreur lors de la génération de l'analyse : Données incomplètes.", "Réessayer", {
        duration: 5000,
        panelClass: ['error-snackbar']
      });
      console.error("Simulation d'erreur activée par l'utilisateur.");
    }, 1000);
  }
}
