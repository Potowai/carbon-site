import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-reglementation',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './reglementation.component.html',
  styleUrl: './reglementation.component.scss'
})
export class ReglementationComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  regulations = [
    {
      title: 'RE2020 - Réglementation Environnementale',
      status: 'active',
      description: 'La RE2020 encadre les nouveaux bâtiments résidentiels et tertiaires pour limiter leur impact carbone.',
      requirements: [
        'Calcul du Bbio (besoin bioclimatique)',
        'Analyse du Cep (consommation énergétique primaire)',
        'Évaluation de l\'impact carbone (IC)',
        'Contrôle de la qualité d\'été'
      ],
      deadline: 'Applicable depuis janvier 2022'
    },
    {
      title: 'RE2024 - Évolution de la RE2020',
      status: 'upcoming',
      description: 'Prolongement et renforcement des exigences RE2020 pour une décarbonation accélérée.',
      requirements: [
        'Seuils carbone plus restrictifs',
        'Extension aux bâtiments existants rénovés',
        'Intégration des émissions de construction',
        'Nouvelles méthodes de calcul'
      ],
      deadline: 'Entrée en vigueur prévue 2024-2025'
    },
    {
      title: 'CSRD - Reporting de Durabilité',
      status: 'active',
      description: 'Directive sur le reporting de durabilité des entreprises pour la transparence ESG.',
      requirements: [
        'Disclosure ESG obligatoire',
        'Double matérialité',
        'Reporting détaillé sur le carbone',
        'Audit externe requis'
      ],
      deadline: 'Progressivement de 2024 à 2028'
    }
  ];

  complianceSteps = [
    {
      step: 1,
      title: 'Audit Initial',
      description: 'Évaluez votre empreinte carbone actuelle et identifiez les écarts réglementaires.'
    },
    {
      step: 2,
      title: 'Plan d\'Action',
      description: 'Définissez un plan de réduction carbone conforme aux exigences RE2020/RE2024.'
    },
    {
      step: 3,
      title: 'Mise en Œuvre',
      description: 'Appliquez les leviers d\'optimisation et suivez vos progrès en temps réel.'
    },
    {
      step: 4,
      title: 'Reporting',
      description: 'Générez automatiquement les rapports de conformité pour les audits.'
    }
  ];
}
