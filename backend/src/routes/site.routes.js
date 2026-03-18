const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site.controller');
const authMiddleware = require('../middlewares/auth');

/**
 * @swagger
 * /api/sites:
 *   get:
 *     summary: Récupérer tous les sites
 *     description: |
 *       Récupère la liste de tous les chantiers/sites avec leurs données de base.
 *       Les résultats sont triés par date de création décroissante.
 *     tags: [Sites]
 *     operationId: getAllSites
 *     responses:
 *       200:
 *         description: Liste des sites récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Site'
 *       500:
 *         description: Erreur serveur
 */
router.get('/', siteController.getAllSites);

/**
 * @swagger
 * /api/sites:
 *   post:
 *     summary: Créer un nouveau site
 *     description: |
 *       Crée un nouveau chantier BTP avec les données de base.
 *       Aucune authentification n'est requise (hackathon).
 *     tags: [Sites]
 *     operationId: createSite
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nom
 *               - surface_m2
 *             properties:
 *               nom:
 *                 type: string
 *                 description: Nom du chantier ou site
 *                 example: "Nouveau Projet BTP Paris"
 *               surface_m2:
 *                 type: number
 *                 description: Surface totale en mètres carrés
 *                 example: 5000
 *               nb_employes:
 *                 type: integer
 *                 description: Nombre d'employés sur le site
 *                 example: 50
 *               parking_sous_sol:
 *                 type: integer
 *                 description: Places de parking en sous-sol
 *                 example: 100
 *               parking_sous_dalle:
 *                 type: integer
 *                 description: Places de parking sous dalle
 *                 example: 50
 *               parking_aerien:
 *                 type: integer
 *                 description: Places de parking aériennes
 *                 example: 20
 *     responses:
 *       201:
 *         description: Site créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Site'
 *       400:
 *         description: Données d'entrée invalides ou manquantes
 *       401:
 *         description: Authentification requise ou JWT invalide
 *       500:
 *         description: Erreur serveur
 */
router.post('/', siteController.createSite);

/**
 * @swagger
 * /api/sites/estimate:
 *   post:
 *     summary: Estimer l'empreinte carbone
 *     description: |
 *       Calcule l'estimation de l'empreinte carbone basée sur les volumes de matériaux.
 *       Utilise des facteurs d'émission standardisés selon les données FDES.
 *       
 *       Facteurs utilisés:
 *       - Béton: 200 kg CO2e/m³
 *       - Acier: 2500 kg CO2e/tonne
 *       - Bois: -700 kg CO2e/m³ (stockage carbone)
 *       - Énergie: 0.05 kg CO2e/kWh (mix français)
 *     tags: [Estimation]
 *     operationId: estimateCarbon
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - concreteVolume
 *               - steelWeight
 *             properties:
 *               concreteVolume:
 *                 type: number
 *                 description: Volume de béton en m³
 *                 example: 1000
 *               steelWeight:
 *                 type: number
 *                 description: Poids d'acier en kg
 *                 example: 50000
 *               woodVolume:
 *                 type: number
 *                 description: Volume de bois en m³ (optionnel - crédite le carbone)
 *                 example: 100
 *               energyUsage:
 *                 type: number
 *                 description: Consommation énergétique en kWh (optionnel)
 *                 example: 50000
 *     responses:
 *       200:
 *         description: Estimation calculée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CarbonEstimation'
 *       400:
 *         description: Paramètres invalides ou incomplets
 *       500:
 *         description: Erreur serveur
 */
router.post('/estimate', siteController.estimateCarbon);

/**
 * @swagger
 * /api/sites/global-dashboard:
 *   get:
 *     summary: Récupérer les statistiques globales du dashboard
 *     description: |
 *       Retourne les statistiques agrégées de TOUS les sites :
 *       - Empreinte carbone totale (tCO2e)
 *       - Intensité carbone (kg CO2e/m²)
 *       - Score de performance (0-100)
 *       - Nombre de sites actifs
 *       - Surface moyenne
 *       - Répartition par matériau (Béton, Acier, Bois, Autres)
 *       - Tendance mensuelle sur les 12 derniers mois
 *       
 *       Les émissions sont calculées dynamiquement à partir de :
 *       Surface × facteur d'émission du matériau
 *     tags: [Dashboard]
 *     operationId: getGlobalDashboard
 *     responses:
 *       200:
 *         description: Statistiques globales calculées avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/DashboardStats'
 *       500:
 *         description: Erreur lors du calcul des statistiques
 */
router.get('/global-dashboard', siteController.getGlobalDashboard);

/**
 * @swagger
 * /api/sites/me:
 *   get:
 *     summary: Récupérer tous les sites liés à l'utilisateur connecté
 *     tags: [Sites]
 *     responses:
 *       200:
 *         description: Liste de nos sites
 */
router.get('/me', authMiddleware, siteController.getMySites);

/**
 * @swagger
 * /api/sites/{id}:
 *   get:
 *     summary: Récupérer les informations d'un site spécifique
 *     description: |
 *       Récupère les détails complets d'un site par son ID.
 *       Inclut l'empreinte carbone calculée à partir de la surface.
 *     tags: [Sites]
 *     operationId: getSiteById
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID unique du site (UUID)
 *         schema:
 *           type: string
 *           format: uuid
 *         example: "8d8f6db7-418f-4792-b977-d1bf4f4a0df0"
 *     responses:
 *       200:
 *         description: Détails complètes du site
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Site'
 *       404:
 *         description: Site introuvable
 *       500:
 *         description: Erreur serveur
 */
router.get('/:id', authMiddleware, siteController.getSiteById);

module.exports = router;
