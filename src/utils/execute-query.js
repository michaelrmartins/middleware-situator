// utils/execute-query.js

const db = require('../config/database');

async function executeQuery(query, params = []) {
    try {
        const result = await db.query(query, params);
        return result.rows;
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
}

module.exports = {
    executeQuery
};