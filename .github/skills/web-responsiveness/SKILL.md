---
name: web-responsiveness
description: Use when designing or implementing responsive layouts that must adapt to mobile, tablet, and desktop screens using a mobile-first approach and flexible grids.
---

# Web Responsiveness

## Overview
Ce skill définit les meilleures pratiques pour créer des interfaces web qui s'adaptent harmonieusement à toutes les tailles d'écran.

## When to Use
- Use when starting a new UI component.
- Use when fixing layout breaking issues on mobile.
- Use when implementing "Mobile-First" design patterns.

## Core Principles
### 1. Mobile-First approach
Commencez par concevoir pour le plus petit écran, puis ajoutez des couches de complexité pour les écrans plus larges.
- Priorisez le contenu essentiel.
- Utilisez des classes utilitaires (ex. Tailwind `block md:flex`).

### 2. Flexible Grids & Layouts
Évitez les largeurs fixes en pixels.
- Utilisez `width: 100%` ou `flex-1`.
- Utilisez CSS Grid (`grid-cols-1 md:grid-cols-3`).

### 3. Touch Targets
Les éléments interactifs doivent être faciles à cliquer sur mobile.
- Taille minimale : 44px x 44px.
- Espacement suffisant entre les boutons.

## Implementation (Tailwind CSS)
```html
<!-- Exemple de Header Responsif -->
<header class="flex flex-col md:flex-row items-center justify-between p-4">
  <div class="logo">CarbonSite</div>
  <nav class="hidden md:block">
    <!-- Menu desktop -->
  </nav>
  <button class="md:hidden">
    <!-- Menu Hamburger -->
  </button>
</header>
```

## Common Mistakes
- **Horizontal Overflow** : Causé par des éléments avec `min-width` trop élevés. Fix: `max-w-full`.
- **Fixed Widths** : Utiliser `w-[800px]` au lieu de `max-w-4xl w-full`.
- **Ignoring Landscape Mode** : Toujours tester la rotation.
