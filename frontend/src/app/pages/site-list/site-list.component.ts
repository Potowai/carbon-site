import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SiteService } from '../../services/site.service';
import { PdfExportService } from '../../services/pdf-export.service';
import { LucideAngularModule } from 'lucide-angular';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

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
  selector: 'app-site-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    LucideAngularModule,
    MatSnackBarModule,
  ],
  templateUrl: './site-list.component.html',
  styleUrl: './site-list.component.scss',
})
export class SiteListComponent implements OnInit {
  sites: Site[] = [];
  loading = true;
  errorMessage = '';
  isMenuOpen = false;
  searchTerm = '';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  get filteredSites(): Site[] {
    const search = this.searchTerm.trim().toLowerCase();
    if (!search) {
      return this.sites;
    }

    return this.sites.filter((site) => {
      const name = (site.nom || '').toLowerCase();
      const id = String(site.id || '').toLowerCase();
      return name.includes(search) || id.includes(search);
    });
  }

  get totalCarbon(): number {
    return this.sites.reduce((sum, site) => sum + (Number(site.total_carbon_tons) || 0), 0);
  }

  get averageSurface(): number {
    if (this.sites.length === 0) {
      return 0;
    }
    const totalSurface = this.sites.reduce((sum, site) => sum + (Number(site.surface_m2) || 0), 0);
    return totalSurface / this.sites.length;
  }

  shortId(site: Site): string {
    const id = String(site.id || 'n/a');
    return id.slice(0, 8);
  }

  trackBySiteId = (_: number, site: Site) => site.id;

  constructor(
    private siteService: SiteService,
    private pdfExportService: PdfExportService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadSites();
  }

  loadSites() {
    this.loading = true;
    this.errorMessage = '';

    this.siteService.getAllSites().subscribe({
      next: (sites: Site[]) => {
        this.sites = Array.isArray(sites) ? sites : [];
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || 'Impossible de recuperer la liste des sites.';
        this.loading = false;
      }
    });
  }
}
