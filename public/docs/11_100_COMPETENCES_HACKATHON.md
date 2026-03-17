# 🚀 100 Compétences & Outils Essentiels pour le Hackathon CarbonSite

> **Architecture :** Angular + Supabase + Clerk
>
> Ce document liste 100 compétences (skills), concepts, et outils qui seront très utiles à votre équipe pour réussir ce projet de calcul carbone en 24h.

---

## 🏗️ 1. Écosystème Angular (Frontend & UI)

1. **Angular CLI** : Génération rapide de composants, services et modules (`ng generate`).
2. **Standalone Components** : Création de composants modernes sans `NgModule`.
3. **Reactive Forms (Formulaires Réactifs)** : Gestion avancée du formulaire de saisie du site.
4. **RxJS (Observables)** : Gestion des flux de données asynchrones (très utile avec Supabase).
5. **Signals Angular** : Nouvelle méthode de réactivité (Angular 16+) pour un état local fluide.
6. **Angular Router** : Configuration des routes (Dashboard, Formulaire, Login).
7. **Route Guards** : Protection des routes privées (redirection si non authentifié par Clerk).
8. **Dependency Injection (DI)** : Injection des services (ex: `SupabaseService`, `CalculationService`).
9. **Pipes Angular** : Formatage des nombres (ex: arrondir les kgCO₂e) et des dates.
10. **Directives structurelles** : Utilisation de `@if`, `@for` (nouvelle syntaxe) ou `*ngIf`, `*ngFor`.
11. **Angular Material** : Bibliothèque de composants UI (boutons, cartes, inputs) prête à l'emploi.
12. **Tailwind CSS** : Framework utilitaire pour un styling ultra-rapide sans écrire de CSS pur.
13. **SCSS/SASS** : Préprocesseur pour organiser les styles spécifiques aux composants.
14. **Responsive Design (Mobile First)** : Essentiel pour la saisie terrain demandée sur smartphone.
15. **Animations Angular** : Transitions douces entre les pages (ex: apparition du Dashboard).
16. **Chart.js / ng2-charts** : Création du camembert (Construction vs Exploitation).
17. **ECharts (Apache)** : Alternative très puissante pour des graphiques interactifs complexes.
18. **Lazy Loading** : Chargement différé des modules pour accélérer le premier rendu (LCP).
19. **Server-Side Rendering (SSR) / Angular Universal** : *(Optionnel)* Pour des performances SEO (moins critique pour un hackathon B2B).
20. **Interceptors HTTP** : Attraper les requêtes sortantes (bien que moins utilisé avec le SDK Supabase).

## 🗄️ 2. Écosystème Supabase (Base de données & Backend-as-a-Service)

21. **Supabase Client SDK (`@supabase/supabase-js`)** : Initialisation et requêtage.
22. **PostgreSQL** : La base de données relationnelle sous-jacente de Supabase.
23. **Modélisation de données (MCD/MLD)** : Structurer correctement `sites`, `materiaux`, etc.
24. **Typescript types for Supabase** : Génération automatique des types TypeScript depuis la base pour un code 100% typé.
25. **Row Level Security (RLS)** : Sécurisation vitale : forcer un utilisateur à ne modifier que SES sites.
26. **Policies PostgreSQL** : Rédaction des règles `CREATE POLICY` pour le RLS.
27. **UUIDs** : Compréhension des clés primaires uniques globales pour `sites.id`.
28. **Foreign Keys (Clés étrangères)** : Lier les matériaux à un site spécifique.
29. **ON DELETE CASCADE** : Supression automatique des matériaux si le site est supprimé.
30. **Supabase SQL Editor** : Exécution rapide de scripts de création de tables.
31. **Supabase Table Editor** : UI pour voir/modifier les données en direct (très utile pour débugger).
32. **Jointures via SDK (`select('*, materiaux(*)')`)** : Récupérer un site ET ses composants en une requête.
33. **Filtres Supabase (`.eq()`, `.in()`)** : Trouver un site spécifique ou en comparer plusieurs.
34. **Supabase Functions (Edge Functions)** : *(Optionnel)* Déporter un script complexe côté serveur si besoin (ex: export PDF lourd).
35. **Supabase Storage** : *(Optionnel)* Héberger des photos du site physique.
36. **Webhooks Supabase** : *(Optionnel)* Déclencher une action quand un site est créé.
37. **Gestion des erreurs Supabase** : Catcher et afficher les erreurs réseau ou de droits RLS.
38. **Supabase CLI** : Utile pour avoir une base de données locale pendant le développement (optionnel vs Cloud).
39. **Gestion des `null` en SQL** : Autoriser la saisie progressive (champs vides).
40. **Vues SQL (Views)** : *(Optionnel)* Créer une table virtuelle qui pré-calcule le CO₂ total côté serveur.

## 🔐 3. Écosystème Clerk (Authentification)

41. **Clerk Angular SDK** : Intégration officielle de Clerk dans Angular.
42. **<SignIn /> et <SignUp /> Components** : Composants UI natifs de Clerk (gain de temps immense).
43. **<UserButton />** : Composant de profil et de déconnexion.
44. **Gestion des Sessions Clerk** : Vérifier si l'utilisateur est actif dans l'application.
45. **JWT (JSON Web Tokens)** : Comprendre comment Clerk transmet l'identité.
46. **Clerk Dashboard** : Configuration du projet, personnalisation des couleurs du login.
47. **Synchronisation Clerk ↔ Supabase** : Récupérer le JWT de Clerk pour l'injecter dans le client Supabase (essentiel pour le RLS).
48. **Custom JWT Claims** : Ajouter l'ID utilisateur Clerk (`sub`) pour PostgreSQL.
49. **Social Login (OAuth)** : Activer Microsoft/Google/GitHub login en 1 clic pour impressionner le jury.
50. **Magic Links / Passwordless** : Alternative très moderne au classique Email/Mot de passe.

