// Routes for the application - index.js

const express = require('express')
const router = express.Router();
// const path = require('path');   


// Importing the routes from the 'routes' directory
const personRoutes = require('./person-route');
// const systemRoutes = require('./systemRoutes.v1');

router.get('/', (req, res) => {res.status(200).send('Situator API - Home');});

router.use('/api/v1/person', personRoutes);
// router.use('/api/v1', systemRoutes); 

module.exports = router;