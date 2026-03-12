// Person Controller

const { getAllPersonsModel, getActivePersonsModel, getInactivePersonsModel } = require('../models/model');

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

module.exports = {
    getAllPersons,
    getActivePersons,
    getInactivePersons
};