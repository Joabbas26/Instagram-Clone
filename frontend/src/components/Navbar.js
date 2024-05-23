import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaPlusSquare, FaHeart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md h-full z-50">
      <div className="flex flex-col items-center py-4">
        {/* Instagram Logo */}
        <Link to="/" className="mb-8">
          <img src="../assets/instagram-logo.png" alt="Instagram" className="h-8" />
        </Link>

        {/* Navigation Icons */}
        <div className="flex flex-col space-y-8 text-gray-800">
          <Link to="/">
            <FaHome className="h-6 w-6" />
          </Link>
          <Link to="/search">
            <FaSearch className="h-6 w-6" />
          </Link>
          <Link to="/create-post">
            <FaPlusSquare className="h-6 w-6" />
          </Link>
          <Link to="/notifications">
            <FaHeart className="h-6 w-6" />
          </Link>
          <Link to="/profile">
            <FaUser className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
