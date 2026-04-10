// List Persons data Route

const express = require('express');
const router = express.Router();
const personController = require('../controllers/person-controller');

/**
 * @swagger
 * tags:
 *   - name: Person
 *     description: Person management and lookup endpoints
 *   - name: General
 *     description: General API endpoints
 */

/**
 * @swagger
 * /api/v1/person:
 *   get:
 *     summary: Test person route
 *     tags: [Person]
 *     responses:
 *       200:
 *         description: Route is working
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Person route is working!
 */
router.get('/', (req, res) => {res.status(200).send('Person route is working!');});

/**
 * @swagger
 * /api/v1/person/persons:
 *   get:
 *     summary: Get all persons
 *     description: Returns up to 1000 persons sorted by name
 *     tags: [Person]
 *     responses:
 *       200:
 *         description: List of persons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/persons', personController.getAllPersons);

/**
 * @swagger
 * /api/v1/person/persons/active:
 *   get:
 *     summary: Get all active persons
 *     description: Returns only persons with Active = true
 *     tags: [Person]
 *     responses:
 *       200:
 *         description: List of active persons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/persons/active', personController.getActivePersons);

/**
 * @swagger
 * /api/v1/person/persons/inactive:
 *   get:
 *     summary: Get all inactive persons
 *     description: Returns only persons with Active = false
 *     tags: [Person]
 *     responses:
 *       200:
 *         description: List of inactive persons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/persons/inactive', personController.getInactivePersons);

/**
 * @swagger
 * /api/v1/person/id/{id}:
 *   get:
 *     summary: Get person by ID
 *     tags: [Person]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Person ID
 *     responses:
 *       200:
 *         description: Person data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       404:
 *         description: Person not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/id/:id', personController.getPersonById);

/**
 * @swagger
 * /api/v1/person/document/{document}:
 *   get:
 *     summary: Get person by document number
 *     tags: [Person]
 *     parameters:
 *       - in: path
 *         name: document
 *         required: true
 *         schema:
 *           type: string
 *         description: Document number
 *     responses:
 *       200:
 *         description: Person data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       404:
 *         description: Person not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/document/:document', personController.getPersonByDocument);

/**
 * @swagger
 * /api/v1/person/name/{name}:
 *   get:
 *     summary: Search persons by name
 *     description: Case-insensitive partial name search using ILIKE
 *     tags: [Person]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Name or partial name to search
 *     responses:
 *       200:
 *         description: List of matching persons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/name/:name', personController.getPersonsByName);

/**
 * @swagger
 * /api/v1/person/card/{cardNumber}:
 *   get:
 *     summary: Get person by access card number
 *     tags: [Person]
 *     parameters:
 *       - in: path
 *         name: cardNumber
 *         required: true
 *         schema:
 *           type: integer
 *         description: Access card number (decimal)
 *     responses:
 *       200:
 *         description: Person data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       404:
 *         description: Person not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/card/:cardNumber', personController.getPersonByCardNumber);

/**
 * @swagger
 * /api/v1/person/card/hex/{cardNumberHex}:
 *   get:
 *     summary: Get person by access card number (hexadecimal)
 *     tags: [Person]
 *     parameters:
 *       - in: path
 *         name: cardNumberHex
 *         required: true
 *         schema:
 *           type: string
 *         description: Access card number in hexadecimal format
 *     responses:
 *       200:
 *         description: Person data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       404:
 *         description: Person not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/card/hex/:cardNumberHex', personController.getPersonByCardNumberHex);

module.exports = router;