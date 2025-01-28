// Utility for password hashing
const bcrypt = require('bcrypt')

class PasswordHasher {
  static async hashPassword(password) {
    if (!password) {
      throw new Error('Password is required');
    }

    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  static async comparePassword(password, hash) {
    if (!password || !hash)
      throw new Error('Password and hash are required');

    return bcrypt.compare(password, hash);
  }
}

module.exports = PasswordHasher;