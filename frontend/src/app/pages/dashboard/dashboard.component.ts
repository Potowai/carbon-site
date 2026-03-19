import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SiteService } from '../../services/site.service';
import { PdfExportService } from '../../services/pdf-export.service';
import { AiExplanationService, DashboardContext } from '../../services/ai-explanation.service';
import { AiAssistantButtonComponent } from '../../components/ai-assistant-button/ai-assistant-button.component';
import { Observable, forkJoin } from 'rxjs';
import { LucideAngularModule, Sparkles, Send, Building2, LayoutDashboard, Database, LogOut, Filter, Calendar, Download, RefreshCw } from 'lucide-angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexLegend,
  ApexPlotOptions,
  ApexTooltip,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  fill: ApexFill;
  labels: any;
  colors: string[];
  responsive: any[];
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    FormsModule,
    NgApexchartsModule, 
    MatSnackBarModule, 
    LucideAngularModule,
    AiAssistantButtonComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  user$: Observable<any>;
  stats: any = null;
  loading = true;
  isMenuOpen = false;
  sites: any[] = [];
  loadingSites = true;
  
  // AI Explanation properties
  aiToken: string = '';
  aiQuestion: string = '';
  aiResponse: string = '';
  aiLoading: boolean = false;
  aiPanelOpen: boolean = false;
  showTokenInput: boolean = true;
  
  // Filters
  selectedTimeRange = '30d'; // '7d', '30d', '1y'
  trendUnitLabel: 'jour' | 'mois' = 'jour';
  
  // Chart Options
  public lineChartOptions!: Partial<ChartOptions>;
  public pieChartOptions!: Partial<ChartOptions>;
  public typeChartOptions!: Partial<ChartOptions>;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  // Data for ngx-charts
  carbonTrend: any[] = [];
  materialDistribution: any[] = [];
  constructionVsExploitation: any[] = [];

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
    private pdfExportService: PdfExportService,
    private aiService: AiExplanationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.user$ = this.auth.user$;
  }

  ngOnInit() {
    this.initChartOptions();
    this.loadDashboardData();
    this.siteService.getMySites().subscribe({
      next: (sites) => {
        this.sites = Array.isArray(sites) ? sites : [];
        this.loadingSites = false;
      },
      error: () => {
        this.loadingSites = false;
      }
    });
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

  initChartOptions() {
    this.lineChartOptions = {
      series: [],
      chart: {
        height: 350,
        width: '100%',
        type: "area",
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
          }
        },
        background: 'transparent',
        foreColor: '#94a3b8'
      },
      colors: ['#10b981'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        width: 3
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.45,
          opacityTo: 0.05,
          stops: [50, 100]
        }
      },
      grid: {
        borderColor: 'rgba(255, 255, 255, 0.05)',
        strokeDashArray: 4
      },
      xaxis: {
        type: "category",
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      tooltip: {
        theme: 'dark'
      },
      responsive: []
    };

    this.pieChartOptions = {
      series: [],
      chart: {
        type: "donut",
        height: 250,
        width: '100%',
        background: 'transparent',
        foreColor: '#94a3b8',
        sparkline: { enabled: false }
      },
      colors: ['#10b981', '#3b82f6', '#06b6d4', '#64748b', '#8b5cf6'],
      labels: [],
      legend: {
        position: 'bottom',
        fontSize: '10px',
        fontWeight: 600
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70%'
          }
        }
      },
      stroke: {
        show: false
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            height: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      tooltip: {
        theme: 'dark'
      }
    };

    this.typeChartOptions = {
      ...this.pieChartOptions,
      colors: ['#3b82f6', '#10b981'], // Blue for Construction, Green for Exploitation
      chart: {
        ...this.pieChartOptions.chart,
        type: 'donut'
      }
    };
  }

  setTimeRange(range: string) {
    this.selectedTimeRange = range;
    this.loadDashboardData();
  }

  private getRangeStartDate(range: string): Date {
    const now = new Date();
    const start = new Date(now);

    if (range === '7d') start.setDate(now.getDate() - 6);
    else if (range === '30d') start.setDate(now.getDate() - 29);
    else if (range === '1y') start.setFullYear(now.getFullYear() - 1);

    start.setHours(0, 0, 0, 0);
    return start;
  }

  private formatDayLabel(d: Date): string {
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    return `${dd}/${mm}`;
  }

  private formatMonthLabel(d: Date): string {
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = String(d.getFullYear());
    return `${mm}/${yyyy}`;
  }

  private buildTrendFromSites(sites: any[], range: string): { categories: string[]; data: number[] } {
    const start = this.getRangeStartDate(range);
    const now = new Date();
    const filtered = (Array.isArray(sites) ? sites : []).filter((s) => {
      const created = new Date(s?.created_at || s?.createdAt || s?.date || 0);
      return !isNaN(created.getTime()) && created >= start && created <= now;
    });

    const bucket = new Map<string, number>();

    if (range === '1y') {
      this.trendUnitLabel = 'mois';
      for (const s of filtered) {
        const created = new Date(s?.created_at || s?.createdAt || s?.date);
        created.setDate(1);
        created.setHours(0, 0, 0, 0);
        const key = created.toISOString().slice(0, 10); // sortable
        const label = this.formatMonthLabel(created);
        const val = Number(s?.total_carbon_tons ?? s?.totalCarbonTons ?? 0) || 0;
        bucket.set(`${key}|${label}`, (bucket.get(`${key}|${label}`) || 0) + val);
      }
    } else {
      this.trendUnitLabel = 'jour';
      for (const s of filtered) {
        const created = new Date(s?.created_at || s?.createdAt || s?.date);
        created.setHours(0, 0, 0, 0);
        const key = created.toISOString().slice(0, 10); // sortable
        const label = this.formatDayLabel(created);
        const val = Number(s?.total_carbon_tons ?? s?.totalCarbonTons ?? 0) || 0;
        bucket.set(`${key}|${label}`, (bucket.get(`${key}|${label}`) || 0) + val);
      }
    }

    const entries = Array.from(bucket.entries())
      .map(([k, v]) => {
        const [key, label] = k.split('|');
        return { key, label, value: v };
      })
      .sort((a, b) => a.key.localeCompare(b.key));

    // Si pas de données filtrées, utiliser les données globales de stats
    let categories = entries.map((e) => e.label);
    let data = entries.map((e) => Number(e.value.toFixed(3)));

    // Si encore vide et on a des stats avec des données de tendance, les utiliser
    if (data.length === 0 && this.stats?.trend_data && Array.isArray(this.stats.trend_data)) {
      categories = this.stats.trend_data.map((t: any) => {
        const [y, m] = t.month.split('-');
        return range === '1y' ? `${m}/${y}` : t.month;
      });
      data = this.stats.trend_data.map((t: any) => Number(t.value));
    }

    // Générer des données de démonstration si vide
    if (data.length === 0) {
      const demoCount = range === '1y' ? 12 : range === '30d' ? 30 : 7;
      categories = Array.from({ length: demoCount }, (_, i) => {
        if (range === '1y') {
          const d = new Date(new Date().getFullYear(), new Date().getMonth() - (demoCount - 1 - i), 1);
          return this.formatMonthLabel(d);
        } else {
          const d = new Date();
          d.setDate(d.getDate() - (demoCount - 1 - i));
          return this.formatDayLabel(d);
        }
      });
      data = Array.from({ length: demoCount }, (_, i) => 
        parseFloat((50 + Math.random() * 100).toFixed(2))
      );
    }

    return { categories, data };
  }

  loadDashboardData() {
    this.loading = true;
    forkJoin({
      stats: this.siteService.getGlobalDashboardStats(),
      sites: this.siteService.getAllSites()
    }).subscribe({
      next: ({ stats, sites }) => {
        console.log('Dashboard Data Received:', stats);

        this.stats = stats ?? null;

        // Distribution: priorité à stats si disponible, sinon construire à partir des sites
        let distRaw = stats?.material_distribution?.data || stats?.material_distribution || [];
        if (!Array.isArray(distRaw)) {
          // Construire une distribution par défaut
          const totalCarbon = this.stats?.total_footprint || 0;
          distRaw = [
            { name: 'Béton', value: totalCarbon * 0.5, percentage: 50 },
            { name: 'Acier', value: totalCarbon * 0.3, percentage: 30 },
            { name: 'Bois', value: totalCarbon * 0.15, percentage: 15 },
            { name: 'Autres', value: totalCarbon * 0.05, percentage: 5 }
          ];
        }

        this.materialDistribution = distRaw;
        this.pieChartOptions.series = distRaw.map((item: any) => parseFloat(item.value || 0));
        this.pieChartOptions.labels = distRaw.map((item: any) => item.name);

        // Construction vs Exploitation (Palier 2)
        let typeRaw = stats?.construction_vs_exploitation?.data || [];
        if (typeRaw.length === 0) {
          typeRaw = [
            { name: 'Construction', value: (this.stats?.total_footprint || 0), percentage: 70 },
            { name: 'Exploitation', value: (this.stats?.total_footprint || 0) * 0.4, percentage: 30 }
          ];
        }
        this.constructionVsExploitation = typeRaw;
        this.typeChartOptions.series = typeRaw.map((item: any) => parseFloat(item.value || 0));
        this.typeChartOptions.labels = typeRaw.map((item: any) => item.name);

        // Trend: calculé à partir des sites + filtre 7/30/1y
        const trend = this.buildTrendFromSites(sites || [], this.selectedTimeRange);
        
        this.lineChartOptions.series = [
          {
            name: 'Emissions (tCO₂e)',
            data: trend.data
          }
        ];
        this.lineChartOptions.xaxis = {
          ...this.lineChartOptions.xaxis,
          categories: trend.categories
        };

        // S'assurer que les graphes sont bien mis à jour
        this.lineChartOptions = { ...this.lineChartOptions };
        this.pieChartOptions = { ...this.pieChartOptions };

        this.loading = false;
      },
      error: (err) => {
        console.error('Dashboard error:', err);
        // Initialiser avec des données de fallback pour que les graphes ne soient pas vides
        this.stats = {
          total_footprint: 2450.5,
          carbon_intensity: 125.3,
          global_score: 75,
          active_sites: 0,
          avg_surface: 0,
          material_distribution: {
            data: [
              { name: 'Béton', value: 1225, percentage: 50 },
              { name: 'Acier', value: 735, percentage: 30 },
              { name: 'Bois', value: 368, percentage: 15 },
              { name: 'Autres', value: 123, percentage: 5 }
            ]
          }
        };

        // Graphe de tendance avec données de démo
        const demoCategories = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
        const demoData = [45, 52, 48, 65, 75, 85, 95, 88, 92, 100, 110, 115];

        this.lineChartOptions.series = [
          {
            name: 'Emissions (tCO₂e)',
            data: demoData
          }
        ];
        this.lineChartOptions.xaxis = {
          ...this.lineChartOptions.xaxis,
          categories: demoCategories
        };

        this.pieChartOptions.series = this.stats.material_distribution.data.map((item: any) => item.value);
        this.pieChartOptions.labels = this.stats.material_distribution.data.map((item: any) => item.name);

        this.lineChartOptions = { ...this.lineChartOptions };
        this.pieChartOptions = { ...this.pieChartOptions };

        this.snackBar.open('Erreur lors du chargement des statistiques. Données de démo affichées.', 'Fermer', {
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

  async exportDashboardPdf() {
    try {
      console.log('[DashboardComponent] Exporting dashboard to PDF');
      const filename = `dashboard-rapport-${new Date().getTime()}.pdf`;
      await this.pdfExportService.exportElementToPdf('dashboard-container', filename);
      console.log('[DashboardComponent] ✓ Dashboard exported successfully');
      this.snackBar.open('Dashboard exporté en PDF avec succès!', 'Fermer', { duration: 3000 });
    } catch (error) {
      console.error('[DashboardComponent] ✗ Error exporting dashboard:', error);
      this.snackBar.open('Erreur lors de l\'export du PDF', 'Fermer', { 
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }

  // ========== AI EXPLANATION METHODS ==========
  
  toggleAiPanel() {
    this.aiPanelOpen = !this.aiPanelOpen;
  }

  onAiPanelOpen() {
    console.log('[Dashboard] AI Panel opened');
    this.aiPanelOpen = true;
  }

  onAiPanelClose() {
    console.log('[Dashboard] AI Panel closed');
    this.aiPanelOpen = false;
  }

  askAI() {
    if (!this.aiQuestion.trim()) {
      this.snackBar.open('Veuillez entrer une question.', 'Fermer', { 
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    // Le token sera récupéré depuis les variables d'environnement côté backend
    // ou configuré globalement dans l'application
    const token = (window as any).ENV?.OPENROUTER_API_KEY || '';
    
    if (!token) {
      this.snackBar.open('Token API non configuré. Veuillez contacter l\'administrateur.', 'Fermer', { 
        duration: 5000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    this.aiLoading = true;
    this.aiResponse = '';

    const context = this.getDashboardContextForAI();

    this.aiService.explainDashboardData(this.aiQuestion, context).subscribe({
      next: (response) => {
        this.aiResponse = response.response;
        this.aiLoading = false;
      },
      error: (error) => {
        this.aiLoading = false;
        this.snackBar.open(error.message || 'Erreur lors de la communication avec l\'IA', 'Fermer', { 
          duration: 5000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }

  private getDashboardContextForAI(): DashboardContext {
    const distData = this.stats?.material_distribution?.data || this.materialDistribution || [];
    const trendData = this.stats?.trend_data || [];
    
    return {
      total_footprint: this.stats?.total_footprint || 0,
      carbon_intensity: this.stats?.carbon_intensity || 0,
      global_score: this.stats?.global_score || 0,
      active_sites: this.stats?.active_sites || 0,
      avg_surface: this.stats?.avg_surface || 0,
      material_distribution: distData,
      trend_data: trendData,
      currency: this.stats?.currency || 'tCO2e',
      unit: this.stats?.unit || 'kg/m²'
    };
  }

  clearAIResponse() {
    this.aiResponse = '';
    this.aiQuestion = '';
  }

  getSuggestedQuestions(): string[] {
    return [
      'Explique-moi ce que veulent dire les données tCO2e',
      'Qu\'est-ce que l\'intensité carbone et pourquoi est-elle importante ?',
      'Mon score RE2020 est-il bon ?',
      'Que représente la répartition des matériaux ?',
      'Comment interpréter la tendance des émissions ?',
      'Quels sont les leviers d\'amélioration pour réduire mon empreinte ?'
    ];
  }

  useSuggestedQuestion(question: string) {
    this.aiQuestion = question;
  }
}
