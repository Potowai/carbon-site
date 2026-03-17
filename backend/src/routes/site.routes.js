const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site.controller');
const authMiddleware = require('../middlewares/auth');

/**
 * @swagger
 * /api/sites:
 *   get:
 *     summary: Récupérer tous les sites
 *     tags: [Sites]
 *     responses:
 *       200:
 *         description: Liste des sites
 */
router.get('/', siteController.getAllSites);

/**
 * @swagger
 * /api/sites:
 *   post:
 *     summary: Créer un nouveau site
 *     tags: [Sites]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Site créé
 */
router.post('/', authMiddleware, siteController.createSite);

/**
 * @swagger
 * /api/sites/estimate:
 *   post:
 *     summary: Estimer l'empreinte carbone d'un site
 *     tags: [Estimation]
 *     responses:
 *       200:
 *         description: Résultat de l'estimation
 */
router.post('/estimate', siteController.estimateCarbon);

/**
 * @swagger
 * /api/sites/global-dashboard:
 *   get:
 *     summary: Récupérer les statistiques globales du dashboard
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Statistiques globales
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
 * /api/sites/id:
 *   get:
 *     summary: Récupérer les informations d'un site
 *     tags: [Sites]
 *     responses:
 *       200:
 *         description: Informations d'un site
 */
router.get('/:id', authMiddleware, siteController.getSiteById);


module.exports = router;
