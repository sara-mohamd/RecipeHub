const IUserRepository = require('../../../domain/interfaces/IUserRepository');
const PrismaUserRepository = require('../../../infrastructure/database/repository/PrismaUserRepository');
const userRepository = new PrismaUserRepository();
class RegisteUser {
  constructor(userRepository) {
    if (userRepository instanceof IUserRepository)
      throw new Error(`Invalid instantiate`);

    this.userRepository = userRepository;
  }

  async execute(userData) {
    if (!userData.username || !userData.password || !userData.email)
      throw new Error('Username, email, and password are required');

    if (await userRepository.getUserByUsername(userData.username)) {
      throw new Error(`This User already exists`);
    }

    const user = userRepository.registeUser(userData);
    return user;
  }
}

module.exports = RegisteUser;