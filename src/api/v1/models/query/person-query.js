// return all persons

const basePersonQuery = `select 
    person."Id",
    person."AccountId",
    person."Name", 
    person."Cpf",
    person."Document",
    person."PersonImage",
    person."PersonType",
    person."Active",
    person."CreatedBy",
    person."CreatedDate",
    person."ModifiedDate",
    person."LastAccessId",
    person."Department",
    pProfile."Name" as "Profile",
    aCard."CardNumber",
    to_hex(aCard."CardNumber") as "CardNumberHex"
    from 
    "Person" person 
    left join "PersonPin" pPin on Person."Id" = pPin."PersonId" 
    left join "AccessCard" aCard on pPin."AccessCardId" = aCard."Id"
    left join "PersonProfile" pProfile on Person."PersonProfileId" = pProfile."Id"`;

const selectAllPersonsQuery = `
${basePersonQuery}
order by person."Name" asc 
limit 1000
`;

const selectAllPersonsByNameQuery = `
${basePersonQuery}
where person."Name" ilike $1
order by person."Name" asc
limit 1000
`;

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

const selectPersonDatabyIdQuery = `
    ${basePersonQuery}
    where person."Id" = $1
    limit 1`;

const selectPersonDatabyDocumentQuery = `
    ${basePersonQuery}
    where person."Document" = $1
    limit 1`;

    const selectPersonDatabyCardNumberQuery = `
    ${basePersonQuery}
    where aCard."CardNumber" = $1
    limit 1`;
   
    const selectPersonDatabyCardNumberHexQuery = `
    ${basePersonQuery}
    where aCard."CardNumberHex" = $1
    limit 1`;

module.exports = {
    selectAllPersonsQuery,
    selectAllPersonsByNameQuery,
    selectAllActivePersonsQuery,
    selectAllInactivePersonsQuery,
    selectPersonDatabyIdQuery,
    selectPersonDatabyDocumentQuery,
    selectPersonDatabyCardNumberQuery,
    selectPersonDatabyCardNumberHexQuery
};