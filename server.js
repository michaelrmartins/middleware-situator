// Server configuration file

const dotenv = require('dotenv');
dotenv.config();

server = require('./app');

console.log("Server is starting...");
console.log( "===================" );
console.log( "Data from .env file:" );

const server_ipaddress = process.env.SERVER_IP_ADDRESS || '0.0.0.0';
const server_port = process.env.SERVER_PORT || 3000;

server.listen(server_port, server_ipaddress, () => { console.log(`Server running at http://${server_ipaddress}:${server_port}/`); });