// # Token service interface
class ITokenRepository {
  constructor() {
    if (new.target === ITokenRepository)
      throw new Error('Invalid instantiation of interface')
  }

  async storeToken(userId, token) { }
  async getToken(userId) { }
  async isValidToken(userId, token) { }
  async invalidToken(userId, token) { }
}

module.exports = ITokenRepository;