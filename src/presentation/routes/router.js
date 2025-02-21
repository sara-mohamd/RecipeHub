const express = require('express');
const { createNewUser, signin } = require('../controllers/auth');
const router = express.Router();

/**
 * User
 */
router.post('/register/', createNewUser)
router.post('/login', signin)

/**
 * Recipes
 */
router.post('/recipe/', () => { })
router.get('recipe/:name', () => { })
router.get('/top-rated/', () => { })
router.delete('recipe/:id', () => { })

/**
 * category
*/
router.post('/category', () => { })
router.get('/category/:name', () => { })
router.put('/category/:id', () => { })

/** 
 * Ingredient
*/

module.exports = router
