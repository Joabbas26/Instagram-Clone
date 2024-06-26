import React from 'react';
import { useAuth } from '../context/AuthContext.js';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const {logout} = useAuth();
  const navigate = useNavigate();

  // Dummy data for profile
  const user = {
    username: 'your_username',
    fullname: 'Your Name',
    profilePic: 'https://via.placeholder.com/150',
    posts: 34,
    followers: 123,
    following: 456,
    bio: 'This is your bio.',
    postsData: [
      { id: 1, imageUrl: 'https://via.placeholder.com/300', likes: 10, comments: 2 },
      { id: 2, imageUrl: 'https://via.placeholder.com/300', likes: 5, comments: 1 },
      // Add more post data as needed
    ]
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  return (
    <div className="max-w-4xl mx-auto mt-6 bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={user.profilePic}
          alt={user.username}
          className="w-20 h-20 rounded-full border-2 border-gray-300"
        />
        <div>
          <div className="text-xl font-bold">{user.username}</div>
          <div className="text-gray-500">{user.fullname}</div>
        </div>
      </div>
      <div className="flex justify-around mb-4">
        <div>
          <span className="font-bold">{user.posts}</span> posts
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {user.postsData.map((post) => (
          <div key={post.id} className="relative">
            <img src={post.imageUrl} alt={`Post ${post.id}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <div className="text-white">
                <span className="mr-4">❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
