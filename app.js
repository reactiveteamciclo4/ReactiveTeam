require('dotenv').config();
const { config } = require('dotenv');
// require('dotenv').config();
const Server = require('./models/server');
const server= new Server();


server.listen();