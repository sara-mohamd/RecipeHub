const PrismaUserRepository = require('../../../infrastructure/database/repository/PrismaUserRepository');
const { comparePassword } = require('../../../infrastructure/utils/PasswordHasher')
const { createJWT } = require('../../../infrastructure/utils/TokenGenerator')

class LoginUser {
  constructor() {
    this.userRepo = new PrismaUserRepository();
  }

  async execute(userLoginData) {
    const { username, password } = userLoginData;

    // check inputs data're completed
    if (!username || !password)
      throw new Error('Username and Password are required');

    // Validate  both username and password
    const user = this.userRepo.getUserByUsername(username);
    if ((!user) || !(await comparePassword(password, user.password)))
      throw new Error(`Invalid Username or password`)

    return createJWT(user);
  }
}

module.exports = LoginUser;