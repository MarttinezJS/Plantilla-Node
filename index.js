require('dotenv').config();
const app = require('./app');
const server = require('http').createServer(app);
require('./classes/server').serverRun( server );