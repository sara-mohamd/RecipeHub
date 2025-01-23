const IUserRepository = require('../../../domain/interfaces/IUserRepository');
const PrismaUserRepository = require('../../../infrastructure/database/repository/PrismaUserRepository');
const userRepository = new PrismaUserRepository()
class DeleteUser {
  constructor(userRepository) {
    if (userRepository instanceof IUserRepository)
      throw new Error('Invalid instantiate');
    this.userRepository = userRepository;
  }

  async execute(username) {
    if (!username)
      throw new Error('Username required');

    if (!userRepository.getUserByUsername(username))
      throw new Error('This user does not exist');

    return userRepository.deleteUser(username);
  }
}
module.exports = DeleteUser;