const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAuthUser } = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', auth, getAuthUser);

module.exports = router;
