const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
    try {
        const uri = process.env.VITE_MONGODB_URI;
        console.log('MongoDB URI:', uri); 
        if (!uri) {
            throw new Error("MongoDB URI is not defined in environment variables");
        }
        await mongoose.connect(uri); 
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
