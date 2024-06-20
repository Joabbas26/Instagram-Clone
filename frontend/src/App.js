import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Profile from './pages/Profile.js';
import Search from './pages/Search.js';
import CreatePost from './pages/CreatePost.js';
import Notifications from './pages/Notifications.js';
import NotFoundPage from './components/NotFoundPage.js';
import { AuthProvider, useAuth } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import './App.css';

function App() {
  const {isAuthenticated} = useAuth();
  
  return (
    <AuthProvider>
    <Router>
      <div className="bg-gray-100 lg:flex lg:flex-row min-h-screen">
          {isAuthenticated && <Navbar className="w-full md:w-1/5 lg:w-full" />}
        <div className={isAuthenticated ? "flex-1 lg:w-4/5 lg:overflow-x-hidden" : "w-full"}>
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path='/notFound' element={<NotFoundPage/>}/>
          </Routes>
        </div>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
