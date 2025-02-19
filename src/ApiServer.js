const express = require('express');
const AuthRoutes = require('./presentation/routes/router');
const errorHandler = require('./presentation/middleware/errorHandler')
const morgan = require('morgan')

class ApiServer {
  constructor() {
    this.app = express();
    this.configureMiddleware();
    this.setupRoutes();
  }

  configureMiddleware() {
    this.app.use(express.json());
  }

  setupRoutes() {
    this.app.use(morgan('dev'))
    this.app.use('', AuthRoutes);
    this.app.use(errorHandler);
  }

  start(port) {
    this.app.listen(port, () => {
      console.log(`server running on http://localhost:${port}`);
    })
  }
}

module.exports = ApiServer;