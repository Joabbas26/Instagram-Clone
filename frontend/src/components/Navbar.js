import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaPlusSquare, FaHeart, FaUser } from 'react-icons/fa';
import logo from '../assets/instagram-logo.png'

const Navbar = () => {
  return (
    <nav className="bg-gray-100 shadow-md h-screen">
      {/* Instagram Logo */}
      <Link to="/" className="my-8 flex flex-col items-center py-8 px-4">
          <img src={logo} alt="Instagram" className='h-12'/>
        </Link>
        
        <div className="flex flex-col items-center py-8 px-4 content-center">
        
        {/* Navigation Icons */}
        <div className="flex flex-col space-y-8 text-gray-800">
          <Link to="/">
            <FaHome className="h-8 w-8" />
          </Link>
          <Link to="/search">
            <FaSearch className="h-8 w-8" />
          </Link>
          <Link to="/create-post">
            <FaPlusSquare className="h-8 w-8" />
          </Link>
          <Link to="/notifications">
            <FaHeart className="h-8 w-8" />
          </Link>
          <Link to="/profile">
            <FaUser className="h-8 w-8" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
