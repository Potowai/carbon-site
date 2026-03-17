# 🧮 Algorithmes & Formules de Calcul (Backend Express)

> Code destiné au **développeur Backend Node.js / Express**.
> Il contient les formules d'emprunte de l'ADEME **ET le nouvel algorithme d'estimation BTP**.

---

## 1. Algorithme d'Estimation des Matériaux

**Objectif :** Résoudre le problème du manque de données. Si l'utilisateur saisit uniquement la surface et le parking, le backend Express doit extrapoler les tonnages de béton et d'acier.

### Les ratios BTP (Règles métiers)

- **Béton au sol** : ~1.2 tonne par m² de bâtiment (fondations, dalles).
- **Acier d'armature** : ~0.1 tonne par m².
- **Verre / Façades** : ~0.02 tonne par m².
- **Parking Sous-Sol** : Construction très gourmande en béton armé. Ajoute ~15 tonnes de béton par place enterrée.

### Code d'estimation (Service Node.js)

```javascript
/**
 * Estime le tonnage de matériaux si l'utilisateur ne les a pas fournis.
 * @param {Object} siteData - Les données du site issues du Payload Frontend
 * @returns {Array} Liste des matériaux avec tonnages estimés
 */
function estimerMateriauxManquants(siteData) {
    const materiaux = [];
    const surface = siteData.surface_m2 || 0;
    const placesSousSol = siteData.parking_sous_sol || 0;

    // 1. Estimation Béton
    // Formule : (Surface * 1.2) + (Places Sous-Sol * 15)
    const betonEstime = (surface * 1.2) + (placesSousSol * 15);
    if (betonEstime > 0) {
        materiaux.push({
            type_materiau: 'BETON',
            quantite_tonnes: Math.round(betonEstime),
            estime_par_algo: true
        });
    }

    // 2. Estimation Acier
    // Formule : Surface * 0.1
    const acierEstime = surface * 0.1;
    if (acierEstime > 0) {
        materiaux.push({
            type_materiau: 'ACIER',
            quantite_tonnes: Math.round(acierEstime),
            estime_par_algo: true
        });
    }

    // 3. Estimation Verre
    const verreEstime = surface * 0.02;
    if (verreEstime > 0) {
        materiaux.push({
            type_materiau: 'VERRE',
            quantite_tonnes: Math.round(verreEstime),
            estime_par_algo: true
        });
    }

    return materiaux;
}
```

> **Logique API** :
> 1. Express reçoit le `POST /api/sites`.
> 2. Express vérifie si le tableau `materiaux` est vide.
> 3. Si oui, et que `surface_m2` existe, il appelle `estimerMateriauxManquants()`.
> 4. Il insère les résultats dans Supabase.

---

## 2. Calcul des Émissions (ADEME)

### Constantes (Facteurs ADEME)

```javascript
const FACTEURS_EMISSION = {
  BETON: 85,        // kgCO2e/tonne
  ACIER: 1900,      // kgCO2e/tonne
  VERRE: 1200,      // kgCO2e/tonne
  BOIS: 30,         // kgCO2e/tonne
  ELECTRICITE_FR: 39.4 // kgCO2e/MWh
};
```

### Mécanique de calcul des KPIs (Node.js)

```javascript
/**
 * Calcule tous les KPIs d'un site
 */
function calculerDashboard(site, materiaux, consommations) {
    let construction_kg = 0;
    let exploitation_kg = 0;

    // Calcul Construction
    materiaux.forEach(mat => {
        const FE = FACTEURS_EMISSION[mat.type_materiau] || 0;
        const co2 = mat.quantite_tonnes * FE;
        mat.co2_kg = co2; // On attache le résultat à la ligne pour le front
        construction_kg += co2;
    });

    // Calcul Exploitation
    consommations.forEach(conso => {
        const co2 = conso.energie_mwh * FACTEURS_EMISSION['ELECTRICITE_FR'];
        exploitation_kg += co2;
    });

    const total_co2_kg = construction_kg + exploitation_kg;

    // Alertes si données abérrantes ou manquantes
    const alertes = [];
    if (total_co2_kg === 0) alertes.push("Empreinte carbone à 0. Données insuffisantes.");
    if (!site.nb_employes) alertes.push("Manque le nombre d'employés pour calculer le ratio.");

    return {
        kpis: {
            total_co2_kg,
            co2_par_m2: site.surface_m2 ? (total_co2_kg / site.surface_m2) : null,
            co2_par_employe: site.nb_employes ? (total_co2_kg / site.nb_employes) : null
        },
        repartition: {
            construction_kg,
            exploitation_kg,
            pct_construction: total_co2_kg ? (construction_kg / total_co2_kg * 100) : 0,
            pct_exploitation: total_co2_kg ? (exploitation_kg / total_co2_kg * 100) : 0
        },
        alertes
    };
}
```
