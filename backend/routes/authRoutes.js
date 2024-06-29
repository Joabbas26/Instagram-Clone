const express = require('express');
const router = express.Router();
const { getUser } = require('../controllers/userController.js');
const auth = require('../middleware/authMiddleware.js');
const User = require('../models/User');

// Route to check authentication status and get user info
router.get('/', auth, getUser);

router.post('/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'Invalid credentials' });
      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
      
      const token = jwt.sign({ id: user._id }, process.env.VITE_JWT_SECRET, { expiresIn: '1d' });
      res.json({ token, userId: user._id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
module.exports = router;
