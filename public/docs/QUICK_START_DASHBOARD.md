# 🚀 Guide Rapide - Activer les Graphes du Dashboard

## ⚡ En 3 Étapes (5 minutes)

### 1️⃣ Générer les données de test
```bash
cd backend
node seed_dashboard.js
```
✅ Cree 8 sites réalistes avec emissions carbone

### 2️⃣ Lancer le serveur frontend
```bash
cd frontend
npm start
```
✅ Accessible sur http://localhost:4200

### 3️⃣ Voir les graphes
Naviguer vers `/dashboard` et observer:
- ✅ **Graphe vert**: Évolution des émissions (12 mois)
- ✅ **Graphe pie**: Répartition des matériaux
- ✅ **Légende détaillée**: Béton, Acier, Bois, Autres
- ✅ **4 nouveaux KPI cards**: Surface, Émissions, Update, Tendance

---

## 📊 Données Affichées

- **Total Carbone**: ~22,100 tCO2e
- **Intensité**: ~125 kg/m²
- **Matériaux**: Béton (50%), Acier (30%), Bois (15%), Autres (5%)
- **Sites**: 8 chantiers français réalistes
- **Historique**: 12 mois de tendance

---

## 🔧 Fichiers Modifiés

| Fichier | Changement |
|---------|-----------|
| `backend/src/controllers/site.controller.js` | Génère stats dynamiquement |
| `frontend/src/app/pages/dashboard/dashboard.component.ts` | Fallback + démo data |
| `frontend/src/app/pages/dashboard/dashboard.component.html` | Légende + 4 KPI cards |
| `backend/seed_dashboard.js` | **NOUVEAU** - Données test |

---

## 💡 Comment Fonctionne

```
Sites en Base de Données
        ↓
Backend Calcule:
  ✅ Total Emissions
  ✅ Intensité Carbone  
  ✅ Distribution Matériaux
  ✅ Tendance Mensuelle
        ↓
Frontend Affiche:
  ✅ Graphe Évolution (tCO2e/jour)
  ✅ Graphe Pie (matériaux)
  ✅ Légende avec détails
  ✅ 4 Métriques KPI
```

---

## ❓ FAQ Rapide

**Q: Pourquoi les graphes restent vides?**  
R: Exécutez `node seed_dashboard.js` d'abord.

**Q: Les données changent dynamiquement?**  
R: OUI! Chaque site ajouté via l'app met à jour le dashboard.

**Q: Puis-je modifier les données du seed?**  
R: OUI! Éditez `backend/seed_dashboard.js` avant de l'exécuter.

**Q: C'est ok pour la production?**  
R: OUI! Le fallback garantit que les graphes ne sont jamais vides.

---

## 📚 Documentation Complète

- `DASHBOARD_GRAPHES_GUIDE.md` - Guide détaillé
- `MODIFICATIONS_DASHBOARD.md` - Historique des changements
- Code commenté dans les fichiers modifiés

---

**Vous êtes prêt! 🎉 Les graphes du dashboard afficheront de superbes données.**
