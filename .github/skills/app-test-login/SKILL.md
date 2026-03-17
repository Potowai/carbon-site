---
name: app-test-login
description: Use when testing the application authentication flow with provided test credentials
---

# 🧪 Test App Authentication

## Overview
Ce skill définit la procédure standard pour vérifier l'accès sécurisé à l'application CarbonSite Pro en utilisant les identifiants de test dédiés.

## When to Use
- Use when verifying the login flow after backend or frontend changes.
- Use when setting up new test environments.
- Use when conducting automated QA sessions.

## Credentials de Test
- **Email** : `test@test.fr`
- **Password** : `test`

## Implementation (Manuel)
1. Lancez le frontend (`http://localhost:4200`) et le backend (`http://localhost:3000`).
2. Accédez à la page d'accueil d'accès.
3. Saisissez les identifiants ci-dessus.
4. Validez l'accès au `/dashboard`.

## Automatisation
Utilisez le workflow global : `.agent/workflows/test-login.md`.

## Common Mistakes
- **Erreur de Secret JWT** : Vérifier que `SUPABASE_JWT_SECRET` est identique dans `.env` et dans le subagent.
- **Backend hors-ligne** : S'assurer que le serveur Express tourne sur le port 3000.
