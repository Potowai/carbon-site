import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { SiteService } from '../../services/site.service';
import { LucideAngularModule } from 'lucide-angular';

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
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './site-detail.component.html',
  styleUrl: './site-detail.component.scss'
})
export class SiteDetailComponent implements OnInit, OnDestroy {
  loading = true;
  errorMessage = '';
  site: Site | null = null;
  private sub?: Subscription;

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

    this.siteService.getAllSites().subscribe({
      next: (sites: Site[]) => {
        const list = Array.isArray(sites) ? sites : [];
        this.site = list.find((s) => String(s.id) === String(id)) || null;
        if (!this.site) {
          this.errorMessage = `Site introuvable (id: ${id}).`;
        }
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || 'Impossible de récupérer le site.';
        this.loading = false;
      }
    });
  }
}

