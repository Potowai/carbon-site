# 🎯 100 Compétences Utiles pour CarbonSite (Hackathon)

Ce document répertorie les compétences techniques et transversales essentielles pour mener à bien le projet CarbonSite, de la conception à la présentation finale.

## 🎨 Design & UX/UI (1-20)
1. **Glassmorphism Design** : Créer des interfaces modernes avec des effets de transparence.
2. **Dark Mode Optimization** : Savoir gérer le contraste et la lisibilité en thème sombre.
3. **Micro-interactions** : Utiliser des animations subtiles pour guider l'utilisateur.
4. **Responsive Design (Mobile First)** : Garantir une expérience fluide sur smartphone (PWA).
5. **Color Theory (Carbon Themes)** : Utiliser les dégradés de vert/noir pour l'image écologique.
6. **Iconography Management** : Intégrer des icônes SVG légères et cohérentes.
7. **Prototypage Rapide** : Passer d'une idée à un wireframe en quelques minutes.
8. **Accessibilité (A11y)** : Assurer que l'application est utilisable par tous.
9. **Typography Selection** : Utiliser des polices modernes (Inter, Roboto) pour le côté "Pro".
10. **Layout Grid (Bento Box)** : Concevoir des dashboards type "Bento" pour organiser les graphs.
11. **User Flow Mapping** : Tracer le parcours client du login à l'exportation.
12. **Design System (Tailwind Tokens)** : Créer des classes réutilisables pour la cohérence.
13. **Visual Hierarchy** : Mettre en avant les scores carbone par rapport aux données secondaires.
14. **Skeleton Loading** : Améliorer la perception de vitesse via des placeholders animés.
15. **Form UX** : Rendre le remplissage des données chantiers moins rébarbatif (Stepper).
16. **Data Interpretation UI** : Savoir quel graph (donuts vs barres) pour quelle donnée.
17. **Empty State Design** : Créer des écrans accueillants quand il n'y a pas encore de données.
18. **Branding Express** : Création d'un logo et d'une identité en un temps record.
19. **Glass Card Effects** : Utiliser des bordures semi-transparentes pour la profondeur.
20. **Scroll Animations** : Animer le contenu au défilement pour l'effet "Wow".

## 💻 Développement Frontend (21-40)
21. **Angular Standalone Components** : Maîtriser l'architecture moderne sans modules.
22. **Angular Signals** : Gérer la réactivité de l'état de manière performante.
23. **Reactive Forms** : Créer des formulaires complexes avec validations dynamiques.
24. **RxJS Operators** : Manipuler les flux de données (pipe, map, switchMap).
25. **Angular Material** : Utiliser les composants pré-buildés (Stepper, Dialogs).
26. **Tailwind CSS** : Styliser l'application rapidement sans quitter le HTML.
27. **PWA (Service Workers)** : Rendre l'app installable et disponible hors-ligne.
28. **HTTP Interceptors** : Gérer les headers d'authentification automatiquement.
29. **Lazy Loading** : Optimiser le temps de chargement des pages secondaires.
30. **Dependency Injection** : Maîtriser l'injection de services (Clerk, API).
31. **Control Flow Syntax (@if, @for)** : Utiliser la nouvelle syntaxe Angular 17+.
32. **Custom Pipes** : Transformer les données carbone (Kg vers Tonnes) en vue.
33. **Chart.js / Ngx-charts** : Intégrer des graphiques de données dynamiques.
34. **Error Handling Frontend** : Capturer et afficher les erreurs API proprement.
35. **State Management (Simple)** : Utiliser des BehaviorSubjects pour partager l'état.
36. **ViewChild & Template Refs** : Interagir directement avec des éléments du DOM.
37. **Lifecycle Hooks** : Maîtriser ngOnInit, ngAfterViewInit pour les graphes.
38. **Component Interaction** : Passer des données entre parents et enfants (@Input/@Output).
39. **Angular Animations** : Créer des transitions de pages fluides.
40. **TypeScript Advanced Types** : Utiliser les Interfaces et Types pour sécuriser le code.

