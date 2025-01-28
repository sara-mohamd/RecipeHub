const TokenService = require('../../application/services/TokenService');

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token)
    return res.status(401).json({ message: 'Access Token is required' });
  try {
    const tokenService = new TokenService();
    const decode = await tokenService.validateToken(token);
    req.user = decode; // Attach decoded token to the request object

    next();
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = authenticate;