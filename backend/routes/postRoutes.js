const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const Post = require('../models/Post');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
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

  router.post(
    '/',
    [
      auth,
      [
        check('caption', 'Caption is required').not().isEmpty(),
        check('image', 'Image is required').not().isEmpty(),
      ],
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { caption } = req.body;
      if (!req.files) {
        return res.status(400).json({ msg: 'No file uploaded' });
      }
  
      const file = req.files.image;
      const filePath = path.join(__dirname, '../uploads/', file.name);
  
      try {
        // Move file to uploads directory
        file.mv(filePath, async (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
  
          // Save post to the database
          const newPost = new Post({
            caption,
            image: file.name,
            user: req.user.id,
          });
  
          const post = await newPost.save();
          res.json(post);
        });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

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
  
router.post('/', auth, createPost);
router.get('/', auth, getPosts);
router.put('/like/:id', auth, likePost);
router.post('/comment/:id', auth, commentPost);

module.exports = router;
