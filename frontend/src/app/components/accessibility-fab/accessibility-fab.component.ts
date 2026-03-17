import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibilityService } from '../../services/accessibility.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accessibility-fab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accessibility-fab.component.html',
  styleUrl: './accessibility-fab.component.scss'
})
export class AccessibilityFabComponent {
  open = false;
  state$: Observable<any>;

  constructor(public a11y: AccessibilityService) {
    this.state$ = this.a11y.state$;
  }

  toggleOpen() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.open) this.close();
  }
}

