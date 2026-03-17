import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SiteService } from '../../services/site.service';
import { Observable } from 'rxjs';
import { NgxChartsModule, LegendPosition } from '@swimlane/ngx-charts';
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
  LegendPosition = LegendPosition;
  
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
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.loading = true;
    this.siteService.getGlobalDashboardStats().subscribe({
      next: (data) => {
        console.log('Dashboard Data Received:', data);
        if (data) {
          this.stats = data;
          
          // 1. Normalize Distribution (SingleSeries: [{name, value}])
          let distRaw = data.material_distribution?.data || data.material_distribution || [];
          if (!Array.isArray(distRaw)) distRaw = [];
          this.materialDistribution = distRaw.filter((item: any) => item && typeof item.name === 'string');

          // 2. Normalize Trend (MultiSeries: [{name, series: [{name, value}]}])
          let trendRaw = data.carbon_trend?.data || data.carbon_trend || [];
          if (!Array.isArray(trendRaw)) trendRaw = [];
          
          let normalizedTrend: any[] = [];
          
          if (trendRaw.length > 0) {
            // Check if it's already MultiSeries format
            if (trendRaw[0] && Array.isArray(trendRaw[0].series)) {
              normalizedTrend = trendRaw;
            } else {
              // Convert flat to MultiSeries
              normalizedTrend = [{
                name: 'Emissions',
                series: trendRaw.filter((item: any) => item && typeof item.name === 'string')
              }];
            }
          }
          
          this.carbonTrend = normalizedTrend;
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
