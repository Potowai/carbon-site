import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessibilityFabComponent } from './components/accessibility-fab/accessibility-fab.component';
import { AccessibilityService } from './services/accessibility.service';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccessibilityFabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'CarbonSite';

  constructor(
    private a11y: AccessibilityService,
    private configService: ConfigService
  ) { }

  ngOnInit() {
    // Load configuration from backend
    this.configService.loadConfig().subscribe({
      next: (config) => {
        console.log('Configuration loaded successfully');
      },
      error: (error) => {
        console.error('Failed to load configuration:', error);
      }
    });

    // Force l'application du mode accessibilité dès le bootstrap.
    void this.a11y.snapshot;
  }
}

