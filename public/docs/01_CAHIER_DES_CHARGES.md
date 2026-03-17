# 📋 Cahier des Charges Fonctionnel & Technique

> **Hackathon #26** — 16 & 17 Mars 2026 — Partenaire : **CAPGEMINI**
>
> Sujet : *Calculer l'empreinte carbone d'un site physique*

---

## 1. Contexte & Vision

Le véritable défi est le **Day 2** : gérer l'application **en production**, centraliser les données éclatées et transformer l'observabilité en un **socle décisionnel**.

---

## 2. Architecture Technique Retenue

> **Architecture distribuée et PWA** : Scalabilité, sécurité et expérience mobile-first.

```
┌────────────────────────────────┐         ┌─────────────────────────┐
│     FRONTEND (Angular PWA)     │         │       BACKEND API       │
│                                │   REST  │                         │
│ • UI: Vert & Noir              │◄───────▶│ • Node.js / Express     │
│ • Mobile-First (PWA)           │         │ • Calculs algorithmiques│
│ • Auth: Clerk SDK              │         │ • Authentification JWT  │
└────────────────────────────────┘         └─────────────────────────┘
                │                                       │
                ▼                                       ▼
       ┌────────────────┐                       ┌────────────────┐
       │     CLERK      │                       │   SUPABASE     │
       │    (SaaS Auth) │                       │ (PostgreSQL DB)│
       └────────────────┘                       └────────────────┘
```

| Composant | Technologie Cible |
|---|---|
| Frontend | **Angular (PWA)** avec Service Workers |
| Charte Graphique | Dominante **Vert / Noir** |
| Authentification | **Clerk** (Login, Register, Gestion JWT) |
| Backend API | **Node.js / Express.js** (Architecture REST) |
| Base de données | **Supabase** (PostgreSQL managé) |

### 💡 Justification du choix : REST vs GraphQL

Pour un hackathon de 24h, **REST est le meilleur choix**. Bien que GraphQL offre une grande flexibilité de requêtage, API REST avec Express permet un développement beaucoup plus rapide, moins de boilerplate (configuration initiale), et s'intègre nativement avec les appels HTTP standard d'Angular. La performance réseau pour cette application (peu de requêtes imbriquées) ne justifie pas la complexité de GraphQL.

---

## 3. Objectifs Fonctionnels / Parcours Utilisateur

L'application est découpée en **5 écrans clés** :

### 1. Page de Connexion / Inscription (Auth Guard)

- Redirection automatique vers le Login si l'utilisateur n'est pas authentifié.
- Gestion par **Clerk**.

### 2. Page d'Accueil (Liste des sites)

- Affichage des sites déjà créés.
- Call-to-action bien visible pour ajouter un site.

### 3. Page "Ajouter un Site" (Stepper)

Formulaire découpé en étapes (Stepper Angular Material) pour une meilleure UX :

1.  **Informations générales** : Nom du site, surface (m²), nombre d'employés.
2.  **Infrastructure** : Places de parking (sous-dalle, sous-sol, aérien).
3.  **Matériaux (Approximation IA/Algo)** : *Nouveauté !* Si l'utilisateur ne connaît pas les tonnes exactes de béton/acier, l'API propose une **estimation mathématique** basée sur la surface et le type de parking (voir section 4).
4.  **Énergie** : Consommation annuelle (MWh).

### 4. Page "Détails & Dashboard" (Consultation)

- Récapitulatif du site.
- **Graphiques dynamiques** : Camembert (Construction vs Exploitation), Barres (Détail matériaux).
- KPIs : CO₂ total, CO₂/m², CO₂/employé.

### 5. Page "Comparaison"

- Sélection de 2 sites ou plus.
- Affichage des graphiques radar ou barres comparatives côte à côte.

---

## 4. Algorithme d'Approximation des Matériaux

> **Problème métier résolu** : Sur le terrain, l'utilisateur connaît rarement le tonnage exact d'acier ou de béton de son bâtiment.

Si l'utilisateur laisse les quantités vides dans le Stepper, le Backend Express utilisera ces ratios standards de construction (données estimées du BTP) pour pré-calculer le bilan :

- **Béton** : ~1.2 tonne de béton par m² de surface construite.
- **Acier** : ~0.1 tonne d'acier par m² de surface construite.
- **Verre** : ~0.02 tonne de verre par m².
- **Parking en sous-sol** : Impact massif → Ajoute ~15 tonnes de béton par place de parking enterrée.

*(Formules détaillées documentées dans les spécifications de calculs).*

---

## 5. Spécifications PWA (Progressive Web App)

- **Manifest.json** : Fournir l'icône de l'app, les couleurs de thème (Noir/Vert) et configurer l'affichage `standalone` (sans la barre d'URL du navigateur).
- **Service Worker** : Cacher la "Coquille de l'application" (App Shell) pour un chargement ultra-rapide même avec une connexion 4G faible sur le terrain.
- **Installation** : Le navigateur proposera à l'utilisateur d'ajouter l'app sur son écran d'accueil smartphone.

---

## 6. Critères d'Évaluation (Rappel)

| Critère | Poids | Notes pour le Hackathon |
|---|---|---|
| 🎬 Vidéo de Pitch | **80%** | Montrer la PWA sur smartphone, l'Algo d'estimation des matériaux = Gros point d'innovation. |
| 💻 Livrable Technique | **20%** | Code organisé, PWA installable, API Express découplée. |
