import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaPlusSquare, FaHeart, FaUser } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/instagram-logo.png'

const Navbar = () => {
  return (
    <nav className="bg-white fixed bottom-0 py-5 border border-gray-200 w-full flex justify-around lg:static lg:w-1/5 lg:h-screen lg:p-10 lg:flex lg:flex-col lg:justify-start lg:items-center shadow-lg">
      <ul className="flex justify-around w-full items-center lg:flex-col lg:space-y-8 lg:mt-8 lg:mx-6">
        {/* Navigation Icons */}
        <li className='flex-col items-center text-gray-800 hidden lg:block'>
          {/* Instagram Logo */}
        <Link to="/">
          {/* <FontAwesomeIcon icon={faInstagram} className='h-10 w-10 lg:h-14 lg:w-148'/> */}
          <img src={logo} alt="Instagram" className='h-10 w-12 lg:h-20 lg:w-20'/>
        </Link>
        </li>
        <li className="flex flex-col items-center text-gray-800">
          <Link to="/">
            <FaHome className="h-8 w-8 lg:h-10 lg:w-10 text-gray-800" />
          </Link>
        </li>
        <li className="flex flex-col items-center text-gray-800">
          <Link to="/search">
            <FaSearch className="h-7 w-7 lg:h-10 lg:w-10 text-gray-800" />
          </Link>
        </li>
        <li className="flex flex-col items-center text-gray-800">
          <Link to="/create-post">
            <FaPlusSquare className="h-10 w-10 lg:h-10 lg:w-10 text-gray-800" />
          </Link>
        </li>
        <li className="flex flex-col items-center text-gray-800">
          <Link to="/notifications">
            <FaHeart className="h-7 w-7 lg:h-10 lg:w-10 text-gray-800" />
          </Link>
        </li>
        <li className="flex flex-col items-center text-gray-800">
          <Link to="/profile">
            <FaUser className="h-7 w-7 lg:h-10 lg:w-10 text-gray-800" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
