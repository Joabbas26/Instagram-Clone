const Post = require('../models/Post');

// Create a new post
const createPost = async (req, res) => {
  const { caption } = req.body;
  const imageUrl = `/uploads/${req.file.filename}`;

  try {
  const newPost = new Post({ caption, imageUrl, user: req.user.id });
  await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Error creating the post' });
  }
};

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('user', ['username']);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
};

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.likes.some(like => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: 'Post already liked' });
    }

    post.likes.unshift({ user: req.user.id });
    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const commentPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const user = await User.findById(req.user.id).select('-password');

    const newComment = {
      text: req.body.text,
      user: req.user.id,
      username: user.username,
    };

    post.comments.unshift(newComment);
    await post.save();
    res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
}
};

// Update a post
const updatePost = async (req, res) => {
  const { id } = req.params;
  const { caption } = req.body;

  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    post.caption = caption;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error updating the post' });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    await post.remove();
    res.status(200).json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the post' });
  }
};

module.exports = {
createPost,
getPosts,
likePost,
commentPost,
updatePost, 
deletePost
};
