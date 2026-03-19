import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'ai-assistant-button',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <!-- AI Assistant Trigger Button -->
    <button 
      *ngIf="!isExpanded"
      (click)="togglePanel()"
      [attr.aria-label]="ariaLabel"
      [attr.aria-expanded]="isExpanded"
      class="ai-trigger-btn"
      type="button">
      <span class="ai-icon-wrapper" aria-hidden="true">
        <lucide-icon name="sparkles" class="ai-icon"></lucide-icon>
      </span>
      <span class="ai-label">
        <ng-content></ng-content>
      </span>
      <span class="ai-glow" aria-hidden="true"></span>
    </button>

    <!-- Expanded Panel with Back Button -->
    <div 
      *ngIf="isExpanded"
      class="ai-panel"
      role="dialog"
      [attr.aria-label]="'Panneau assistant IA'">
      
      <!-- Header with Back Button -->
      <div class="ai-panel-header">
        <button 
          (click)="goBack()"
          class="ai-back-btn"
          [attr.aria-label]="'Retour au dashboard'"
          type="button">
          <lucide-icon name="arrow-left" class="w-4 h-4"></lucide-icon>
          <span class="sr-only">Retour</span>
        </button>
        
        <div class="ai-title-wrapper">
          <span class="ai-title-icon" aria-hidden="true">
            <lucide-icon name="sparkles" class="w-4 h-4"></lucide-icon>
          </span>
          <span class="ai-title">Assistant IA</span>
        </div>
        
        <button 
          (click)="closePanel()"
          class="ai-close-btn"
          [attr.aria-label]="'Fermer le panneau assistant'"
          type="button">
          <lucide-icon name="x" class="w-4 h-4"></lucide-icon>
          <span class="sr-only">Fermer</span>
        </button>
      </div>

      <!-- Content Slot -->
      <div class="ai-panel-content">
        <ng-content select="[aiContent]"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: inline-flex;
    }

    /* Screen reader only text */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }

    /* Trigger Button - Themed */
    .ai-trigger-btn {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      background: var(--app-accent, #10b981);
      color: #000;
      border: none;
      border-radius: 0.75rem;
      font-size: 0.625rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 4px 15px -3px rgba(16, 185, 129, 0.4);
      overflow: hidden;
    }

    .ai-trigger-btn:hover {
      background: color-mix(in srgb, var(--app-accent, #10b981) 90%, white);
      transform: translateY(-1px);
      box-shadow: 0 8px 25px -5px rgba(16, 185, 129, 0.5);
    }

    .ai-trigger-btn:focus-visible {
      outline: 2px solid var(--app-accent, #10b981);
      outline-offset: 2px;
    }

    .ai-trigger-btn:active {
      transform: translateY(0);
    }

    .ai-icon-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ai-icon {
      width: 1rem;
      height: 1rem;
    }

    .ai-label {
      white-space: nowrap;
    }

    .ai-glow {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    .ai-trigger-btn:hover .ai-glow {
      opacity: 1;
    }

    /* Expanded Panel - Glassmorphism Theme */
    .ai-panel {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      max-width: 450px;
      background: var(--app-panel, rgba(30, 41, 59, 0.8));
      backdrop-filter: blur(20px);
      border-left: 1px solid var(--app-border, rgba(255, 255, 255, 0.1));
      box-shadow: -10px 0 50px -10px rgba(0, 0, 0, 0.5);
      z-index: 50;
      display: flex;
      flex-direction: column;
      animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    /* Panel Header */
    .ai-panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;
      border-bottom: 1px solid var(--app-border, rgba(255, 255, 255, 0.1));
      gap: 1rem;
    }

    .ai-back-btn,
    .ai-close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      padding: 0;
      background: transparent;
      color: var(--app-text-muted, #94a3b8);
      border: 1px solid var(--app-border, rgba(255, 255, 255, 0.1));
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .ai-back-btn:hover,
    .ai-close-btn:hover {
      background: rgba(255, 255, 255, 0.05);
      color: var(--app-text, #fff);
      border-color: var(--app-accent, #10b981);
    }

    .ai-back-btn:focus-visible,
    .ai-close-btn:focus-visible {
      outline: 2px solid var(--app-accent, #10b981);
      outline-offset: 2px;
    }

    .ai-title-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      flex: 1;
    }

    .ai-title-icon {
      display: flex;
      align-items: center;
      color: var(--app-accent, #10b981);
    }

    .ai-title {
      font-size: 1rem;
      font-weight: 900;
      letter-spacing: -0.025em;
      color: var(--app-text, #fff);
    }

    /* Panel Content */
    .ai-panel-content {
      flex: 1;
      overflow-y: auto;
      padding: 1.5rem;
    }

    /* Mobile adjustments */
    @media (max-width: 768px) {
      .ai-panel {
        max-width: 100%;
      }
    }
  `]
})
export class AiAssistantButtonComponent {
  @Input() ariaLabel: string = 'Ouvrir l\'assistant IA';
  @Output() openAiPanel = new EventEmitter<void>();
  @Output() closeAiPanel = new EventEmitter<void>();
  @Output() backToDashboard = new EventEmitter<void>();

  isExpanded = false;

  togglePanel() {
    this.isExpanded = true;
    this.openAiPanel.emit();
  }

  closePanel() {
    this.isExpanded = false;
    this.closeAiPanel.emit();
  }

  goBack() {
    this.backToDashboard.emit();
  }
}
