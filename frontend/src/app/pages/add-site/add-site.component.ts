import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { SitePayload, SiteRecommendationPayload, SiteService } from '../../services/site.service';

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
    MatSnackBarModule
  ],
  templateUrl: './add-site.component.html',
  styleUrl: './add-site.component.scss'
})
export class AddSiteComponent {
  generalFormGroup: FormGroup;
  infraFormGroup: FormGroup;
  detailsFormGroup: FormGroup;
  isSubmitting = false;
  isLoadingRecommendations = false;
  recommendationData: any | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private siteService: SiteService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.generalFormGroup = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      surface_m2: [null, Validators.min(1)],
      nb_employes: [null, Validators.min(0)]
    });

    this.infraFormGroup = this.formBuilder.group({
      parking_sous_sol: [null, Validators.min(0)],
      parking_sous_dalle: [null, Validators.min(0)],
      parking_aerien: [null, Validators.min(0)],
      postes_travail: [null, Validators.min(0)]
    });

    this.detailsFormGroup = this.formBuilder.group({
      consommations: this.formBuilder.array([this.createConsommationGroup()]),
      materiaux: this.formBuilder.array([this.createMateriauGroup()])
    });
  }

  get consommations(): FormArray<FormGroup> {
    return this.detailsFormGroup.get('consommations') as FormArray<FormGroup>;
  }

  get materiaux(): FormArray<FormGroup> {
    return this.detailsFormGroup.get('materiaux') as FormArray<FormGroup>;
  }

  createConsommationGroup(): FormGroup {
    return this.formBuilder.group({
      annee: [new Date().getFullYear(), [Validators.required, Validators.min(2000), Validators.max(2100)]],
      energie_mwh: [null, Validators.min(0)]
    });
  }

  createMateriauGroup(): FormGroup {
    return this.formBuilder.group({
      type_materiau: ['', Validators.required],
      quantite_tonnes: [null, Validators.min(0)],
      estime_par_algo: [false]
    });
  }

  addConsommation() {
    this.consommations.push(this.createConsommationGroup());
  }

  removeConsommation(index: number) {
    if (this.consommations.length > 1) {
      this.consommations.removeAt(index);
    }
  }

  addMateriau() {
    this.materiaux.push(this.createMateriauGroup());
  }

  removeMateriau(index: number) {
    if (this.materiaux.length > 1) {
      this.materiaux.removeAt(index);
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

  private toOptionalNumber(value: unknown): number | null {
    return value === '' || value === null || value === undefined ? null : Number(value);
  }

  private buildRecommendationPayload(): SiteRecommendationPayload {
    return {
      surface_m2: this.toOptionalNumber(this.generalFormGroup.value.surface_m2),
      materiaux: this.materiaux.controls.map((group) => ({
        type_materiau: group.value.type_materiau,
        quantite_tonnes: this.toOptionalNumber(group.value.quantite_tonnes),
        estime_par_algo: Boolean(group.value.estime_par_algo)
      }))
    };
  }

  fetchAdemeRecommendations() {
    this.generalFormGroup.markAllAsTouched();
    this.detailsFormGroup.markAllAsTouched();

    if (this.generalFormGroup.invalid || this.detailsFormGroup.invalid) {
      this.snackBar.open('Renseignez au minimum la surface et les materiaux pour lancer ADEME.', 'Fermer', {
        duration: 5000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    this.isLoadingRecommendations = true;
    this.recommendationData = null;

    this.siteService.getRecommendationsFromAdeme(this.buildRecommendationPayload())
      .pipe(finalize(() => {
        this.isLoadingRecommendations = false;
      }))
      .subscribe({
        next: (data) => {
          this.recommendationData = data;
          this.snackBar.open('Recommandations ADEME generees.', 'Fermer', {
            duration: 3500,
            panelClass: ['success-snackbar']
          });
        },
        error: (error) => {
          const apiErrors = error?.error?.errors;
          const message = Array.isArray(apiErrors) && apiErrors.length > 0
            ? apiErrors.map((issue: { message: string }) => issue.message).join(' | ')
            : 'Impossible de recuperer les recommandations ADEME.';

          this.snackBar.open(message, 'Fermer', {
            duration: 6000,
            panelClass: ['error-snackbar']
          });
        }
      });
  }

  submit() {
    this.generalFormGroup.markAllAsTouched();
    this.infraFormGroup.markAllAsTouched();
    this.detailsFormGroup.markAllAsTouched();

    if (this.generalFormGroup.invalid || this.infraFormGroup.invalid || this.detailsFormGroup.invalid) {
      this.snackBar.open('Veuillez corriger les champs invalides avant de continuer.', 'Fermer', {
        duration: 4000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    const payload: SitePayload = {
      nom: this.generalFormGroup.value.nom,
      surface_m2: this.toOptionalNumber(this.generalFormGroup.value.surface_m2),
      nb_employes: this.toOptionalNumber(this.generalFormGroup.value.nb_employes),
      parking_sous_sol: this.toOptionalNumber(this.infraFormGroup.value.parking_sous_sol),
      parking_sous_dalle: this.toOptionalNumber(this.infraFormGroup.value.parking_sous_dalle),
      parking_aerien: this.toOptionalNumber(this.infraFormGroup.value.parking_aerien),
      postes_travail: this.toOptionalNumber(this.infraFormGroup.value.postes_travail),
      consommations: this.consommations.controls.map((group) => ({
        annee: Number(group.value.annee),
        energie_mwh: this.toOptionalNumber(group.value.energie_mwh)
      })),
      materiaux: this.materiaux.controls.map((group) => ({
        type_materiau: group.value.type_materiau,
        quantite_tonnes: this.toOptionalNumber(group.value.quantite_tonnes),
        estime_par_algo: Boolean(group.value.estime_par_algo)
      }))
    };

    this.isSubmitting = true;
    this.siteService.createSite(payload)
      .pipe(finalize(() => {
        this.isSubmitting = false;
      }))
      .subscribe({
        next: () => {
          this.snackBar.open('Le site a ete enregistre avec succes.', 'Fermer', {
            duration: 4000,
            panelClass: ['success-snackbar']
          });
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          const apiErrors = error?.error?.errors;
          const message = Array.isArray(apiErrors) && apiErrors.length > 0
            ? apiErrors.map((issue: { message: string }) => issue.message).join(' | ')
            : 'Erreur lors de l enregistrement du site.';

          this.snackBar.open(message, 'Fermer', {
            duration: 6000,
            panelClass: ['error-snackbar']
          });
        }
      });
  }
}
