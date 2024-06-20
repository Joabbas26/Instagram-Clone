const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const multer = require('multer');
const path = require('path');
const { createPost, getPosts, likePost, commentPost } = require('../controllers/postController');
const auth = require('../middleware/authMiddleware');

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage });

  // Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('user', ['username']);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get posts by user
router.get('/user/:userId', async (req, res) => {
  try {
    const posts = await Post.find({ user: req.params.userId }).populate('user', ['username']);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
  
  // Endpoint to handle post creation
  router.post('/', upload.single('image'), async (req, res) => {
    const { caption } = req.body;
    const imageUrl = `/uploads/${req.file.filename}`;
  
    try {
      const newPost = new Post({ caption, imageUrl });
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: 'Error creating the post' });
    }
  });
  
router.post('/', auth, createPost);
router.get('/', auth, getPosts);
router.put('/like/:id', auth, likePost);
router.post('/comment/:id', auth, commentPost);

module.exports = router;
