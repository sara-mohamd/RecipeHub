const AuthService = require('../../application/services/AuthService');
const GetUserByUsername = require('../../application/usecases/user/getUserByUsername');
const PrismaAuthRepository = require('../../infrastructure/database/repository/PrismaAuthRepository');
const PrismaUserRepository = require('../../infrastructure/database/repository/PrismaUserRepository');

class AuthController {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;

      // The Beauty ♡
      const authRepository = new PrismaAuthRepository();
      const userRepository = new PrismaUserRepository();
      const authService = new AuthService(authRepository, userRepository);

      const response = await authService.login({ username, password });
      res.status(200).json({
        message: `Login successful`,
        response
      });

    } catch (err) {
      next(error);
    }
  }
}

module.exports = AuthController;