const express = require('express');
const router = express.Router();
const { createPost, getPosts, likePost, commentPost, updatePost, deletePost } = require('../controllers/postController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createPost);
router.get('/', auth, getPosts);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.put('/:id/like', auth, likePost);
router.post('/comment/:id', auth, commentPost);

module.exports = router;
