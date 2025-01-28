const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class PrismaTokenRepository {


  async storeToken(userId, token) {
    await prisma.token.create({
      data: {
        userId,
        token,
        expiresAt: new Date(Date.now() + 1 * 60 * 60 * 1000)
      }
    });
  }

  // To get a token you should have userId,
  // it gonna help to retrieve accessToken related to this user

  async getToken(userId) {
    const tokenRecord = await prisma.token.findFirst({
      where: { userId },
      orderBy: { createAt: 'desc' }
    })

    return tokenRecord ? tokenRecord.token : null;
  }

  // Compare expiration date of Token with current time
  async isValidToken(userId, token) {
    const tokenRecord = prisma.token.findFirst({
      where: { userId, token },
    })
    return tokenRecord && tokenRecord.expiresAt > new Date();
  }
  // delete invalide (expired) token.
  async invalidToken(userId, token) {
    await prisma.token.deleteMany({
      where: { userId, token }
    });
  }
}

module.exports = PrismaTokenRepository;