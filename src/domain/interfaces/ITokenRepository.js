// # Token service interface
class ITokenRepository {
  constructor() {
    if (new.target === ITokenRepository)
      throw new Error('Invalid instantiation of interface')
  }

  async storeToken() { }
  async getToken() { }
  async isValidToken() { }
  async invalidToken() { }
}

module.exports = ITokenRepository;