## ⚙️ Développement Backend & API (41-60)
41. **Express.js Routing** : Structurer l'API de manière claire et modulaire.
42. **Middleware Management** : Gérer les logs, le CORS et le JSON proprement.
43. **JWT Verification** : Valider les jetons de session envoyés par Clerk.
44. **RESTful Contract Design** : Respecter les codes HTTP et les structures JSON.
45. **Clerk Admin SDK** : Gérer les utilisateurs côté serveur via Node.js.
46. **Environmental Variables (.env)** : Sécuriser les clés API et secrets.
47. **Error Middleware** : Centraliser la gestion des erreurs côté serveur.
48. **Node.js Performance** : Éviter les opérations bloquantes sur l'Event Loop.
49. **Query Params Filtering** : Permettre le tri et le filtrage des sites via l'URL.
50. **Rate Limiting** : Protéger l'API contre les abus.
51. **CORS Configuration** : Autoriser uniquement le front vers le back.
52. **JSON Schema Validation** : Valider les entrées du client avec Joi ou Zod.
53. **Async/Await Flow** : Gérer les appels asynchrones vers Supabase.
54. **Modular Architecture** : Séparer les services, les routes et les contrôleurs.
55. **API Documentation (Swagger-like)** : Documenter les points de terminaison.
56. **Material Estimation Algorithms** : Coder les formules mathématiques carbone.
57. **Data Transformation** : Nettoyer les données brutes avant stockage.
58. **Caching API** : Mettre en cache les résultats de calculs lourds.
59. **WebSocket (Optionnel)** : Pour des mises à jour temps réel sur les calculs.
60. **Serverless Mindset** : Savoir déployer vers Vercel ou Supabase Functions.

## 🗄️ Base de Données & Cloud (61-80)
61. **Supabase Authentication** : Gérer les autorisations RBAC (Row Level Security).
62. **PostgreSQL Queries** : Écrire des requêtes SQL performantes.
63. **Schema Design** : Créer des relations One-to-Many entre Sites et Matériaux.
64. **RLS Policies** : Garantir qu'un utilisateur ne voit que ses propres sites.
65. **JSONB Usage (NoSQL style)** : Stocker des données flexibles dans SQL.
66. **Database Migrations** : Versionner les changements de structure SQL.
67. **Views & Stored Procedures** : Centraliser les calculs carbone dans la DB.
68. **Supabase Realtime** : Écouter les changements dans les tables de sites.
69. **Backup Strategies** : Savoir comment exporter ses données de hackathon.
70. **Connection Pooling** : Gérer efficacement les connexions à la base.
71. **Indices Postgres** : Accélérer la recherche sur les noms de chantiers.
72. **Full Text Search** : Implémenter une recherche intelligente sur les sites.
73. **Supabase Storage** : Gérer l'upload de photos de chantiers / logos.
74. **Data Seed Scripts** : Créer des scripts pour remplir la DB de tests au démarrage.
75. **Relational Constraints** : Assurer l'intégrité des données (Foreign Keys).
76. **SQL Editor Proficiency** : Être à l'aise avec l'interface Supabase.
77. **API Key Scoping** : Faire la différence entre Anon Key et Service Role Key.
78. **Database Hooks** : Déclencher des actions lors de l'insertion de données.
79. **Normalization vs Denormalization** : Choisir le bon compromis pour la vitesse.
80. **Cloud Deployment (Vercel/Render)** : Héberger son API en quelques clics.

## 🌿 Métier & Carbone (81-100)
81. **LCA (Life Cycle Assessment)** : Comprendre le cycle de vie d'un bâtiment.
82. **Émissions Scope 3** : Se focaliser sur les matériaux et le transport.
83. **FDES Analysis** : Savoir lire une fiche de données environnementales.
84. **Emission Factors (Base Empreinte)** : Utiliser les KPIs de l'ADEME.
85. **Carbon Offsetting Knowledge** : Comprendre comment compenser.
86. **Green IT** : Appliquer des principes de sobriété numérique dans le code.
87. **RE2020 Compliance** : Comprendre les enjeux de la nouvelle réglementation.
88. **Material Substitution Logic** : Proposer une alternative (Bois vs Béton).
89. **Dashboard Pitching** : Savoir expliquer une donnée carbone complexe.
90. **Data Scraping (Producteurs)** : Savoir où trouver les données de matériaux.
91. **Agile Hackathon Management** : Prioriser le MVP avant tout.
92. **Pitch Deck Design** : Créer une présentation percutante.
93. **Public Speaking** : Convaincre le jury en 3 minutes.
94. **Storytelling** : Transformer un outil technique en une mission pour la planète.
95. **Team Collaboration (Git)** : Gérer les branches et les merges sans conflit.
96. **Unit Testing (Critical flows)** : Tester les calculs carbone sensibles.
97. **Security Scanning (Aikido)** : Assurer qu'il n'y a pas de vulnérabilités.
98. **Monitoring** : Surveiller le backend lors de la démo en live.
99. **Feedback Loop** : Itérer rapidement après un test utilisateur.
100. **Innovation Mindset** : Toujours chercher "la" petite fonctionnalité qui tue.
