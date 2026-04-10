// Routes for the application - index.js

const express = require('express')
const router = express.Router();

// Importing the routes from the 'routes' directory
const personRoutes = require('./person-route');
// const systemRoutes = require('./systemRoutes.v1');

/**
 * @swagger
 * /:
 *   get:
 *     summary: API home
 *     description: Returns a welcome message confirming the API is running
 *     tags: [General]
 *     responses:
 *       200:
 *         description: API is running
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Situator API - Home
 */
router.get('/', (req, res) => {res.status(200).send('Situator API - Home');});

router.use('/api/v1/person', personRoutes);
// router.use('/api/v1', systemRoutes);

module.exports = router;