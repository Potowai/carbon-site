# 📌 Kanban de Survie — Hackathon 24h

> **Architecture PWA & Express.js** : Angular PWA + Node/Express + Supabase + Clerk
>
> **Règle d'or** : 1 tâche max en cours par personne. Finir avant de commencer.

---

## 🚩 PALIER 1 — SOCLE (Heures 0 à 8) — OBLIGATOIRE

> Objectif : Front Angular connecté à l'API Express, API connectée à Supabase. Site saisi → calculé → affiché.

### 👤 Dev Backend (Node.js / Express)

| # | Tâche | Durée est. | Statut |
|---|---|---|---|
| B1 | Init projet Express + connect Supabase SDK | 1h | ⬜ |
| B2 | Création du Middleware Clerk (Verify Auth Token) | 1h | ⬜ |
| B3 | Coder `POST /api/sites` (Création site en BDD) | 1h | ⬜ |
| B4 | Coder l'algo d'approximation (Béton/Acier par m²) dans le POST | 1h30 | ⬜ |
| B5 | Coder le Service de Calcul Carbone (FE ADEME) + `GET /dashboard` | 2h | ⬜ |

### 👤 Dev Frontend (Angular PWA)

| # | Tâche | Durée est. | Statut |
|---|---|---|---|
| F1 | Init projet Angular avec PWA (`ng add @angular/pwa`) | 30m | ⬜ |
| F2 | Setup Clerk Angular (Login/Register Forms) | 1h | ⬜ |
| F3 | Créer le **Stepper** Ajouter un Site (Général > Infra > Matériaux) | 2h | ⬜ |
| F4 | Service Angular (Appels HTTP vers l'API Node) avec Interceptor Token | 1h | ⬜ |
| F5 | UI Design : appliquer la charte Vert / Noir (Tailwind) | 1h30 | ⬜ |

### 👤 Product Owner

| # | Tâche | Durée est. | Statut |
|---|---|---|---|
| P1 | Fournir les ratios de l'algo d'estimation au Backend | 15m | ⬜ |
| P2 | Tester le Stepper Frontend avec de fausses données | 30m | ⬜ |
| P3 | Commencer le script du pitch vidéo (Focus PWA et Algo Estimation) | 2h | ⬜ |

---

## 🚀 PALIER 2 — DASHBOARD & PWA (Heures 8 à 18)

> Objectif : L'app est installable sur téléphone. Les graphiques fonctionnent.

### 👤 Dev Backend (Node.js / Express)

| # | Tâche | Durée est. | Statut |
|---|---|---|---|
| B6 | Coder la route de comparaison `POST /api/compare` | 1h30 | ⬜ |
| B7 | Gérer les requêtes d'historisation / modifications | 1h | ⬜ |

### 👤 Dev Frontend (Angular PWA)

| # | Tâche | Durée est. | Statut |
|---|---|---|---|
| F6 | Intégrer les Graphiques (Chart.js dynamique avec data Dashboard API) | 2h | ⬜ |
| F7 | Écran "Liste des sites" et Navigation globale | 1h | ⬜ |
| F8 | Écran "Comparateur" (affichage côte à côte) | 1h | ⬜ |
| F9 | Tester l'installation PWA sur Chrome Android/iOS | 30m | ⬜ |

### 👤 Product Owner

| # | Tâche | Durée est. | Statut |
|---|---|---|---|
| P4 | Capturer la vidéo de la démo PWA sur téléphone réel | 1h | ⬜ |
| P5 | Préparer slides (REST vs GraphQL, Pourquoi PWA, FinOps estimé) | 2h | ⬜ |

---

## ✨ PALIER 3 — BONUS (Heures 18 à 22)

| # | Tâche | Responsable | Durée est. | Statut |
|---|---|---|---|---|
| X1 | Export PDF du Dashboard | Front | 2h | ⬜ |
| X2 | Intégration GraphQL côté API ? (Si assez d'avance) | Back | 2h | ⬜ |

---

## 🏁 FINALISATION (Heures 22 à 24)

| # | Tâche | Responsable | Statut |
|---|---|---|---|
| Z1 | Vérifier manifest.json, logo, Service Workers | Front | ⬜ |
| Z2 | Rédiger README.md avec instructions de Run (Front + Back) | Back | ⬜ |
| Z3 | Finaliser Pitch Vidéo | PO | ⬜ |
