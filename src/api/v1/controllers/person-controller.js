// Person Controller

const {
    getAllPersonsModel,
    getActivePersonsModel,
    getInactivePersonsModel,
    getPersonByIdModel,
    getPersonsByNameModel,
    getPersonByDocumentModel,
    getPersonByCardNumberModel,
    getPersonByCardNumberHexModel
} = require('../models/model');

async function getAllPersons(req, res) {
    try {
        // Logic to fetch persons data from database or service
        const persons = await getAllPersonsModel(); // Replace with actual data fetching logic
        res.status(200).json(persons);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch persons data' });
    }
}

// Similar functions for active and inactive persons
async function getActivePersons(req, res) {
    try {
        // Logic to fetch persons data from database or service
        const persons = await getActivePersonsModel(); // Replace with actual data fetching logic
        res.status(200).json(persons);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch persons data' });
    }
}

// Similar functions for active and inactive persons
async function getInactivePersons(req, res) {
    try {
        // Logic to fetch persons data from database or service
        const persons = await getInactivePersonsModel(); // Replace with actual data fetching logic
        res.status(200).json(persons);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to fetch persons data' });
    }
}

async function getPersonById(req, res) {
    try {
        const { id } = req.params;
        const person = await getPersonByIdModel(id);
        if (!person) {
            return res.status(404).json({ error: 'Person not found' });
        }
        res.status(200).json(person);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch person data' });
    }
}

async function getPersonsByName(req, res) {
    try {
        const { name } = req.params;
        const persons = await getPersonsByNameModel(name);
        res.status(200).json(persons);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch persons data' });
    }
}

async function getPersonByDocument(req, res) {
    try {
        const { document } = req.params;
        const person = await getPersonByDocumentModel(document);
        if (!person || person.length === 0) {
            return res.status(404).json({ error: 'Person not found' });
        }
        res.status(200).json(person);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch person data' });
    }
}

async function getPersonByCardNumber(req, res) {
    try {
        const { cardNumber } = req.params;
        const person = await getPersonByCardNumberModel(cardNumber);
        if (!person || person.length === 0) {
            return res.status(404).json({ error: 'Person not found' });
        }
        res.status(200).json(person);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch person data' });
    }
}

async function getPersonByCardNumberHex(req, res) {
    try {
        const { cardNumberHex } = req.params;
        const person = await getPersonByCardNumberHexModel(cardNumberHex);
        if (!person || person.length === 0) {
            return res.status(404).json({ error: 'Person not found' });
        }
        res.status(200).json(person);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch person data' });
    }
}

module.exports = {
    getAllPersons,
    getActivePersons,
    getInactivePersons,
    getPersonById,
    getPersonsByName,
    getPersonByDocument,
    getPersonByCardNumber,
    getPersonByCardNumberHex
};