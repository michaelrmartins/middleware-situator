// return all persons

const selectAllPersonsQuery = `
    select "Id", "AccountId", 
    "Name", "Cpf", "Document", 
    "PersonImage", "PersonType", 
    "Active", "CreatedBy", 
    "CreatedDate", "ModifiedDate", 
    "LastAccessId", "Department"  
    from "Person" p;`;

const selectAllActivePersonsQuery = `
    select "Id", "AccountId", 
    "Name", "Cpf", "Document", 
    "PersonImage", "PersonType", 
    "Active", "CreatedBy", 
    "CreatedDate", "ModifiedDate", 
    "LastAccessId", "Department"  
    from "Person" p where "Active" = true;`;

const selectAllInactivePersonsQuery = `
    select "Id", "AccountId", 
    "Name", "Cpf", "Document", 
    "PersonImage", "PersonType", 
    "Active", "CreatedBy", 
    "CreatedDate", "ModifiedDate", 
    "LastAccessId", "Department"  
    from "Person" p where "Active" = false;`;

module.exports = {
    selectAllPersonsQuery,
    selectAllActivePersonsQuery,
    selectAllInactivePersonsQuery
};