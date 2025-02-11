const bcrypt = require('bcrypt')

const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

const comparePassword = async (password, hash) => {
  if (!password || !hash)
    throw new Error('Password and hash are required');

  return bcrypt.compare(password, hash);
}

module.exports = { comparePassword, hashPassword }