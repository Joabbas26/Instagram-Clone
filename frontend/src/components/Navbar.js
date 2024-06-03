import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaPlusSquare, FaHeart, FaUser } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import logo from '../assets/instagram-logo.png'

const Navbar = () => {
  return (
    <nav className="bg-white fixed bottom-0 py-5 border border-gray-200 w-full lg:static lg:w-1/6 lg:h-screen lg:flex lg:flex-col lg:justify-start lg:items-center shadow-lg lg:px-4">
      <ul className="flex justify-around lg:flex-col lg:space-y-8 lg:mt-8">
        {/* Navigation Icons */}
        <li className='hidden lg:block'>
          {/* Instagram Logo */}
        <Link to="/">
          <FontAwesomeIcon icon={faInstagram} className='h-10 w-10 lg:h-14 lg:w-14'/>
          {/* <img src={logo} alt="Instagram" className='h-10 w-12 lg:h-20 lg:w-16'/> */}
        </Link>
        </li>
        <li>
          <Link to="/">
            <FaHome className="h-8 w-8 lg:h-11 lg:w-11 text-gray-800" />
          </Link>
        </li>
        <li>
          <Link to="/search">
            <FaSearch className="h-8 w-8 lg:h-11 lg:w-11 text-gray-800" />
          </Link>
        </li>
        <li>
          <Link to="/create-post">
            <FaPlusSquare className="h-8 w-8 lg:h-11 lg:w-11 text-gray-800" />
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <FaHeart className="h-8 w-8 lg:h-11 lg:w-11 text-gray-800" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaUser className="h-8 w-8 lg:h-11 lg:w-11 text-gray-800" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
