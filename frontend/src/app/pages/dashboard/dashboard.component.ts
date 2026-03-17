import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SiteService } from '../../services/site.service';
import { Observable } from 'rxjs';
import { LucideAngularModule, Building2, LayoutDashboard, Database, LogOut, Filter, Calendar, Download, RefreshCw } from 'lucide-angular';
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
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    NgApexchartsModule, 
    MatSnackBarModule, 
    LucideAngularModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  user$: Observable<any>;
  stats: any = null;
  loading = true;
  isMenuOpen = false;
  
  // Filters
  selectedTimeRange = '30d'; // '7d', '30d', '1y'
  
  // Chart Options
  public lineChartOptions!: Partial<ChartOptions>;
  public pieChartOptions!: Partial<ChartOptions>;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  // Data for ngx-charts
  carbonTrend: any[] = [];
  materialDistribution: any[] = [];

  colorScheme: any = {
    domain: ['#10b981', '#3b82f6', '#06b6d4', '#64748b']
  };

  constructor(
    private auth: AuthService, 
    private siteService: SiteService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.user$ = this.auth.user$;
  }

  ngOnInit() {
    this.initChartOptions();
    this.loadDashboardData();
  }

  initChartOptions() {
    this.lineChartOptions = {
      series: [],
      chart: {
        height: 350,
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
      }
    };

    this.pieChartOptions = {
      series: [],
      chart: {
        type: "donut",
        height: 350,
        background: 'transparent',
        foreColor: '#94a3b8'
      },
      colors: ['#10b981', '#3b82f6', '#06b6d4', '#64748b', '#8b5cf6'],
      labels: [],
      legend: {
        position: 'bottom'
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
      tooltip: {
        theme: 'dark'
      }
    };
  }

  setTimeRange(range: string) {
    this.selectedTimeRange = range;
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.loading = true;
    this.siteService.getGlobalDashboardStats().subscribe({
      next: (data) => {
        console.log('Dashboard Data Received:', data);
        if (data) {
          this.stats = data;
          
          // 1. Normalize Distribution
          let distRaw = data.material_distribution?.data || data.material_distribution || [];
          if (!Array.isArray(distRaw)) distRaw = [];
          
          this.pieChartOptions.series = distRaw.map((item: any) => item.value);
          this.pieChartOptions.labels = distRaw.map((item: any) => item.name);

          // 2. Normalize Trend
          let trendRaw = data.carbon_trend?.data || data.carbon_trend || [];
          if (!Array.isArray(trendRaw)) trendRaw = [];
          
          let seriesData: any[] = [];
          let categories: string[] = [];

          if (trendRaw.length > 0) {
            if (trendRaw[0] && Array.isArray(trendRaw[0].series)) {
              // MultiSeries format
              seriesData = trendRaw[0].series.map((item: any) => item.value);
              categories = trendRaw[0].series.map((item: any) => item.name);
            } else {
              // Flat format
              seriesData = trendRaw.map((item: any) => item.value);
              categories = trendRaw.map((item: any) => item.name);
            }
          }

          this.lineChartOptions.series = [{
            name: "Emissions",
            data: seriesData
          }];
          this.lineChartOptions.xaxis = {
            ...this.lineChartOptions.xaxis,
            categories: categories
          };

          this.stats = data;
          console.log('Normalized Carbon Trend:', this.carbonTrend);
          console.log('Normalized Material Dist:', this.materialDistribution);
        } else {
          this.stats = null;
          this.carbonTrend = [];
          this.materialDistribution = [];
        }
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
