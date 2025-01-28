const PasswordHasher = require('../../utils/PasswordHasher');
const UserDTO = require('../../../domain/DTO/userDTO');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class PrismaAuthRepository {
  async loginUser(email, password) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
      return null;


    const isValidPassword = PasswordHasher.comparePassword(password, user.password);
    if (!isValidPassword)
      return null;

    // there's a bug with UserDTO returning an empty object,
    // in code status 201.
    return new UserDTO(user);
  }
}