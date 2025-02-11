const PrismaUserRepository = require('../../../infrastructure/database/repository/PrismaUserRepository');
const { hashPassword } = require('../../../infrastructure/utils/PasswordHasher')
const { createJWT } = require('../../../infrastructure/utils/TokenGenerator')

class RegisteUser {
  constructor() {
    this.userRepo = new PrismaUserRepository();
  }

  async execute(data) {
    if (!data.username || !data.password)
      throw new Error('Username, and password are required');

    if (await this.userRepo.getUserByUsername(data.username)) {
      throw new Error(`This User already exists`);
    }

    const user = this.userRepo.registerUser({
      username: data.username,
      password: await hashPassword(data.password)
    });

    const token = createJWT(user)
    return token;
  }
}

module.exports = RegisteUser;