# 🌿 CarbonSite — PWA & REST API 

> **Hackathon #26** — Capgemini — Mars 2026

CarbonSite est une **Progressive Web App (PWA)** mobile-first conçue pour estimer l'empreinte carbone des sites physiques, même lorsque les données matérielles sont incomplètes sur le terrain.

---

## 🎨 Design & Expérience

*   **PWA Mobile-First** : Pensé pour l'installabilité smartphone et l'usage "Technicien BTP" sur site.
*   **Thème GreenTech** : Charte graphique Ultra-Premium dominante Vert (Écologie) et Noir (Lisibilité & Contraste).
*   **Stepper UX** : Parcours d'ajout de site fluide divisé en étapes claires.
*   **Innovation IA/Algo** : Un module d'estimation back-end comble intelligemment les vides de saisie.

---

## 🏗️ Architecture Technique

- **Frontend** : Angular (PWA, Tailwind CSS)
- **Backend** : Node.js / Express (Calculs Carbone & Algorithmes)
- **Base de données** : Supabase (PostgreSQL)
- **Authentification** : Clerk SDK

---

## 🚀 Installation & Configuration

### 1. Prérequis
- Node.js 20+
- Un compte [Supabase](https://supabase.com)

### 2. Configuration du Backend
```bash
cd backend
npm install
```
Créez un fichier `.env` à la racine du dossier `backend` :
```env
SUPABASE_URL=votre_url_supabase
SUPABASE_ANON_KEY=votre_clé_anon
PORT=3000
```

### 3. Initialisation de la Base de Données (Supabase)
Comme le projet utilise Supabase directement (sans Prisma pour plus de simplicité), suivez ces étapes :
1. Connectez-vous à votre tableau de bord **Supabase**.
2. Allez dans le **SQL Editor**.
3. Exécutez le contenu du fichier `backend/supabase_init.sql` pour créer les tables nécessaires.
4. Lancez le script de seeding pour injecter les données de démonstration :
   ```bash
   node seed_capgemini.js
   ```

### 4. Lancement du Backend
```bash
# Développement (avec auto-reload)
npm run dev

# Production
npm start
```

### 5. Configuration et Lancement du Frontend
```bash
cd frontend
npm install
npm start
```
L'application sera accessible sur `http://localhost:4200`.

---

## 🛠️ Santé du Système
Un endpoint de santé est disponible pour vérifier l'état du serveur et de sa connexion à Supabase :
`GET http://localhost:3000/health`

Exemple de réponse :
```json
{
  "status": "OK",
  "uptime": 123.45,
  "database": "CONNECTED",
  "timestamp": "2026-03-17T09:30:00.000Z"
}
```

---

## 📂 Structure du Projet
- `/frontend` : Application Angular PWA.
- `/backend` : API Express avec logique de calcul carbone.
- `/public/docs` : Dossiers de cadrage, templates et PDF du projet.

---

*Hackathon #26 — Mars 2026 — L'équipe CarbonSite*
