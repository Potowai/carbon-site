import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SiteService } from '../../services/site.service';
import { Observable } from 'rxjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, NgxChartsModule, MatSnackBarModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  user$: Observable<any>;
  stats: any = null;
  loading = true;
  
  // Data for ngx-charts
  carbonTrend: any[] = [];
  materialDistribution: any[] = [];

  colorScheme: any = {
    domain: ['#10b981', '#3b82f6', '#06b6d4', '#64748b']
  };

  get hasValidCarbonTrend(): boolean {
    return Array.isArray(this.carbonTrend) &&
      this.carbonTrend.length > 0 &&
      this.carbonTrend.every((serie: any) => Array.isArray(serie?.series));
  }

  get hasValidMaterialDistribution(): boolean {
    return Array.isArray(this.materialDistribution) && this.materialDistribution.length > 0;
  }

  constructor(
    private auth: AuthService, 
    private siteService: SiteService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.user$ = this.auth.user$;
  }

  ngOnInit() {
    this.loadDashboardData();
  }

  private toNumber(value: unknown): number {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  private normalizeTrendData(input: unknown): any[] {
    if (Array.isArray(input)) {
      if (input.length > 0 && input[0] && Array.isArray(input[0].series)) {
        return input
          .map((serie: any) => ({
            name: serie?.name ?? 'Serie',
            series: Array.isArray(serie?.series)
              ? serie.series.map((point: any, index: number) => ({
                name: point?.name ?? point?.label ?? point?.x ?? `Point ${index + 1}`,
                value: this.toNumber(point?.value ?? point?.y ?? 0)
              }))
              : []
          }))
          .filter((serie: any) => serie.series.length > 0);
      }

      return [
        {
          name: 'Emissions',
          series: input.map((item: any, index: number) => ({
            name: item?.name ?? item?.label ?? item?.x ?? `Point ${index + 1}`,
            value: this.toNumber(item?.value ?? item?.y ?? item)
          }))
        }
      ];
    }

    if (input && typeof input === 'object') {
      const entries = Object.entries(input as Record<string, unknown>);
      return [
        {
          name: 'Emissions',
          series: entries.map(([key, value]) => ({
            name: key,
            value: this.toNumber(value)
          }))
        }
      ];
    }

    return [];
  }

  private normalizePieData(input: unknown): any[] {
    if (Array.isArray(input)) {
      return input.map((item: any, index: number) => ({
        name: item?.name ?? item?.label ?? `Categorie ${index + 1}`,
        value: this.toNumber(item?.value ?? item)
      })).filter((item: any) => Number.isFinite(item.value));
    }

    if (input && typeof input === 'object') {
      return Object.entries(input as Record<string, unknown>).map(([key, value]) => ({
        name: key,
        value: this.toNumber(value)
      })).filter((item: any) => Number.isFinite(item.value));
    }

    return [];
  }

  loadDashboardData() {
    this.loading = true;
    this.siteService.getGlobalDashboardStats().subscribe({
      next: (data) => {
        this.stats = data || {};
        this.carbonTrend = this.normalizeTrendData(data?.carbon_trend);
        this.materialDistribution = this.normalizePieData(data?.material_distribution);
        this.loading = false;
      },
      error: (err) => {
        this.snackBar.open('Erreur lors du chargement des statistiques du dashboard.', 'Fermer', {
          duration: 5000,
          panelClass: ['error-snackbar']
        });
        this.loading = false;
      }
    });
  }

  async logout() {
    await this.auth.signOut();
    this.router.navigate(['/']);
  }
}