## 🧮 4. Logique Métier & Calculs (Green IT / Carbone)

51. **Méthodologie Bilan Carbone® / GHG Protocol** : Compréhension globale des scopes (Scope 1, 2, 3).
52. **Facteurs d'Émission (FE)** : Concept central (Multiplier une donnée d'activité par un FE).
53. **ADEME Base Empreinte** : La référence française pour les facteurs d'émission.
54. **Unités d'impact (kgCO₂e)** : Comprendre le "Carbone Équivalent" (inclut CO2, Méthane, etc.).
55. **Conversion d'unités** : Passer des MWh aux kWh, ou des tonnes aux kg si nécessaire.
56. **Gestion de l'incertitude** : Gérer les données manquantes de manière élégante (Avertissements).
57. **Mix Énergétique Français** : Savoir pourquoi le kWh français (~40g) est très bas (Nucléaire) vs mondial.
58. **Empreinte des matériaux** : Savoir que l'Acier/Béton pèse infiniment plus lourd que le tertiaire.
59. **Séparation Construction / Exploitation** : Différencier l'impact "One-off" de l'impact continu.
60. **Algorithmes de calcul (TypeScript)** : Coder proprement les sommations (Array.reduce).

## 🛠️ 5. Outils de Développement & Déploiement

61. **Git** : Versioning impératif (commit souvent !).
62. **GitHub / GitLab** : Hébergement du code source.
63. **Vercel** : Outil parfait pour déployer un front Angular instantanément à chaque `git push`.
64. **Netlify** : Excellente alternative à Vercel pour le frontend.
65. **Variables d'environnement (`.env` / `environment.ts`)** : Sécuriser les clés API Supabase/Clerk.
66. **Prettier** : Formatage automatique du code pour éviter les débats de style.
67. **ESLint** : Trouver les erreurs TypeScript avant la compilation.
68. **VS Code** : L'éditeur de code standard.
69. **Console Chrome (DevTools)** : Débugger les requêtes réseau (`Network tab`) et l'UI.
70. **Postman / Insomnia** : *(Moins utile ici car utilisation du SDK, mais bon à connaître)*.
71. **NPM / Yarn / PNPM** : Gestionnaires de paquets.
72. **Figma / Penpot** : Pour faire un wireframe ultra rapide avant de coder.
73. **Markdown** : Pour rédiger le README.md parfait exigé par le jury.
74. **jsPDF / pdfmake** : Librairies JS pour générer l'export PDF du Dashboard (Palier 3).
75. **html2canvas** : Transformer des graphiques HTML en image pour les mettre dans le PDF.

## 🤝 6. Gestion de Projet & Soft Skills (Spécial Hackathon)

76. **MVP (Minimum Viable Product)** : L'art de couper les fonctionnalités non vitales.
77. **Timeboxing** : Se limiter à X minutes pour un bug avant de demander de l'aide.
78. **Kanban (Trello / Post-its)** : Visualiser "À faire / En cours / Fait".
79. **Loi de Pareto (80/20)** : 80% des résultats viennent de 20% de l'effort (Focus sur la démo !).
80. **Mocking (Bouchonnage)** : Savoir coder une interface avec des fausses données en attendant la BDD.
81. **Pair Programming** : Coder à deux sur le même écran pour résoudre un problème complexe (ex: RLS Supabase).
82. **Priorisation MoSCoW** : Distinguer les *Must have* (Saisie) des *Nice to have* (Comparaison).
83. **Pitch Deck Design** : Créer des slides de présentation claires et épurées.
84. **Storytelling** : Raconter une histoire lors de la démo ("Voici Alice, responsable RSE...").
85. **FinOps / GreenOps** : Argumenter sur le coût 0€ du Serverless (Supabase/Vercel) vs des serveurs allumés 24h/24.
86. **Gestion du stress et de la fatigue** : Indispensable la nuit du hackathon.
87. **Démo-Driven Development** : Coder uniquement ce qui sera montré dans la vidéo de 10 minutes.
88. **Architecture Serverless/BaaS** : Savoir expliquer pourquoi vous n'avez pas fait de backend classique.
89. **Analyse de risques** : Anticiper que dépendre de l'API Clerk nécessite du réseau.
90. **Répartition des rôles** : Front vs Données vs Pitch.

## 🔍 7. Compétences Techniques Avancées (Bonus)

91. **TypeScript Avancé (Interfaces, Generics)** : Coder proprement les modèles Carbon.
92. **Angular Change Detection (`OnPush`)** : Optimiser les performances des gros tableaux de bord.
93. **Local Storage / Session Storage** : Sauvegarder un brouillon de formulaire si l'utilisateur rafraîchit.
94. **Progressive Web App (PWA)** : Rendre l'app Angular installable sur Mobile (gros bonus UX).
95. **Web Workers** : Déporter un très gros calcul carbone (peu probable ici) hors du thread principal.
96. **CSS Grid & Flexbox** : Maîtrise absolue requise pour aligner le Dashboard.
97. **Squelettes de chargement (Skeleton Loaders)** : Afficher du gris clignotant pendant que Supabase répond = UX premium.
98. **Gestion du mode Sombre (Dark Mode)** : Via Tailwind, donne un effet "Wow" immédiat en démo.
99. **Date-fns / Day.js** : Manipuler facilement les dates des consommations d'énergie.
100. **Linter de sécurité (ex: Snyk)** : Mentionner qu'on scanne les dépendances NPM (pour les points "Industrialisation / Day 2").
