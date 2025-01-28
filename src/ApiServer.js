const express = require('express');
const UserRoutes = require('./presentation/routes/userRoutes');
const AuthRoutes = require('./presentation/routes/auth');

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
    this.app.use('', AuthRoutes)
  }

  start(port) {
    this.app.listen(port, () => {
      console.log(`server running on http://localhost:${port}`);
    })
  }
}

module.exports = ApiServer;