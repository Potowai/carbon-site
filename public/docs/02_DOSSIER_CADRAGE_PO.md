# 📂 Dossier de Cadrage — Chef de Projet / Product Owner

> **Hackathon #26** — Capgemini — Mars 2026
>
> *Calculer l'empreinte carbone d'un site physique*

---

## 1. Vision Produit & Cadrage UX

L'application passe d'un simple tableau de bord statique à un **outil métier nomade**.

| Décision UX/UI | Pourquoi ? (Argumentation pour le Jury) |
|---|---|
| **Design Mobile-First PWA** | "Le technicien est sur site pour mesurer le bâtiment, pas derrière un bureau. Une Progressive Web App permet une installation native et fonctionne même avec une mauvaise 4G dans un sous-sol." |
| **Charte Vert / Noir** | Le vert évoque l'aspect "Green IT" et l'écologie. Le noir apporte de la modernité, du contraste pour les graphiques et un mode sombre par défaut (réduit la conso énergie de l'écran AMOLED du technicien). |
| **Formulaire en Stepper** | 50 champs d'un coup, c'est pénible. Un stepper par étape (Général > Infra > Énergie) donne un aspect "Assistant intelligent" et réduit le taux de rebond. |

---

## 2. Choix Architecturaux (Justifications Techniques)

| Composant | Technologie | Argument Pitch |
|---|---|---|
| API Backend | **Node.js + Express** | On maîtrise REST, ça compile vite, c'est léger. *(GraphQL était une option, mais REST est plus pragmatique sur un hackathon de 24h sans graphe de données ultra-complexe)*. |
| Authentification | **Clerk** | Sécurité de la prod sans compromis sur le dev. Pas de stockage de mot de passe sensible dans notre DB. |
| Calcul Carbone | **API / Backend Central** | On ne fait pas confiance au client. L'algorithme de calcul de l'ADEME réside sur le serveur sécurisé. |
| Innovation | **Algorithme d'Estimation** | "Souvent, le client ne sait pas combien de tonnes de béton il a dans ses murs. Notre algo l'estime grâce à la surface et aux données standard de la construction." |

---

## 3. Estimation des Coûts (FinOps / GreenOps)

Modèle de tarification ultra-optimisé avec des services managés modernes.

| Service | Fournisseur | Coût MVP (Hackathon) | Coût Production (Scale) |
|---|---|---|---|
| Frontend PWA | Vercel | 0 € / mois | ~ 20 € / mois |
| API Express | Render / Fly.io | 0 € / mois | ~ 15 € / mois |
| Authentification | Clerk | 0 € / mois | ~ 25 € / mois |
| BDD PostgreSQL | Supabase | 0 € / mois | ~ 25 € / mois |
| **Total Estimé** | | **0 €** | **~ 85 € / mois** |

---

## 4. Organisation Cible

| Rôle (Hackathon) | Responsabilité |
|---|---|
| **Architecte Backend (API)** | Node.js, Express, Middleware Clerk, Logique de Calcul Algo Carbone. |
| **Intégrateur Frontend PWA** | Angular, Manifest, Offline caching, Tailwind (Vert/Noir), Composant Graphique, Stepper UX. |
| **Product Owner** | Design system, Ratios d'estimation du BTP, QA (tests mobile), Script Pitch. |
