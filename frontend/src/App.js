import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Profile from './pages/Profile.js';
import Search from './pages/Search.js';
import CreatePost from './pages/CreatePost.js';
import Notifications from './pages/Notifications.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 flex h-screen w-full">
        <Navbar className="w-1/5"/>
          <Routes className="w-4/5">
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
