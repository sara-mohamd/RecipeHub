// Configuration for authentication (e.g., JWT secret).

const JWT_SECRET = process.env.JWT_SECRET || 'your-default-jwt-secret';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'your-refresh-secret';

module.exports = { JWT_SECRET, REFRESH_TOKEN_SECRET };
