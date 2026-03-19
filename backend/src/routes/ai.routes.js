const express = require('express');
const router = express.Router();
const { explainDashboard } = require('../controllers/ai.controller');

// POST /api/ai/explain-dashboard
// Explique les données du dashboard avec l'IA
router.post('/explain-dashboard', explainDashboard);

module.exports = router;
