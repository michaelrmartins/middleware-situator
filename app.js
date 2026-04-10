// Core APP File

const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/api/v1/swagger');
const app = express();
const routes = require('./src/api/v1/routes/index');

// Enable JSON parsing
app.use(express.json());

app.use(cors(
    {
        origin: '*', credentials: true
    }
));

console.log("Middleware Situator is starting...");

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Middleware Situator API Docs',
}));

app.use(routes);

module.exports = app;