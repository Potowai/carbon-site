const express = require('express');
const router = express.Router();
const configController = require('../controllers/config.controller');

/**
 * @swagger
 * /api/config:
 *   get:
 *     summary: Get frontend configuration
 *     description: |
 *       Returns the public configuration needed by the frontend application,
 *       including Supabase URL and public anon key.
 *       This endpoint is publicly accessible and does not require authentication.
 *     tags: [Config]
 *     operationId: getConfig
 *     responses:
 *       200:
 *         description: Configuration retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     supabaseUrl:
 *                       type: string
 *                       description: Supabase project URL
 *                     supabaseKey:
 *                       type: string
 *                       description: Supabase public anon key
 *                     apiUrl:
 *                       type: string
 *                       description: Backend API URL
 *       500:
 *         description: Configuration error (missing environment variables)
 */
router.get('/', configController.getConfig);

module.exports = router;
