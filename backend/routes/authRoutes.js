const express = require('express');
const router = express.Router();
const { register, login, getAuthUser } = require('../controllers/authController');
const { getAuthUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// POST /api/auth/register
router.post('/register', register);

// POST /api/auth/login
router.post('/login', login);

// GET /api/auth
router.get('/', authMiddleware, getAuthUser);

module.exports = router;