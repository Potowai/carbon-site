import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AccessibilityFabComponent } from './components/accessibility-fab/accessibility-fab.component';
import { AccessibilityService } from './services/accessibility.service';
import { ConfigService } from './services/config.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AccessibilityFabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'CarbonSite';
  configError = false;

  constructor(
    private a11y: AccessibilityService,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    console.log('[AppComponent] Initializing...');
    console.log('[AppComponent] Environment config:', {
      production: environment.production,
      apiUrl: environment.apiUrl,
      configUrl: environment.configUrl
    });
    
    // Load configuration from backend first
    console.log('[AppComponent] Loading configuration from backend...');
    this.configService.loadConfig().subscribe({
      next: (config) => {
        console.log('[AppComponent] ✓ Configuration loaded successfully');
        console.log('[AppComponent] Config:', {
          supabaseUrl: config.supabaseUrl,
          supabaseKey: config.supabaseKey ? '***' : 'missing',
          apiUrl: config.apiUrl
        });
        this.configError = false;
      },
      error: (error) => {
        console.error('[AppComponent] ✗ Failed to load configuration:', error);
        this.configError = true;
      }
    });

    // Force l'application du mode accessibilité dès le bootstrap.
    void this.a11y.snapshot;
  }
}

