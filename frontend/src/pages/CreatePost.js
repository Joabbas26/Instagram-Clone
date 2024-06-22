import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext.js';

const CreatePost = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const { isAuthenticated } = useContext(useAuth);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('image', image);

    try {
      const res = await axios.post('/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-auth-token': localStorage.getItem('token'),
        },
      });
      console.log(res.data);  
      } catch (err) {
        console.error(err);
      }
      // Clear form after submission
      setCaption('');
      setImage(null);
      setPreview(null);
  };

  if (!isAuthenticated) return <div>Please log in to create a post</div>;

  return (
    <div className="max-w-2xl mx-auto mt-6 bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Create a new post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="caption">
            Caption
          </label>
          <textarea
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Write a caption..."
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="image">
            Upload Image
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        {preview && (
          <div className="mb-4">
            <img src={preview} alt="Image Preview" className="w-full h-auto rounded-lg" />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
