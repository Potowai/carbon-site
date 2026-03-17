# 🗄️ Schéma de la Base de Données — Supabase (PostgreSQL)

> **Nouvelle Architecture** : Backend Express central + BDD Supabase en retrait.
> Angular **ne communique plus directement avec Supabase**. Il communique en REST avec l'API Express qui, elle, a accès à Supabase (via SDK ou pg).

---

## 1. Choix du client BDD (Côté Backend Express)

Dans l'API Node.js/Express, deux choix sont possibles pour interroger Supabase :

1. **Option 1 (Recommandée) : Le SDK `@supabase/supabase-js`**
   - Rapide à setup. Utilise les appels REST/PostgREST intégrés.
2. **Option 2 : Sequelize ou Prisma (ORM pur PostgreSQL)**
   - Plus de configuration, mais on manipule Supabase comme n'importe quel Postgres traditionnel via l'URL `postgresql://...`

Dans le cadre du Hackathon, l'Option 1 (SDK Supabase JS côté Node.js) est généralement la plus rapide.

---

## 2. Tables SQL PostgreSQL (Supabase)

L'API Node.js injectera un flag explicite si une donnée a été approximée mathématiquement plutôt que saisie.

### Table `sites`

| Colonne | Type | Contrainte | Description |
|---|---|---|---|
| `id` | `uuid` | PK, default `gen_random_uuid()` | Identifiant unique |
| `nom` | `text` | **NOT NULL** | Nom du site |
| `surface_m2` | `float8` | nullable | Surface en m² |
| `parking_sous_dalle` | `int4` | nullable | Places parking sous-dalle |
| `parking_sous_sol` | `int4` | nullable | Places parking sous-sol |
| `parking_aerien` | `int4` | nullable | Places parking aérien |
| `nb_employes` | `int4` | nullable | Nombre d'employés |
| `postes_travail` | `int4` | nullable | Nombre de postes de travail |
| `user_id` | `text` | nullable | ID utilisateur Clerk |
| `created_at` | `timestamptz` | default `now()` | Date de création |

### Table `materiaux`

> 💡 **Mise à jour (Algo)** : Ajout de la colonne `estime_par_algo` pour que le front puisse afficher une icône `⚠️ Estimé` si le backend a généré la donnée.

| Colonne | Type | Contrainte | Description |
|---|---|---|---|
| `id` | `uuid` | PK, auto | Identifiant unique |
| `site_id` | `uuid` | **FK → sites.id, CASCADE** | Site parent |
| `type_materiau` | `text` | NOT NULL | `BETON`, `ACIER`, `VERRE`, `BOIS` |
| `quantite_tonnes` | `float8` | nullable | Quantité en tonnes |
| `estime_par_algo` | `boolean` | default `false` | True si Express l'a calculé via la surface |

### Table `consommations`

| Colonne | Type | Contrainte | Description |
|---|---|---|---|
| `id` | `uuid` | PK, auto | Identifiant unique |
| `site_id` | `uuid` | **FK → sites.id, CASCADE** | Site parent |
| `annee` | `int4` | NOT NULL | Année (ex: 2025) |
| `energie_mwh` | `float8` | nullable | Consommation électrique totale |

---

## 3. Script SQL de création (À lancer dans l'éditeur Supabase)

```sql
-- ============================================================
-- CarbonSite — Schéma Base de données (PWA + Express)
-- ============================================================

CREATE TABLE sites (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nom             TEXT NOT NULL,
    surface_m2      DOUBLE PRECISION,
    parking_sous_dalle INTEGER,
    parking_sous_sol   INTEGER,
    parking_aerien     INTEGER,
    nb_employes     INTEGER,
    postes_travail  INTEGER,
    user_id         TEXT,
    created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE materiaux (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id         UUID NOT NULL REFERENCES sites(id) ON DELETE CASCADE,
    type_materiau   TEXT NOT NULL,
    quantite_tonnes DOUBLE PRECISION,
    estime_par_algo BOOLEAN DEFAULT FALSE
);

CREATE TABLE consommations (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    site_id         UUID NOT NULL REFERENCES sites(id) ON DELETE CASCADE,
    annee           INTEGER NOT NULL,
    energie_mwh     DOUBLE PRECISION
);

-- Note sur le RLS (Row Level Security) :
-- Vu que l'API Express (qui utilise la clé secrète Supabase) est le *seul* client
-- à appeler la base de données, le RLS est moins strictement nécessaire que
-- dans une archi Frontend-to-Supabase.
-- C'EST LE MIDDLEWARE EXPRESS QUI ASSURE LA SÉCURITÉ EN VÉRIFIANT LE JWT CLERK.
```

---

## 4. Données Mock : Initialisation d'un Campus via Express

Lors du démarrage (ou via un script seed Node.js local), l'API peut injecter le campus par défaut :

```javascript
// Script coté Backend Node.js
async function seedCampusRennes(supabaseAdminClient) {
  // 1. Creation du Site
  const { data: site } = await supabaseAdminClient.from('sites').insert({
    nom: 'Campus Rennes',
    surface_m2: 11771,
    parking_sous_dalle: 41,
    parking_sous_sol: 184,
    parking_aerien: 83,
    nb_employes: 1800,
    postes_travail: 1037,
    user_id: 'mock_demostration'
  }).select().single();

  // 2. Materiaux "Saisis"
  await supabaseAdminClient.from('materiaux').insert([
    { site_id: site.id, type_materiau: 'BETON', quantite_tonnes: 15000, estime_par_algo: false },
    { site_id: site.id, type_materiau: 'ACIER', quantite_tonnes: 1200, estime_par_algo: false },
    { site_id: site.id, type_materiau: 'VERRE', quantite_tonnes: 300, estime_par_algo: false },
    { site_id: site.id, type_materiau: 'BOIS', quantite_tonnes: 200, estime_par_algo: false }
  ]);

  // 3. Consommations
  await supabaseAdminClient.from('consommations').insert({
    site_id: site.id,
    annee: 2025,
    energie_mwh: 1840
  });

  console.log("Seed Campus Rennes terminé.");
}
```

> **Attention sécurité** : Angular ne doit plus jamais avoir la `supabaseUrl` ou la `supabaseAnonKey` dans ses variables d'environnements. Le Front Angular ne connaît que l'URL locale de votre API Express (`http://localhost:3000/api`).
