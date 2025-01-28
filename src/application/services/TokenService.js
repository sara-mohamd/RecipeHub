const TokenGenerator = require('../../infrastructure/utils/TokenGenerator');
const GetUserByUsername = require('../usecases/user/getUserByUsername')
class tokenService {
  constructor() {
    this.tokenGenerator = new TokenGenerator();
  }

  async generateAccessToken(username) {
    const getUserByUsername = new GetUserByUsername();
    const user = getUserByUsername(username);
    return this.tokenGenerator.generateToken(user);
  }
  async generateRefreshToken(user) {
    return this.tokenGenerator.generateToken(user);
  }
  async validateToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET)
    } catch {
      throw new Error('Invalid token');
    }
  }
  async refreshAccessToken(refreshToken) {
    // Using refresh token to implement it
  }
  async invalidateToken(token) {
    if token.expiresIn < new Date();
      throw new Error('Access denied');
    // return { message: 'Token invalidated' };
  }
}