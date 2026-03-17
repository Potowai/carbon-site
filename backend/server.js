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
      description: 'API de gestion de l\'empreinte carbone pour les chantiers BTP',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
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
    timestamp: new Date() 
  });
});

// Error Handling (doit être après les routes)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`✅ Serveur CarbonSite Pro lancé sur http://localhost:${port}`);
  console.log(`📖 Documentation Swagger disponible sur http://localhost:${port}/api-docs`);
});
