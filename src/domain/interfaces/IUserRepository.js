// # User repository interface
class IUserRepository {
  constructor() {
    if (new.target === IUserRepository)
      throw new Error(`Invalid instantiate interface.`)
  }
  async login() { }
  async registeUser(userData) { }
  async getUserByUsername(username) { }
  async deleteUser(username) { }
}

module.exports = IUserRepository;