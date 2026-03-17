---
name: Accessibility Guidelines
description: Best practices and standards for ensuring an accessible and inclusive web application.
---

# Accessibility Standards

To ensure a high level of accessibility (WCAG 2.1 AA/AAA compliance), follow these principles:

## 1. Contrast and Color
- **No Black on Dark**: Avoid using pure black text (#000000) on dark backgrounds, even on interactive elements. Use white or high-contrast colors.
- **Contrast Ratios**: Maintain at least 4.5:1 for normal text and 3:1 for large text.
- **Interactive States**: Ensure hover and focus states provide clear visual changes without sacrificing legibility. Use `hover:text-white` on primary buttons.

## 2. Interactive Elements
- **Focus Indicators**: Always provide a visible focus ring for keyboard users.
- **Aria Labels**: Use `aria-label` for buttons that only contain icons.
- **Button Sizing**: Ensure touch targets are at least 44x44 pixels.

## 3. Typography
- **Scalable Units**: Use `rem` or `em` instead of `px`.
- **Readability**: Maintain appropriate line heights (at least 1.5).

## 4. Semantic HTML
- Use proper heading levels (`h1`, `h2`, etc.) sequentially.
- Use `<button>` for actions and `<a>` for navigation.
