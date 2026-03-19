import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  solutions = [
    {
      icon: 'bar-chart-3',
      title: 'Analyse Carbone',
      description: 'Calculez l\'empreinte carbone de vos chantiers en temps réel avec des données FDES précises.',
      features: ['Calcul RE2020', 'FDES intégrées', 'Rapports détaillés']
    },
    {
      icon: 'zap',
      title: 'Optimisation Énergétique',
      description: 'Identifiez les leviers de réduction et optimisez la consommation énergétique de vos projets.',
      features: ['Simulation scénarios', 'Comparaisons', 'ROI calculé']
    },
    {
      icon: 'leaf',
      title: 'Matériaux Durables',
      description: 'Accédez à notre base de matériaux bas-carbone et comparez les alternatives écologiques.',
      features: ['Base ADEME', 'Alternatives', 'Impact matériaux']
    },
    {
      icon: 'file-text',
      title: 'Reporting Réglementaire',
      description: 'Générez automatiquement les rapports de conformité RE2020 et ESG.',
      features: ['Export PDF', 'Audit trail', 'Conformité garantie']
    }
  ];

  differentiators = [
    {
      number: '-30%',
      label: 'Réduction moyenne',
      description: 'de l\'empreinte carbone sur vos projets'
    },
    {
      number: '2x',
      label: 'Plus rapide',
      description: 'que les méthodes traditionnelles d\'analyse'
    },
    {
      number: '500+',
      label: 'Données FDES',
      description: 'intégrées et constamment mises à jour'
    }
  ];
}
