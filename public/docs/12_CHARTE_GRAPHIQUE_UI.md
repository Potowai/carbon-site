# 🎨 Charte Graphique & UI/UX — CarbonSite

> **Hackathon #26** — Design System pour la PWA Angular
>
> **Concept** : Alliance du BTP (Brut, Solide, Noir profond) et de l'Écologie (Vivant, Lumineux, Vert fluo).

---

## 1. Logo Officiel

![CarbonSite Logo](C:\Users\LPTMA\.gemini\antigravity\brain\f2d98cb7-af1d-415c-a086-62ecdbf99183\carbonsite_logo_1773671134975.png)

> *Ce logo doit être utilisé pour le `manifest.json` de la PWA (format 512x512) et dans la barre de navigation.*

---

## 2. Couleurs Principales (Thème Tailwind CSS)

Le design est conçu nativement en **Dark Mode**. Le fond est extrêmement sombre pour faire ressortir les éléments de données en vert éclatant (GreenTech).

| Nom métier | HEX | Classe Tailwind suggérée | Usage |
|---|---|---|---|
| **Fond Principal** | `#0B0F19` | `bg-slate-950` | Le fond d'écran de toute l'application. |
| **Fond Cartes/Panels**| `#1E293B` | `bg-slate-800` | L'arrière-plan des formulaires (Stepper) et des graphiques. |
| **Vert Primaire** | `#10B981` | `text-emerald-500` / `bg-emerald-500` | Call to action principaux, scores positifs, logo. |
| **Vert Fluo (Accent)** | `#34D399` | `text-emerald-400` | Effets de hover, éléments actifs dans le stepper, KPIs clés. |
| **Texte Principal** | `#F8FAFC` | `text-slate-50` | Titres (H1, H2), texte important. |
| **Texte Secondaire**| `#94A3B8` | `text-slate-400` | Labels des formulaires, textes explicatifs, unités (m², t). |

### 🛠️ Configuration `tailwind.config.js`

Pour intégrer ces couleurs instantanément dans Angular :

```javascript
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'carbon-bg': '#0B0F19',
        'carbon-surface': '#1E293B',
        'carbon-primary': '#10B981',
        'carbon-accent': '#34D399',
      }
    },
  },
  plugins: [],
}
```

---

## 3. Typographie

Pour un rendu "Technologie & Données" très propre, nous utiliserons la police sans-serif **Inter**.

- **Police principale :** `Inter` (import depuis Google Fonts).
- **Titres (Dashboard, Nom du site) :** Font-weight `Bold (700)` ou `ExtraBold (800)`, couleur `text-slate-50`.
- **Chiffres KPIs (ex: 3 993) :** Font-weight `Black (900)`, très gros (`text-5xl`), couleur `text-emerald-400`.
- **Corps de texte :** Font-weight `Regular (400)`, couleur `text-slate-400`.

*Importation Google Fonts dans `styles.scss` :*
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
body { font-family: 'Inter', sans-serif; background-color: #0B0F19; color: #F8FAFC; }
```

---

## 4. Composants UI Clés

### A. Le Stepper (Ajout de site)

L'UI du stepper doit être très rassurante.

1.  **Général** ── 2. Infra ── 3. Énergie
- Étape active : Boule `bg-emerald-500`, texte `text-slate-50`.
- Étape à venir : Boule `bg-slate-700`, texte `text-slate-500`.
- Ligne de connexion : `border-slate-700`.

### B. Les Cartes de KPIs (Dashboard)

Les données doivent "sauter aux yeux".

- **Style de la carte :** `bg-carbon-surface rounded-xl p-6 border border-slate-700 shadow-lg`.
- **Label (ex: "Empreinte Totale") :** `text-sm uppercase tracking-wider text-slate-400 font-medium`.
- **Valeur (ex: "3 993 tCO₂e") :** `text-4xl font-black text-carbon-accent mt-2`.

### C. Le Formulaire (Inputs)

Sur fond sombre, les inputs nécessitent un design spécifique :

- **État normal :** `bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-2`.
- **État "Focus" :** `ring-2 ring-emerald-500 border-transparent outline-none`.
- **Bouton Primaire ("Suivant", "Calculer") :** `bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-2 rounded-lg transition-colors`.

---

## 5. Couleurs des Graphiques (Répartition Carbone)

Pour que les graphiques soient lisibles et restent dans le thème sombre (Chart.js / ng2-charts) :

| Donnée | HEX (Remplissage) | Consigne |
|---|---|---|
| **Béton** | `#64748B` (Gris) | Représente la roche, la fondation. |
| **Acier** | `#3B82F6` (Bleu) | Constaste avec le fond noir. |
| **Verre** | `#06B6D4` (Cyan) | Évoque la transparence. |
| **Bois** | `#10B981` (Vert) | Reprend la couleur primaire de l'app. |
| **Exploitation (Énergie)** | `#F59E0B` (Ambre) | Couleur électrique pour trancher. |
