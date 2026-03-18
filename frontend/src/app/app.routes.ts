import { Routes, Router } from '@angular/router';
import { inject } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AddSiteComponent } from './pages/add-site/add-site.component';
import { SiteListComponent } from './pages/site-list/site-list.component';
import { SiteDetailComponent } from './pages/site-detail/site-detail.component';
import { AuthService } from './services/auth.service';
import { map, take } from 'rxjs';

const authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.user$.pipe(
    take(1),
    map(user => user ? true : router.createUrlTree(['/']))
  );
};

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'add-site', component: AddSiteComponent, canActivate: [authGuard] },
  { path: 'sites', component: SiteListComponent, canActivate: [authGuard] },
  { path: 'sites/:id', component: SiteDetailComponent, canActivate: [authGuard] },
  { path: 'site/:id', component: SiteDetailComponent },
  { path: '**', redirectTo: '' }
];
