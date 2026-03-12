# Project TODO — middleware-situator

## Done

- [x] Initialize project with Node.js / Express 5
- [x] Configure environment variables via dotenv (`.env.example`)
- [x] Set up PostgreSQL connection pool (`src/config/database.js`)
- [x] Apply CORS middleware globally
- [x] Define MVC folder structure (`controllers / models / routes`)
- [x] Implement versioned routing under `/api/v1`
- [x] `GET /api/v1/person/persons` — fetch all persons
- [x] `GET /api/v1/person/persons/active` — fetch active persons
- [x] `GET /api/v1/person/persons/inactive` — fetch inactive persons
- [x] SQL query layer (`src/api/v1/models/query/person-query.js`)
- [x] Model abstraction layer (`src/api/v1/models/model.js`)
- [x] Basic error handling (try/catch + HTTP 500 responses)
- [x] `npm dev` script with nodemon for auto-reload

---

## Pending

### Core features
- [ ] `POST /api/v1/person` — create a person
- [ ] `PUT /api/v1/person/:id` — update a person
- [ ] `DELETE /api/v1/person/:id` — delete a person
- [ ] Implement system routes (scaffolded but commented out in `routes/index.js`)

### Security & middleware
- [ ] Add authentication / authorization middleware (JWT or similar)
- [ ] Restrict CORS `origin` from `*` to allowed domains
- [ ] Add input validation middleware (e.g. Joi or express-validator)
- [ ] Add rate limiting

### Quality & testing
- [ ] Write unit tests for controllers and models
- [ ] Write integration tests for API endpoints
- [ ] Replace placeholder comments in `person-controller.js` with proper logic
- [ ] Add JSDoc comments to all functions

### Observability
- [ ] Add request logging middleware (e.g. Morgan)
- [ ] Improve database error messages / structured logging

### Documentation
- [ ] Write `README.md` (purpose, setup, API reference, env vars)
- [ ] Add API pagination and filtering support
