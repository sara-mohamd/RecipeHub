// # Auth service interface

class IAuthRepository {
  constructor() {
    if (new.target === IAuthRepository)
      throw new Error(`Invalid instantiate interface.`)
  }

  async loginUser() { }
  async forgetPassword() { }
  async invalidateSession(userId) { }
}