class ITokenService {
  constructor() {
    if (new.target === ITokenService)
      throw new Error('ITokenService is an interface and cannot be instantiated.');
  }

  async generateAccessToken(user) { }
  async generateRefreshToken(user) { }
  async validateToken(token) { }
  async refreshAccessToken(refreshToken) { }
  async invalidateToken(token) { }
}

module.exports = ITokenService;