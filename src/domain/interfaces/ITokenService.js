class ITokenService {
  constructor() {
    if (new.target === ITokenService)
      throw new Error('ITokenService is an interface and cannot be instantiated.');
  }

  async generateAccessToken(userID) { }
  async generateRefreshToken(userID) { }
  async validateAccessToken(token) { }
  async validateRefreshToken(token) { }
  async refreshAccessToken(refreshToken) { }
  async invalidateToken(token) { }
}

module.exports = ITokenService;