const ApiServer = require('./src/ApiServer');
require('dotenv').config();

const server = new ApiServer();
server.start(3000);
