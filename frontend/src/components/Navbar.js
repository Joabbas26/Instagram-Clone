import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">Instagram Clone</Link>
        <div>
          <Link to="/login" className="text-gray-800 px-3">Login</Link>
          <Link to="/register" className="text-gray-800 px-3">Register</Link>
          <Link to="/profile" className="text-gray-800 px-3">Profile</Link>
          <Link to="/create-post" className="text-gray-800 px-3">Create Post</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
