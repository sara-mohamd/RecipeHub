const express = require('express');
const { createNewUser, signin } = require('../controllers/auth');
const router = express.Router();


router.post('/register/', createNewUser)
router.post('/login', signin)

module.exports = router
