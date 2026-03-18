import { ApplicationConfig, provideZoneChangeDetection, isDevMode, importProvidersFrom, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { ConfigService } from './services/config.service';

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
  Search,
  Filter, 
  Calendar, 
  Download, 
  RefreshCw, 
  HardHat, 
  ChevronLeft,
  List
} from 'lucide-angular';

/**
 * Initialize config before app starts
 */
export function initializeAppConfig(configService: ConfigService) {
  return () => {
    console.log('[AppInitializer] Starting app config initialization...');
    return configService.loadConfig().toPromise()
      .then(() => {
        console.log('[AppInitializer] ✓ App initialization complete - config loaded');
      })
      .catch(err => {
        console.error('[AppInitializer] ✗ App initialization failed:', err);
        // Don't rethrow - allow app to start even if config fails
      });
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppConfig,
      deps: [ConfigService],
      multi: true
    },
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authInterceptor])),
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
      Search,
      Filter, 
      Calendar, 
      Download, 
      RefreshCw, 
      HardHat, 
      ChevronLeft,
      List
    }))
  ]
};
