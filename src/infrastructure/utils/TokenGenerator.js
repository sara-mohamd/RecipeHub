// # Utility for generating/validating tokens
// This file's job is purely technical: generate and validate tokens.
// It doesn’t contain application-level logic.

const jwt = require('jsonwebtoken');

class TokenGenerator {
  // constructor() {
  //   this.JWT_SECRET = process.env.JWT_SECRET || 'no_secrets';
  // }

  constructor(tokenGenerator) {
    this.tokenGenerator = tokenGenerator;
  }

  generateToken(user) {
    const payload = { id: user.id, role: user.role };
    const expiresIn = user.role === 'admin' ? '7d' : '1d';
    return this.tokenGenerator.generate(payload, expiresIn);
  }
}