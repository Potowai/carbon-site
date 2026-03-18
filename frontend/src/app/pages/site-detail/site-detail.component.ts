import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { SiteService } from '../../services/site.service';
import { LucideAngularModule } from 'lucide-angular';
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import { ApexOptions } from 'ng-apexcharts';

type Site = {
  id: string | number;
  nom: string;
  surface_m2?: number;
  nb_employes?: number;
  parking_sous_sol?: number;
  parking_sous_dalle?: number;
  parking_aerien?: number;
  total_carbon_tons?: number;
  created_at?: string;
};

@Component({
  selector: 'app-site-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule, NgApexchartsModule],
  templateUrl: './site-detail.component.html',
  styleUrl: './site-detail.component.scss'
})
export class SiteDetailComponent implements OnInit, OnDestroy {
  loading = true;
  errorMessage = '';
  site: Site | null = null;
  private sub?: Subscription;

  // Graphe options - properly initialized
  parkingChartOptions: ApexOptions & { series: number[]; labels: string[]; colors: string[] } = {
    chart: { type: 'pie' },
    series: [],
    labels: [],
    colors: [],
    legend: { position: 'bottom' },
    responsive: []
  };
  
  intensityChartOptions: ApexOptions & { 
    series: number[]; 
    labels: string[]; 
    colors: string[];
    chart: any;
    plotOptions: any;
  } = {
    chart: { type: 'radialBar' },
    series: [],
    labels: [],
    colors: [],
    plotOptions: { radialBar: { hollow: { size: '70%' } } }
  };
  carbonBreakdownOptions: ApexOptions = {
    chart: { type: 'donut' },
    series: [],
    labels: [],
    colors: [],
    legend: { position: 'bottom' },
    responsive: []
  };

  constructor(private route: ActivatedRoute, private siteService: SiteService) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) {
        this.errorMessage = 'Identifiant manquant.';
        this.loading = false;
        return;
      }
      this.loadSite(id);
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  private loadSite(id: string) {
    this.loading = true;
    this.errorMessage = '';
    this.site = null;

    this.siteService.getSiteById(id).subscribe({
      next: (site: Site) => {
        this.site = site || null;
        if (!this.site) {
          this.errorMessage = `Site introuvable (id: ${id}).`;
        } else {
          this.initializeCharts();
        }
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || 'Impossible de récupérer le site.';
        this.loading = false;
      },
    });
  }

  private initializeCharts() {
    if (!this.site) return;

    const surface = this.site.surface_m2 || 0;
    const carbon = this.site.total_carbon_tons || 0;
    const parkSub = this.site.parking_sous_sol || 0;
    const parkDalle = this.site.parking_sous_dalle || 0;
    const parkAerien = this.site.parking_aerien || 0;
    const totalParking = parkSub + parkDalle + parkAerien;

    // Graphe parking pie
    this.parkingChartOptions = {
      chart: { type: 'pie' },
      series: [parkSub, parkDalle, parkAerien],
      labels: ['Sous-sol', 'Sous-dalle', 'Aérien'],
      colors: ['#10b981', '#34d399', '#6ee7b7'],
      legend: { position: 'bottom' },
      responsive: [{
        breakpoint: 480,
        options: { chart: { width: 280 }, legend: { position: 'bottom' } }
      }]
    };

    // Graphe intensité carbone bar
    const intensity = surface > 0 ? (carbon * 1000) / surface : 0;
    const intensityPercentage = Math.min(100, (intensity / 100) * 100);
    
    this.intensityChartOptions = {
      chart: { type: 'radialBar' },
      series: [intensityPercentage],
      labels: ['Intensité'],
      colors: ['#10b981'],
      plotOptions: {
        radialBar: {
          hollow: { size: '70%' },
          dataLabels: {
            name: { show: true },
            value: { show: true, formatter: () => `${intensity.toFixed(1)} kg/m²` }
          }
        }
      }
    };

    // Graphe répartition carbone (estimation matériaux)
    const concreteEstimate = (surface * 1.2 * 200) / 1000;
    const steelEstimate = (surface * 0.1 * 2500) / 1000;
    const otherEstimate = carbon - concreteEstimate - steelEstimate;

    this.carbonBreakdownOptions = {
      chart: { type: 'donut' },
      series: [concreteEstimate, steelEstimate, Math.max(0, otherEstimate)],
      labels: ['Béton', 'Acier', 'Autres'],
      colors: ['#0ea5e9', '#3b82f6', '#8b5cf6'],
      legend: { position: 'bottom' },
      responsive: [{
        breakpoint: 480,
        options: { chart: { width: 280 }, legend: { position: 'bottom' } }
      }]
    };
  }

  get totalParking(): number {
    if (!this.site) return 0;
    return (this.site.parking_sous_sol || 0) + 
           (this.site.parking_sous_dalle || 0) + 
           (this.site.parking_aerien || 0);
  }

  get carbonIntensity(): number {
    if (!this.site || !this.site.surface_m2) return 0;
    const carbon = this.site.total_carbon_tons || 0;
    return (carbon * 1000) / this.site.surface_m2;
  }

  get scorePerformance(): number {
    // Score basé sur la surface (plus grand = meilleur pour réduire l'intensité)
    const surface = this.site?.surface_m2 || 0;
    return Math.min(100, Math.max(0, 50 + (surface / 100)));
  }
}

