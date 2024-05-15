const express = require('express');
const router = express.Router();
const { createPost, getPosts, likePost, commentPost } = require('../controllers/postController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createPost);
router.get('/', auth, getPosts);
router.put('/like/:id', auth, likePost);
router.post('/comment/:id', auth, commentPost);

module.exports = router;
