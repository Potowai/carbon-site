# 🔌 Contrat d'API REST — Node.js / Express

> **Architecture cible** : API Node.js/Express.js connectée à Supabase (Baza de données) et vérifiant les tokens JWT émis par Clerk.
>
> **Base URL :** `http://localhost:3000/api`

---

## 🔒 Sécurité & Headers

Toutes les routes nécessitent un token Bearer délivré par Clerk pour authentifier l'utilisateur.

```
Authorization: Bearer <clerk_jwt_token>
Content-Type: application/json
```

---

## 🏢 1. Sites

### `GET /api/sites` — Lister les sites

**Response `200 OK` :**
```json
[
  {
    "id": "uuid",
    "nom": "Campus Rennes",
    "surface_m2": 11771,
    "total_co2_kg": 3993496,
    "created_at": "2026-03-16T10:00:00Z"
  }
]
```

### `POST /api/sites` — Créer un site (depuis le Stepper)

> ✅ **Innovation** : L'API calculera automatiquement les quantités de matériaux manquantes grâce à l'algorithme d'estimation.

**Request Body (Le front envoie ce qu'il a) :**
```json
{
  "nom": "Campus Rennes",
  "surface_m2": 11771,
  "parking_sous_dalle": 41,
  "parking_sous_sol": 184,
  "parking_aerien": 83,
  "nb_employes": 1800,
  "postes_travail": 1037,
  "energie_mwh": 1840,
  "materiaux": [
    { "type_materiau": "VERRE", "quantite_tonnes": 300 }
  ],
  "auto_estimer_materiaux": true
}
```
*Note : `auto_estimer_materiaux` demande au backend de combler les trous pour le Béton, l'Acier, etc., basé sur la surface.*

**Response `201 Created` :**
```json
{
  "id": "uuid",
  "message": "Site créé et calculé avec succès",
  "estimation_utilisee": true
}
```

### `GET /api/sites/:id/dashboard` — Récupérer le tableau de bord

Renvoie les données brutes ET les KPIs pré-calculés par Express.

**Response `200 OK` :**
```json
{
  "site": {
    "id": "uuid",
    "nom": "Campus Rennes",
    "surface_m2": 11771
  },
  "kpis": {
    "total_co2_kg": 3993496,
    "co2_par_m2": 339.2,
    "co2_par_employe": 2218.6
  },
  "repartition": {
    "construction_kg": 3921000,
    "exploitation_kg": 72496,
    "pct_construction": 98.2,
    "pct_exploitation": 1.8
  },
  "materiaux": [
    { "type": "BETON", "tonnes": 15000, "co2_kg": 1275000, "estime_par_algo": true },
    { "type": "VERRE", "tonnes": 300, "co2_kg": 360000, "estime_par_algo": false }
  ]
}
```

---

## 📊 2. Comparaisons

### `POST /api/compare` — Comparer plusieurs sites

**Request Body :**
```json
{
  "site_ids": ["uuid-1", "uuid-2"]
}
```

**Response `200 OK` :**
```json
[
  {
    "site_id": "uuid-1",
    "nom": "Campus Rennes",
    "total_co2_kg": 3993496,
    "co2_par_m2": 339.2
  },
  {
    "site_id": "uuid-2",
    "nom": "Campus Nantes",
    "total_co2_kg": 2100000,
    "co2_par_m2": 247.1
  }
]
```

---

## 🧮 3. Référentiel Carbone

### `GET /api/reference/facteurs` — Obtenir les facteurs ADEME

Utile si le front veut faire des simulations en direct dans le stepper.

**Response `200 OK` :**
```json
{
  "BETON": 85.0,
  "ACIER": 1900.0,
  "VERRE": 1200.0,
  "BOIS": 30.0,
  "ELECTRICITE_FR": 39.4
}
```
