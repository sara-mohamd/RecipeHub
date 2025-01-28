const IAuthRepository = require('../../../domain/interfaces/IAuthRepository');
const IUserRepository = require('../../../domain/interfaces/IUserRepository');
const PasswordHasher = require('../../../infrastructure/utils/PasswordHasher')
const TokenService = require('../../services/TokenService');

class LoginUser {
  constructor(authRepository, userRepository) {
    if (authRepository instanceof IAuthRepository)
      throw new Error('Invalid user repository');
    if (userRepository instanceof IUserRepository)
      throw new Error('Invalid user repository');

    this.authRepository = authRepository;
    this.userRepository = userRepository;
    this.tokenService = new TokenService();
  }

  async execute(userLoginData) {
    const { username, password } = userLoginData;

    // check inputs data're completed
    if (!username || !password)
      throw new Error('Username and Password are required');

    // Validate  both username and password
    const user = this.userRepository.getUserByUsername(username);
    if ((!user) || !(await PasswordHasher.comparePassword(password, user.password)))
      throw new Error(`Invalid Username or password`)

    // Generate Tokens
    const accessToken = await this.tokenService.generateAccessToken(user);
    const refreshToken = await this.tokenService.generateRefreshToken(user);

    // Return token and user details
    // !((this method must be upgraded to route the user to home page))
    return {
      // After Fix DTO gonna call instead of this formula
      user: {
        username: user.username,
        role: user.role
      },
      tokens: {
        accessToken,
        refreshToken
      }
    };
  }
}

module.exports = LoginUser;