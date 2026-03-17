# 🌿 CarbonSite — PWA & REST API 

> **Hackathon #26** — Capgemini — Mars 2026

CarbonSite est une **Progressive Web App (PWA)** mobile-first avec une API REST asynchrone conçue pour estimer l'empreinte carbone des sites physiques, même lorsque les données matérielles sont incomplètes sur le terrain.

---

## 🎨 Design & Expérience

*   **PWA Mobile-First** : Pensé pour l'installabilité smartphone et l'usage "Technicien BTP" sur site.
*   **Thème GreenTech** : Charte graphique dominante Vert (Écologie) et Noir (Lisibilité & Contraste d'écran).
*   **Stepper UX** : Parcours d'ajout de site fluide divisé en étapes claires.
*   **Innovation IA/Algo** : Un module d'estimation back-end comble intelligemment les vides de saisie.

---

## 🏗️ Architecture Technique

```
┌────────────────────────────────┐         ┌─────────────────────────┐
│     FRONTEND (Angular PWA)     │         │       BACKEND API       │
│                                │         │                         │
│ • UI: Vert & Noir              │◄───────▶│ • Node.js / Express     │
│ • Formulaire Stepper UX        │  REST   │ • Algorithme BTP        │
│ • Auth: Clerk SDK              │         │ • Middleware JWT        │
└────────────────────────────────┘         └─────────────────────────┘
                │                                       │
                ▼                                       ▼
       ┌────────────────┐                       ┌────────────────┐
       │     CLERK      │                       │   SUPABASE     │
       │    (SaaS Auth) │                       │ (PostgreSQL DB)│
       └────────────────┘                       └────────────────┘
```

1.  **Frontend** : Angular (PWA, Tailwind CSS).
2.  **Authentification** : Clerk (Zero-trust JWT transmis dans les headers HTTP).
3.  **Backend** : Node.js / Express (Logique métier, Calculs Carbone ADEME, Algorithme d'Estimation BTP).
4.  **Base de données** : Supabase (Instance PostgreSQL managée).

*(Note: Le choix de REST sur GraphQL a été fait pour garantir une Time-To-Market optimale sur 24h).*

---

## 🚀 Installation & Développement

### 1. Prérequis
- Node.js 20+
- Comptes gratuits [Supabase](https://supabase.com) et [Clerk](https://clerk.com)

### 2. Démarrer l'API (Backend)

```bash
cd backend
npm install

# Créer un .env avec SUPABASE_URL, SUPABASE_KEY, et CLERK_SECRET_KEY
cp .env.example .env

# Lancer Express sur le port 3000
npm run dev
```
L'API REST répondra sur `http://localhost:3000/api`

### 3. Démarrer la PWA (Frontend)

```bash
cd frontend
npm install

# Configurer Angular environment.ts avec l'URL de l'API (http://localhost:3000/api)
# et la CLERK_PUBLISHABLE_KEY.

# Lancer le serveur de démo Angular
ng serve
```
L'application web répondra sur `http://localhost:4200`

---

## 📊 Modules Fonctionnels

1.  **Guard d'Authentification** : Redirection stricte des non-authentifiés vers l'écran Clerk.
2.  **Tableau de Bord Global** : Liste de vos sites et call-to-action d'ajout.
3.  **Add-Site Stepper** : Saisie progressive. *(Nom, Infra, Énergie).*
4.  **Dashboard KPI** : Répartition Construction / Exploitation et graphes dynamiques (Chart.js ou ECharts).
5.  **Comparateur** : Vue comparative simultanée entre N sites choisis.
6.  **Auto-Complétion Algorithmique** : Si l'utilisateur laisse le béton et l'acier vides, l'API Express déduit un tonnage empirique (Béton = 1.2t/m², etc.) pour calculer un Bilan "Estimé".

---

*Hackathon #26 — Mars 2026 — L'équipe CarbonSite*
