const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

class PrismaUserRepository {
  async loginUser() { }

  async registeUser(userData) {
    return await prisma.user.create({
      data: {
        username: userData.username,
        email: userData.email,
        password: await bcrypt.hash(userData.password, 10)
      }
    })
  }

  async getUserByUsername(username) { return await prisma.user.findUnique({ where: { username } }); }
  async deleteUser(username) { return await prisma.user.delete({ where: { username } }); }
}


module.exports = PrismaUserRepository;