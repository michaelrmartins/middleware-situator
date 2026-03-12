// Core APP File

const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./src/api/v1/routes/index');
const path = require('path');

// Enable JSON parsing
app.use(express.json());

app.use(cors(
    {
        origin: '*', credentials: true
    }
));

console.log("Middleware Situator is starting...");

// route for test 
// app.get('/', (req, res) => {
//     res.status(200).send('Welcome to the Middleware Situator!!!');
// });

app.use(routes);

module.exports = app;