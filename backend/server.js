const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config();

const siteRoutes = require('./src/routes/site.routes');
const errorHandler = require('./src/middlewares/error');

const app = express();
const port = process.env.PORT || 3000;

// Configuration Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CarbonSite Pro API',
      version: '1.0.0',
      description: 'API de gestion de l\'empreinte carbone et d\'estimation pour les chantiers BTP. Plateforme complète pour calculer l\'impact environnemental selon RE2020 et optimiser les choix de matériaux.',
      contact: {
        name: 'Support CarbonSite',
        email: 'support@carbonsite.io',
        url: 'https://carbonsite.io',
      },
      license: {
        name: 'Proprietary',
        url: 'https://carbonsite.io/license',
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT token pour l\'authentification. Format: Bearer {token}',
        },
      },
      schemas: {
        Site: {
          type: 'object',
          required: ['nom', 'surface_m2'],
          properties: {
            id: {
              type: 'string',
              format: 'uuid',
              description: 'Identifiant unique du site',
            },
            nom: {
              type: 'string',
              description: 'Nom du chantier ou du site',
              example: 'Chantier Tour Business Paris',
            },
            surface_m2: {
              type: 'number',
              description: 'Surface totale en mètres carrés',
              example: 45000,
            },
            nb_employes: {
              type: 'integer',
              description: 'Nombre d\'employés sur le site',
              example: 350,
            },
            parking_sous_sol: {
              type: 'integer',
              description: 'Places de parking en sous-sol',
              example: 450,
            },
            parking_sous_dalle: {
              type: 'integer',
              description: 'Places de parking sous dalle',
              example: 200,
            },
            parking_aerien: {
              type: 'integer',
              description: 'Places de parking aériennes',
              example: 100,
            },
            user_id: {
              type: 'string',
              format: 'uuid',
              description: 'ID de l\'utilisateur propriétaire du site',
            },
            created_at: {
              type: 'string',
              format: 'date-time',
              description: 'Date de création du site',
            },
          },
        },
        DashboardStats: {
          type: 'object',
          properties: {
            total_footprint: {
              type: 'number',
              description: 'Empreinte carbone totale en tCO2e',
              example: 333095,
            },
            carbon_intensity: {
              type: 'number',
              description: 'Intensité carbone en kg CO2e par m²',
              example: 89.5,
            },
            global_score: {
              type: 'integer',
              description: 'Score global 0-100',
              example: 85,
            },
            active_sites: {
              type: 'integer',
              description: 'Nombre de sites actifs',
              example: 8,
            },
            avg_surface: {
              type: 'number',
              description: 'Surface moyenne en m²',
              example: 88125,
            },
            material_distribution: {
              type: 'object',
              properties: {
                data: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      name: {
                        type: 'string',
                        example: 'Béton',
                      },
                      value: {
                        type: 'number',
                        example: 66336,
                      },
                      percentage: {
                        type: 'integer',
                        example: 50,
                      },
                    },
                  },
                },
              },
            },
            trend_data: {
              type: 'array',
              description: 'Données de tendance mensuelle over 12 months',
              items: {
                type: 'object',
                properties: {
                  month: {
                    type: 'string',
                    format: 'YYYY-MM',
                    example: '2025-05',
                  },
                  value: {
                    type: 'number',
                    example: 125500,
                  },
                },
              },
            },
            last_updated: {
              type: 'string',
              format: 'date-time',
              description: 'Dernière mise à jour des données',
            },
          },
        },
        CarbonEstimation: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
            },
            estimation: {
              type: 'object',
              properties: {
                total_kg: {
                  type: 'number',
                  description: 'Total en kilogrammes CO2e',
                },
                total_tons: {
                  type: 'number',
                  description: 'Total en tonnes CO2e',
                },
                breakdown: {
                  type: 'object',
                  properties: {
                    concrete: {
                      type: 'number',
                      description: 'Émissions béton',
                    },
                    steel: {
                      type: 'number',
                      description: 'Émissions acier',
                    },
                    wood: {
                      type: 'number',
                      description: 'Émissions bois (négatif = stockage)',
                    },
                    energy: {
                      type: 'number',
                      description: 'Émissions énergie',
                    },
                  },
                },
              },
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false,
            },
            message: {
              type: 'string',
              description: 'Message d\'erreur',
            },
            statusCode: {
              type: 'integer',
              example: 400,
            },
          },
        },
      },
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: 'Serveur de développement',
      },
      {
        url: 'https://api.carbonsite.io',
        description: 'Serveur de production',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Chemins vers les annotations swagger
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Middlewares techniques
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(compression());
app.use(express.json());

// Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/sites', siteRoutes);

// Route de santé
app.get('/health', async (req, res) => {
  const supabase = require('./src/config/supabase');
  let dbStatus = 'UNKNOWN';
  
  try {
    const { error } = await supabase.from('sites').select('id').limit(1);
    dbStatus = error ? 'ERROR' : 'CONNECTED';
  } catch (e) {
    dbStatus = 'DISCONNECTED';
  }

  res.json({ 
    status: 'OK', 
    uptime: process.uptime(),
    database: dbStatus,
    timestamp: new Date(),
    version: '1.0.0'
  });
});

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Vérifier l'état du serveur
 *     description: Endpoint de santé pour vérifier la disponibilité de l'API et la connexion à la base de données
 *     tags: [System]
 *     operationId: healthCheck
 *     responses:
 *       200:
 *         description: Serveur opérationnel
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "OK"
 *                 uptime:
 *                   type: number
 *                   description: Uptime du serveur en secondes
 *                   example: 1234.56
 *                 database:
 *                   type: string
 *                   enum: ["CONNECTED", "DISCONNECTED", "ERROR"]
 *                   example: "CONNECTED"
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 version:
 *                   type: string
 *                   example: "1.0.0"
 */

// Error Handling (doit être après les routes)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`✅ Serveur CarbonSite Pro lancé sur http://localhost:${port}`);
  console.log(`📖 Documentation Swagger disponible sur http://localhost:${port}/api-docs`);
});
