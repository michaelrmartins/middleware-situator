const {executeQuery} = require('../../../utils/execute-query');

const { selectAllPersonsQuery,
        selectAllPersonsByNameQuery,
        selectAllActivePersonsQuery,
        selectAllInactivePersonsQuery,
        selectPersonDatabyIdQuery,
        selectPersonDatabyDocumentQuery,
        selectPersonDatabyCardNumberQuery,
        selectPersonDatabyCardNumberHexQuery } = require('./query/person-query');

async function getPersonByIdModel(id) {
    const rows = await executeQuery(selectPersonDatabyIdQuery, [id]);
    return rows[0];
}

async function getAllPersonsModel() {
    return executeQuery(selectAllPersonsQuery);
}

async function getActivePersonsModel() {
return executeQuery(selectAllActivePersonsQuery);
}

async function getInactivePersonsModel() {
 return executeQuery(selectAllInactivePersonsQuery);
}

async function getPersonsByNameModel(name) {
    return executeQuery(selectAllPersonsByNameQuery, [`${name}%`]);
}

async function getPersonByDocumentModel(document) {
    return executeQuery(selectPersonDatabyDocumentQuery, [document]);
}

async function getPersonByCardNumberModel(cardNumber) {
    return executeQuery(selectPersonDatabyCardNumberQuery, [cardNumber]);
}

async function getPersonByCardNumberHexModel(cardNumberHex) {
    return executeQuery(selectPersonDatabyCardNumberHexQuery, [cardNumberHex]);
}

module.exports = {
    getPersonByIdModel,
    getAllPersonsModel,
    getActivePersonsModel,
    getInactivePersonsModel,
    getPersonsByNameModel,
    getPersonByDocumentModel,
    getPersonByCardNumberModel,
    getPersonByCardNumberHexModel
};