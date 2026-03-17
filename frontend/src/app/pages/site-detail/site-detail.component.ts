import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';
import { SiteService } from '../../services/site.service';
import { AuthService } from '../../services/auth.service';

type ChartItem = { name: string; value: number };

@Component({
  selector: 'app-site-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NgxChartsModule],
  templateUrl: './site-detail.component.html'
})
export class SiteDetailComponent implements OnInit, OnDestroy {
  private sub = new Subscription();
  user$: Observable<any>;
  loading = true;
  error: string | null = null;
  LegendPosition = LegendPosition;
  site: any | null = null;

  // KPIs
  totalCo2Kg: number | null = null;
  constructionKg: number | null = null;
  exploitationKg: number | null = null;
  co2ParM2: number | null = null;
  co2ParEmploye: number | null = null;

  // Graphs
  materialChart: ChartItem[] = [];
  energyChart: ChartItem[] = []; 
  emissionSplitChart: ChartItem[] = []; 

  colorScheme: any = {
    domain: ['#10b981', '#3b82f6', '#06b6d4', '#64748b', '#f59e0b', '#ef4444'],
  };

  // Facteurs (alignés avec tes docs)
  private FACTEURS_EMISSION: Record<string, number> = {
    BETON: 85, // kgCO2e/tonne
    ACIER: 1900,
    VERRE: 1200,
    BOIS: 30,
    ELECTRICITE_FR: 39.4, // kgCO2e/MWh
  };

  constructor(
    private auth: AuthService, 
    private route: ActivatedRoute, 
    private siteService: SiteService,
    private router: Router
  ) {
    this.user$ = this.auth.user$;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.loading = false;
      this.error = 'Identifiant de site manquant.';
      return;
    }

    this.sub.add(
      this.siteService.getSiteById(id).subscribe({
        next: (site) => {
          this.site = site;
          this.computeKpisAndCharts(site);
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.error = "Impossible de charger le détail du site.";
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  async logout() {
    await this.auth.signOut();
    this.router.navigate(['/']);
  }

  private computeKpisAndCharts(site: any) {
    const materiaux: any[] = Array.isArray(site?.materiaux) ? site.materiaux : [];
    const consommations: any[] = Array.isArray(site?.consommations) ? site.consommations : [];

    // 1) Construction (matériaux)
    let constructionKg = 0;
    const materialChart: ChartItem[] = [];

    for (const m of materiaux) {
      const type = String(m.type_materiau || '').toUpperCase();
      const q = Number(m.quantite_tonnes ?? 0);
      const fe = this.FACTEURS_EMISSION[type] ?? 0;
      const co2 = q * fe;

      if (q > 0) {
        materialChart.push({ name: type, value: Math.round(q) }); // en tonnes
      }
      constructionKg += co2;
    }

    // 2) Exploitation (énergie)
    let exploitationKg = 0;
    const energyChart: ChartItem[] = [];

    for (const c of consommations) {
      const annee = c.annee;
      const mwh = Number(c.energie_mwh ?? 0);
      if (annee != null && mwh > 0) {
        energyChart.push({ name: String(annee), value: Math.round(mwh) });
      }
      exploitationKg += mwh * this.FACTEURS_EMISSION['ELECTRICITE_FR'];
    }

    const totalKg = constructionKg + exploitationKg;

    this.constructionKg = totalKg > 0 ? constructionKg : null;
    this.exploitationKg = totalKg > 0 ? exploitationKg : null;
    this.totalCo2Kg = totalKg > 0 ? totalKg : null;

    const surface = Number(site?.surface_m2 ?? 0);
    const nbEmployes = Number(site?.nb_employes ?? 0);

    this.co2ParM2 = totalKg > 0 && surface > 0 ? totalKg / surface : null;
    this.co2ParEmploye = totalKg > 0 && nbEmployes > 0 ? totalKg / nbEmployes : null;

    this.materialChart = materialChart;
    this.energyChart = energyChart;

    this.emissionSplitChart =
      totalKg > 0
        ? [
            { name: 'Construction', value: Math.round(constructionKg / 1000) }, // tCO2e
            { name: 'Exploitation', value: Math.round(exploitationKg / 1000) }, // tCO2e
          ]
        : [];
  }

  get hasMaterials(): boolean {
    return this.materialChart.length > 0;
  }

  get hasEnergy(): boolean {
    return this.energyChart.length > 0;
  }

  get hasEmissions(): boolean {
    return this.totalCo2Kg != null;
  }
}