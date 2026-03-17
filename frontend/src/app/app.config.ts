import { ApplicationConfig, provideZoneChangeDetection, isDevMode, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { 
  LucideAngularModule, 
  Building2, 
  MapPin, 
  Users, 
  ArrowRight, 
  LayoutDashboard, 
  Database, 
  LogOut, 
  Filter, 
  Calendar, 
  Download, 
  RefreshCw, 
  HardHat, 
  ChevronLeft 
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(), 
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    importProvidersFrom(LucideAngularModule.pick({ 
      Building2, 
      MapPin, 
      Users, 
      ArrowRight, 
      LayoutDashboard, 
      Database, 
      LogOut, 
      Filter, 
      Calendar, 
      Download, 
      RefreshCw, 
      HardHat, 
      ChevronLeft 
    }))
  ]
};
