# Middleware Situator

RESTful API middleware for the Situator platform. Built with Express 5 and PostgreSQL.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express 5
- **Database**: PostgreSQL (pg driver)
- **Dev Tools**: nodemon

## Project Structure

```
middleware-situator/
├── app.js                        # Express app configuration
├── server.js                     # Server entry point
├── .env.example                  # Environment variables template
└── src/
    ├── api/v1/
    │   ├── controllers/
    │   │   └── person-controller.js
    │   ├── models/
    │   │   ├── model.js
    │   │   └── query/
    │   │       └── person-query.js
    │   └── routes/
    │       ├── index.js
    │       └── person-route.js
    ├── config/
    │   └── database.js           # PostgreSQL connection pool
    └── utils/
        └── execute-query.js      # Query execution utility
```

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file based on `.env.example`:
```
SERVER_IP_ADDRESS=localhost
SERVER_PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database
DB_USER=your_user
DB_PASSWORD=your_password
```
4. Start the server:
```bash
# Development (with hot reload)
npm run dev

# Production
npm start
```

## API Endpoints

Base URL: `/api/v1`

### Person

| Method | Endpoint                          | Description                          |
|--------|-----------------------------------|--------------------------------------|
| GET    | `/api/v1/person/persons`          | Get all persons (limit 1000)         |
| GET    | `/api/v1/person/persons/active`   | Get all active persons               |
| GET    | `/api/v1/person/persons/inactive` | Get all inactive persons             |
| GET    | `/api/v1/person/id/:id`           | Get a person by ID                   |
| GET    | `/api/v1/person/document/:document` | Get a person by document number    |
| GET    | `/api/v1/person/name/:name`       | Search persons by name (case-insensitive) |
| GET    | `/api/v1/person/card/:cardNumber` | Get a person by access card number   |
| GET    | `/api/v1/person/card/hex/:cardNumberHex` | Get a person by card number (hex) |

### Response Format

**Success (200)**:
```json
{
  "Id": 1,
  "AccountId": 100,
  "Name": "John Doe",
  "Cpf": "123.456.789-00",
  "Document": "ABC123",
  "PersonImage": "...",
  "PersonType": 1,
  "Active": true,
  "CreatedBy": "admin",
  "CreatedDate": "2024-01-01T00:00:00.000Z",
  "ModifiedDate": "2024-01-01T00:00:00.000Z",
  "LastAccessId": 50,
  "Department": "Engineering",
  "Profile": "Default",
  "CardNumber": 12345,
  "CardNumberHex": "3039"
}
```

**Not Found (404)**:
```json
{
  "error": "Person not found"
}
```

**Server Error (500)**:
```json
{
  "error": "Failed to fetch person data"
}
```

## Architecture

The project follows a layered architecture:

- **Routes** - Define HTTP endpoints and map them to controllers
- **Controllers** - Handle request/response logic and call model functions
- **Models** - Execute database queries and return results
- **Queries** - Store raw SQL queries separated from business logic
- **Config** - Database connection pool management
- **Utils** - Shared utilities (query execution wrapper)

## License

ISC
