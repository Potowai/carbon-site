import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SiteService } from '../../services/site.service';
import { LucideAngularModule, Building2, MapPin, Users, ArrowRight } from 'lucide-angular';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-site-list',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    LucideAngularModule, 
    MatButtonModule
  ],
  providers: [
    { provide: 'LUCIDE_ICONS', useValue: { Building2, MapPin, Users, ArrowRight } }
  ],
  template: `
    <div class="min-h-screen bg-[#0b0f19] text-white p-6 lg:p-10 font-['Inter']">
      <!-- Header -->
      <header class="flex justify-between items-center mb-12 bg-white/[0.03] backdrop-blur-md p-6 rounded-3xl border border-white/5 shadow-2xl">
        <div class="flex items-center gap-4">
          <a routerLink="/dashboard" class="w-10 h-10 bg-[#10b981] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-110 transition-transform">
            <span class="font-black text-black text-xl">C</span>
          </a>
          <div>
            <h1 class="text-xl font-black tracking-tight uppercase">Liste des Sites</h1>
            <p class="text-gray-500 text-xs font-medium uppercase tracking-widest mt-1">Gestion du parc immobilier</p>
          </div>
        </div>
        
        <a routerLink="/add-site" class="premium-btn primary bg-[#10b981] text-black px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#059669] transition-all">
          + Ajouter un site
        </a>
      </header>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" *ngIf="sites.length > 0; else emptyState">
        @for (site of sites; track site.id) {
          <div class="group relative bg-[#161b27]/80 rounded-[2.5rem] border border-white/5 p-8 transition-all hover:border-[#10b981]/30 hover:-translate-y-2 overflow-hidden">
            <!-- Background Glow -->
            <div class="absolute -top-24 -right-24 w-48 h-48 bg-[#10b981] opacity-0 group-hover:opacity-[0.05] blur-[80px] rounded-full transition-opacity"></div>
            
            <div class="relative z-10">
              <div class="flex justify-between items-start mb-6">
                <div class="w-12 h-12 bg-[#10b981]/10 rounded-2xl flex items-center justify-center text-[#10b981]">
                  <lucide-icon [name]="'Building2'" class="w-6 h-6"></lucide-icon>
                </div>
                <div class="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  ID: {{ site.id.substring(0, 8) }}
                </div>
              </div>

              <h2 class="text-2xl font-black mb-6 tracking-tight group-hover:text-[#10b981] transition-colors uppercase">{{ site.nom }}</h2>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-center gap-3 text-gray-400">
                  <lucide-icon [name]="'MapPin'" class="w-4 h-4 text-[#10b981]/70"></lucide-icon>
                  <span class="text-sm font-medium">{{ site.surface_m2 | number }} m²</span>
                </div>
                <div class="flex items-center gap-3 text-gray-400">
                  <lucide-icon [name]="'Users'" class="w-4 h-4 text-[#10b981]/70"></lucide-icon>
                  <span class="text-sm font-medium">{{ site.nb_employes }} Collaborateurs</span>
                </div>
              </div>

              <button class="w-full bg-white/5 hover:bg-[#10b981] hover:text-white py-4 rounded-2xl border border-white/10 hover:border-[#10b981] transition-all flex items-center justify-center gap-2 group/btn">
                <span class="text-xs font-black uppercase tracking-widest">Consulter les Détails</span>
                <lucide-icon [name]="'ArrowRight'" class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"></lucide-icon>
              </button>
            </div>
          </div>
        }
      </div>

      <!-- Empty State -->
      <ng-template #emptyState>
        <div class="flex flex-col items-center justify-center py-40 bg-[#161b27]/40 rounded-[3rem] border border-dashed border-white/10">
          <div class="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6 text-gray-600">
             <lucide-icon [name]="'Building2'" class="w-10 h-10"></lucide-icon>
          </div>
          <h3 class="text-xl font-black mb-2 uppercase">Aucun site enregistré</h3>
          <p class="text-gray-500 max-w-xs text-center text-sm leading-relaxed mb-8">Commencez par ajouter votre premier site pour analyser son empreinte carbone.</p>
          <a routerLink="/add-site" class="bg-[#10b981] text-black px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            Créer un nouveau site
          </a>
        </div>
      </ng-template>
    </div>
  `,
  styles: `
    :host { display: block; }
    .premium-btn { cursor: pointer; }
  `,
})
export class SiteListComponent implements OnInit {
  sites: any[] = [];
  loading = true;

  constructor(private siteService: SiteService) {}

  ngOnInit() {
    this.siteService.getAllSites().subscribe({
      next: (sites) => {
        this.sites = sites;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching sites:', err);
        this.loading = false;
      }
    });
  }
}
