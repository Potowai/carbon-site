import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SiteService } from '../../services/site.service';
import { LucideAngularModule, Building2, LayoutDashboard, Database, MapPin, Calendar, HardHat, ArrowRight, Users } from 'lucide-angular';
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
  template: `
    <div class="min-h-screen bg-[#0b0f19] text-white p-6 lg:p-10 font-['Inter']">
      <!-- Header -->
      <header class="flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-12 bg-white/[0.03] backdrop-blur-md p-4 lg:p-6 rounded-3xl border border-white/5 shadow-2xl gap-6 lg:gap-0 relative z-50">
        <div class="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start">
          <div class="flex items-center gap-4">
            <a routerLink="/dashboard" class="w-10 h-10 bg-[#10b981] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-110 transition-transform" aria-label="CarbonSite Pro Logo">
              <span class="font-black text-black text-xl" aria-hidden="true">C</span>
            </a>
            <div>
              <h1 class="text-lg lg:text-xl font-black tracking-tight uppercase">Liste des Sites</h1>
              <p class="text-gray-500 text-[10px] lg:text-xs font-medium uppercase tracking-widest mt-0.5 lg:mt-1">Gestion du parc immobilier</p>
            </div>
          </div>

          <div class="lg:hidden">
            <button (click)="toggleMenu()" class="p-2 text-white bg-white/5 rounded-xl border border-white/10" aria-label="Ouvrir le menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path *ngIf="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                <path *ngIf="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="hidden lg:flex items-center gap-4 w-full lg:w-auto">
          <a routerLink="/add-site" class="premium-btn primary bg-[#10b981] text-black px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#059669] transition-all text-center">
            + Nouveau Site
          </a>
        </div>

        <!-- Mobile Menu -->
        <div class="lg:hidden w-full flex-col gap-4 animate-slide-down" [class.flex]="isMenuOpen" [class.hidden]="!isMenuOpen">
          <div class="flex flex-col gap-3 p-4 bg-white/[0.02] rounded-2xl border border-white/5">
            <a routerLink="/dashboard" (click)="isMenuOpen = false" class="w-full bg-white/5 py-4 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
              <lucide-icon name="building-2" class="w-4 h-4"></lucide-icon>
              Dashboard
            </a>
            <a routerLink="/add-site" (click)="isMenuOpen = false" class="w-full bg-[#10b981] text-black py-4 px-6 rounded-xl text-[10px] font-black uppercase tracking-widest text-center">
              + Ajouter un site
            </a>
          </div>
        </div>
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
                  <lucide-icon name="building-2" class="w-6 h-6"></lucide-icon>
                </div>
                <div class="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  ID: {{ site.id.substring(0, 8) }}
                </div>
              </div>

              <h2 class="text-2xl font-black mb-6 tracking-tight group-hover:text-[#10b981] transition-colors uppercase">{{ site.nom }}</h2>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-center gap-3 text-gray-400">
                  <lucide-icon name="map-pin" class="w-4 h-4 text-[#10b981]/70"></lucide-icon>
                  <span class="text-sm font-medium">{{ site.surface_m2 | number }} m²</span>
                </div>
                <div class="flex items-center gap-3 text-gray-400">
                  <lucide-icon name="users" class="w-4 h-4 text-[#10b981]/70"></lucide-icon>
                  <span class="text-sm font-medium">{{ site.nb_employes }} Collaborateurs</span>
                </div>
              </div>

              <!-- Palier 1: Result Display -->
              <div class="mb-8 p-4 bg-[#10b981]/10 rounded-2xl border border-[#10b981]/20" *ngIf="site.total_carbon_tons">
                <p class="text-[10px] font-black uppercase tracking-widest text-[#10b981] mb-1">Impact Carbone Estimé</p>
                <div class="flex items-end gap-1.5">
                  <span class="text-3xl font-black text-white leading-none">{{ site.total_carbon_tons | number:'1.0-2' }}</span>
                  <span class="text-xs font-bold text-gray-500 mb-1">tCO₂e</span>
                </div>
              </div>

              <button class="w-full bg-white/5 hover:bg-[#10b981] hover:text-white py-4 rounded-2xl border border-white/10 hover:border-[#10b981] transition-all flex items-center justify-center gap-2 group/btn">
                <span class="text-xs font-black uppercase tracking-widest">Consulter les Détails</span>
                <lucide-icon name="arrow-right" class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"></lucide-icon>
              </button>
            </div>
          </div>
        }
      </div>

      <!-- Empty State -->
      <ng-template #emptyState>
        <div class="flex flex-col items-center justify-center py-40 bg-[#161b27]/40 rounded-[3rem] border border-dashed border-white/10">
          <div class="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6 text-gray-600">
             <lucide-icon name="building-2" class="w-10 h-10"></lucide-icon>
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
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private siteService: SiteService) {}

  ngOnInit() {
    this.siteService.getAllSites().subscribe({
      next: (response: any) => {
        console.log('Sites response:', response);
        this.sites = response.data || response; // Handle both {data: []} and []
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching sites:', err);
        this.loading = false;
      }
    });
  }
}
