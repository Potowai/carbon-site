const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config();

const siteRoutes = require('./routes/site.routes');
const configRoutes = require('./routes/config.routes');
const errorHandler = require('./middlewares/error');

const app = express();
const port = process.env.PORT || 3000;

// Configuration Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CarbonSite Pro API',
      version: '1.0.0',
      description:
        "API de gestion de l'empreinte carbone et d'estimation pour les chantiers BTP. Plateforme complète pour calculer l'impact environnemental selon RE2020 et optimiser les choix de matériaux.",
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
          description: "JWT token pour l'authentification. Format: Bearer {token}",
        },
      },
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: 'Serveur de développement',
      },
      {
        url: process.env.PUBLIC_API_URL || 'https://carbon-site-back.netlify.app',
        description: 'Serveur de production',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// CORS Configuration
const corsOptions = {
  origin: [
    'http://localhost:4200',      // Frontend dev
    'http://127.0.0.1:4200',      // Frontend dev (alternative)
    'https://carbon-site.onrender.com', // Frontend production
    'http://localhost:3000'       // Allow requests to self
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middlewares techniques
app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(compression());
app.use(express.json());

// Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/config', configRoutes);
app.use('/api/sites', siteRoutes);

// Route de santé
app.get('/health', async (_req, res) => {
  const supabase = require('./config/supabase');
  let dbStatus = 'UNKNOWN';

  try {
    const { error } = await supabase.from('sites').select('id').limit(1);
    dbStatus = error ? 'ERROR' : 'CONNECTED';
  } catch (_e) {
    dbStatus = 'DISCONNECTED';
  }

  res.json({
    status: 'OK',
    uptime: process.uptime(),
    database: dbStatus,
    timestamp: new Date(),
    version: '1.0.0',
  });
});

// Error Handling (doit être après les routes)
app.use(errorHandler);

module.exports = app;

