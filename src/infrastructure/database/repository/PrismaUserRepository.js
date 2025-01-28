const PasswordHasher = require('../../../domain/utils/PasswordHasher');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class PrismaUserRepository {
  async loginUser() { }

  async registeUser(userData) {
    return await prisma.user.create({
      data: {
        username: userData.username,
        email: userData.email,
        password: await PasswordHasher.hashPassword(userData.password)
      }
    })
  }

  async getUserByUsername(username) { return await prisma.user.findUnique({ where: { username } }); }
  // (update) : delete according to autherization !!
  async deleteUser(username) { return await prisma.user.delete({ where: { username } }); }
}


module.exports = PrismaUserRepository;