const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Middleware Situator API',
            version: '1.0.0',
            description: 'RESTful API for Situator - Person management and access control',
        },
        servers: [
            {
                url: '/',
                description: 'Current server',
            },
        ],
        components: {
            schemas: {
                Person: {
                    type: 'object',
                    properties: {
                        Id: { type: 'integer', description: 'Unique identifier' },
                        AccountId: { type: 'integer', description: 'Account identifier' },
                        Name: { type: 'string', description: 'Full name' },
                        Cpf: { type: 'string', description: 'CPF document number' },
                        Document: { type: 'string', description: 'Document number' },
                        PersonImage: { type: 'string', description: 'Base64 encoded image' },
                        PersonType: { type: 'integer', description: 'Person type identifier' },
                        Active: { type: 'boolean', description: 'Whether the person is active' },
                        CreatedBy: { type: 'string', description: 'Creator identifier' },
                        CreatedDate: { type: 'string', format: 'date-time', description: 'Creation timestamp' },
                        ModifiedDate: { type: 'string', format: 'date-time', description: 'Last modification timestamp' },
                        LastAccessId: { type: 'integer', description: 'Last access transaction ID' },
                        Department: { type: 'string', description: 'Department name' },
                        Profile: { type: 'string', description: 'Person profile name' },
                        CardNumber: { type: 'integer', description: 'Access card number' },
                        CardNumberHex: { type: 'string', description: 'Access card number in hexadecimal' },
                    },
                },
                Error: {
                    type: 'object',
                    properties: {
                        error: { type: 'string', description: 'Error message' },
                    },
                },
            },
        },
    },
    apis: ['./src/api/v1/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
