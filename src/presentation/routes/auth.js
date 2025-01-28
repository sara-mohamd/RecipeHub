const epress = require('express');
const AuthController = require('../controllers/AuthController');
const errorHandler = require('../middleware/errorHandler');

const router = epress.Router();
router.post('/login', AuthController.login);

// Protected routes (authentication required)
// router.get('/profile', authenticate, async (req, res) => {
//   res.status(200).json({
//     message: 'Welcome to your profile!',
//     user: req.user, // This will contain the decoded token data
//   });
// });


module.exports = router;