---
name: rgaa-accessibility
description: Use when auditing or implementing accessibility features compliant with RGAA/WCAG standards, including ARIA labels, semantic HTML, and keyboard navigation.
---

# RGAA Accessibility

## Overview
Le Référentiel Général d'Amélioration de l'Accessibilité (RGAA) définit les critères pour rendre les services numériques accessibles à tous, y compris les personnes en situation de handicap.

## When to Use
- Use when conducting an accessibility audit.
- Use when creating interactive components (modals, dropdowns).
- Use when adding images or icons that convey meaning.

## Core Principles (WCAG/RGAA)
### 1. Semantic HTML
Utilisez les balises appropriées pour leur rôle (`<main>`, `<nav>`, `<h1>`, `<button>`, `<a>`).
- Ne remplacez pas un bouton par une `div`.

### 2. Text Alternatives
Chaque image non-décorative doit avoir un attribut `alt` ou une `aria-label`.
- Les icônes de bouton (ex: bouton logout) Doivent avoir une `aria-label`.

### 3. Focus Management
L'élément actif doit être visuellement identifiable (clavier).
- Ne jamais supprimer `outline: none` sans proposer d'alternative visuelle.

### 4. Color Contrast
Ratio minimal de 4.5:1 pour le texte normal et 3:1 pour le texte large.

## Implementation Checklist
- [ ] Balise `<html lang="fr">` présente.
- [ ] Utilisation de `aria-label` sur tous les éléments icon-only.
- [ ] Hiérarchie de titres `<h1>` à `<h6>` logique.
- [ ] Support de la navigation au clavier (Tab, Enter, Space).
- [ ] Alternative textuelle pour les graphiques (tableaux de données ou descriptions).

## Common Mistakes
- **Icon-only buttons** sans label : Personne utilisant un lecteur d'écran ne saura ce que fait le bouton.
- **Div-buttons** : Pas de focus clavier naturel, pas de déclenchement avec la touche "Entrée".
- **Empty Links** : Liens sans texte (ex: logo cliquable).
