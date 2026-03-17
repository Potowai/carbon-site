# 🚀 Guide de Démarrage : Par quoi commencer ?

> **Objectif :** Lancer le projet de zéro jusqu'à avoir une base fonctionnelle connectée.
>
> **Règle du Hackathon :** Ne jamais bloquer l'autre membre de l'équipe. Le Front et le Back doivent pouvoir avancer en parallèle depuis la minute 1.

Voici l'ordre d'exécution exact recommandé pour les 3 premières heures.

---

## ÉTAPE 1 : Configuration des Services Cloud (Les Fondations)
*Durée estimée : 20 min | Responsable : N'importe qui dans l'équipe*

Avant d'écrire la moindre ligne de code, vous avez besoin de vos bases de données et clés API.

1. **Créer le projet Supabase**
   - Allez sur [Supabase.com](https://supabase.com) et créez un nouveau projet.
   - Allez dans `SQL Editor`, copiez-collez le script du fichier `03_SCHEMA_BASE_DE_DONNEES.md` et exécutez-le. Vos tables sont prêtes.
   - Notez la **Project URL** et le **Project API Key (anon)** pour le Frontend, ainsi que le **Service Role Key** (secret) pour le Backend.

2. **Créer le projet Clerk**
   - Allez sur [Clerk.com](https://clerk.com) et créez une application Angular/Express.
   - Activez les méthodes de connexion voulues (Email/Pass, Google, etc.).
   - Notez la **Publishable Key** pour le Frontend et la **Secret Key** pour le Backend.

3. **Créer le repository Git (GitHub / GitLab)**
   - Créez un repo vierge `carbonsite-hackathon`.
   - Invitez vos coéquipiers.

---

## ÉTAPE 2 : Initialisation des Projets (Le Squelette)
*Durée estimée : 30 min | Responsable : L'équipe entière en "Pair Programming"*

Vous allez créer deux dossiers distincts dans votre dépôt Git.

```bash
mkdir carbonsite-hackathon
cd carbonsite-hackathon
git init
```

### 👉 Côté Frontend (Dossier `/frontend`)

```bash
# Générer l'application Angular (choisissez SCSS)
ng new frontend

# Ajouter la PWA d'Angular (Configure le manifest et le Service Worker automatiquement)
cd frontend
ng add @angular/pwa

# Installer Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Installer Clerk SDK
npm install @clerk/clerk-angular
```

*Action immédiate :* Configurer la charte graphique Vert/Noir dans `tailwind.config.js` (voir doc `12_CHARTE_GRAPHIQUE_UI.md`).

### 👉 Côté Backend (Dossier `/backend`)

```bash
cd ..
mkdir backend
cd backend
npm init -y

# Installer Express et les dépendances essentielles
npm install express cors dotenv @clerk/clerk-sdk-node @supabase/supabase-js

# Outils de dev (nodemon pour recharger auto)
npm install -D nodemon
```

*Action immédiate :* Créer un fichier `.env` avec les clés Supabase et Clerk (NE PAS COMMITER SUR GIT !). Créer un fichier `server.js` de base avec Express qui écoute sur le port 3000.

---

## ÉTAPE 3 : Séparation des tâches (Le Code en Parallèle)

Maintenant que chaque dossier existe, l'équipe se sépare.

### 👤 Dev Frontend : Focus UI et Auth
*Tu n'as pas besoin du Backend pour l'instant !*

1. **Intégrer Clerk (Sign In / Sign Up)**
   - Utilise les composants pré-faits de Clerk `<clerk-sign-in>` pour avoir une page de login magnifique en 5 minutes.
   - Protège tes routes Angular avec le Guard Clerk.
2. **Créer le Stepper (Ajout de site)**
   - Intègre Angular Material (`ng add @angular/material`) pour utiliser le `<mat-stepper>`.
   - Crée le formulaire avec la charte Vert/Noir.
   - *Astuce Hackathon :* Log simplement les données du formulaire dans la console `console.log(form.value)` pour l'instant. Ne te soucie pas de l'API.

### 👤 Dev Backend : Focus Logique et Supabase
*Tu n'as pas besoin du Frontend pour l'instant !*

1. **Créer l'endpoint `POST /api/sites`**
   - Reçoit un JSON bidon (utilise **Postman** ou **Insomnia** pour tester).
   - Intègre l' **Algorithme d'Estimation** (voir doc `05_FORMULES_CALCUL_CARBONE.md`) si les matériaux sont vides.
2. **Connecter Supabase**
   - Dans cet endpoint, utilise le SDK `supabase-js` pour insérer le site et les matériaux calculés dans la base.
   - Vérifie dans le dashboard en ligne Supabase que la ligne apparaît bien.
3. **Créer l'endpoint `GET /api/sites/:id/dashboard`**
   - Lis un site depuis Supabase.
   - Applique les facteurs de conversion ADEME pour générer les KPIs (CO2 total, etc.).
   - Renvoie le JSON complet (voir doc `04_CONTRAT_API_REST.md`).

---

## ÉTAPE 4 : La Connexion des deux mondes (Le Point de Fusion)
*Durée estimée : 1h | Responsable : L'équipe ensemble*

C'est le moment de relier le formulaire du Frontend à l'API du Backend.

1. **Dans Angular :** Le service HTTP envoie le Payload du formulaire au Backend `http://localhost:3000/api/sites`.
2. **Dans Angular (Interceptor) :** Ajoute le Token JWT issu de Clerk dans l'en-tête `Authorization: Bearer <token>` de la requête.
3. **Dans Express :** Le middleware Clerk vérifie ce token. S'il est valide, il insère en base via Supabase.

**✅ Si vous arrivez ici (Palier 1), votre Hackathon est déjà un succès. Le reste (les jolis graphiques, le comparateur) n'est que de l'habillage pour le jury !**
