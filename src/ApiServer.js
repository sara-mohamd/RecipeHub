const express = require('express');
const UserRoutes = require('./presentation/routes/userRoutes');

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
    this.app.use('', UserRoutes);
  }

  start(port) {
    this.app.listen(port, () => {
      console.log(`server running on http://localhost:${port}`);
    })
  }
}

module.exports = ApiServer;