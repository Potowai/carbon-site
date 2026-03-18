require('dotenv').config();
const app = require('./src/app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`✅ Serveur CarbonSite Pro lancé sur http://localhost:${port}`);
  console.log(`📖 Documentation Swagger disponible sur http://localhost:${port}/api-docs`);
});
