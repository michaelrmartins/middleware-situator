// List Persons data Route

const express = require('express');
const router = express.Router();
const personController = require('../controllers/person-controller');

// Root route for testing
router.get('/', (req, res) => {res.status(200).send('Person route is working!');});

// Route to get person data by ID
// router.get('/id/:id', personController.getPersonById);
// router.get('/document/:document', personController.getPersonByDocument);

// Route to get all persons data
router.get('/persons', personController.getAllPersons);
router.get('/persons/active', personController.getActivePersons);
router.get('/persons/inactive', personController.getInactivePersons);

module.exports = router;