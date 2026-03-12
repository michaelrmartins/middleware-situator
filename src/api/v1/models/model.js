const db = require('../../../config/database');
const { selectAllPersonsQuery, selectAllActivePersonsQuery, selectAllInactivePersonsQuery } = require('./query/person-query');

// Get all persons model
async function getAllPersonsModel() {
    try {
        const result = await db.query(selectAllPersonsQuery);
        return result.rows;
    } catch (error) {
        console.error('Error fetching persons data:', error);
        throw error;
    }
}

// Get active persons model
async function getActivePersonsModel() {
    try {
        const result = await db.query(selectAllActivePersonsQuery);
        return result.rows;
    } catch (error) {
        console.error('Error fetching active persons data:', error);
        throw error;
    }
}

// Get inactive persons model
async function getInactivePersonsModel() {
    try {
        const result = await db.query(selectAllInactivePersonsQuery);
        return result.rows;
    } catch (error) {
        console.error('Error fetching inactive persons data:', error);
        throw error;
    }
}

module.exports = {
    getAllPersonsModel,
    getActivePersonsModel,
    getInactivePersonsModel
};