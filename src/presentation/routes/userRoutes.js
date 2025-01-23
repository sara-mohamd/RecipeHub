const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();
router.post('/register', UserController.register);
router.get('/get', UserController.getUserByUsername);
router.delete('/delete', UserController.deleteUser)
module.exports = router;