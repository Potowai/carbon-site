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
        this.stats = data;
        this.carbonTrend = data.carbon_trend || [];
        this.materialDistribution = data.material_distribution || [];
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
