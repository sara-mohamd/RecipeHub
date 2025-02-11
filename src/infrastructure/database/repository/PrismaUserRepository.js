const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class PrismaUserRepository {

  async loginUser(email, password) {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  }

  async registerUser(userD) {
    return await prisma.user.create({
      data: {
        username: userD.username,
        password: userD.password
      }
    })
  }

  async getUserByUsername(username) { return await prisma.user.findUnique({ where: { username } }); }
}


module.exports = PrismaUserRepository;