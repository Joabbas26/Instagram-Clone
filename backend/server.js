const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const multer = require('multer');
const path = require('path');
const authMiddleware = require('./middleware/authMiddleware');
require('dotenv').config();


const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(fileUpload());

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

// Serve static files from the uploads folder
app.use('/uploads', express.static('uploads'));

// Define Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// Endpoint to handle post creation
app.post('/api/posts', upload.single('image'), async (req, res) => {
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
