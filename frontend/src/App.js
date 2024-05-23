import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Profile from './pages/Profile.js';
import CreatePost from './pages/CreatePost.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 flex h-screen">
        <Navbar className="bg-gray-100"/>
        <div className='w-full'>
          <Routes className="w-4/5 ml-auto p-6">
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
