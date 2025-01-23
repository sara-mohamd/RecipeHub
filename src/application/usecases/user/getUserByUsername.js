const IUserRepository = require('../../../domain/interfaces/IUserRepository');
const PrismaUserRepository = require('../../../infrastructure/database/repository/PrismaUserRepository');
const UserDTO = require('../../../domain/DTO/userDTO');

const userRepository = new PrismaUserRepository();
class GetUserByUsername {
  constructor(userRepository) {
    if (userRepository instanceof IUserRepository)
      throw new Error(`Invalid instantiate`);

    this.userRepository = userRepository;
  }

  async execute(username) {
    if (!username)
      throw new Error('Username is required');
    const user = userRepository.getUserByUsername(username);
    if (user === undefined)
      throw new Error('User not found');
    // return user;
    return new UserDTO(user);
  }
}

module.exports = GetUserByUsername;
