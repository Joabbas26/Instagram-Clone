const express = require('express');
const router = express.Router();
const { getUser } = require('../controllers/userController');

// Route to check authentication status and get user info
router.get('/', auth, getUser);

module.exports = router;
