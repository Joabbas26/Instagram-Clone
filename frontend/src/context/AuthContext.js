import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from "axios"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/auth', {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
          },
        });
        setUser(res.data);
        setIsAuthenticated(true);
      } catch (err) {
        console.error(err);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const register = async ({ username, email, password }) => {
    try {
      const res = await axios.post('http://localhost:3000/api/users/register', { username, email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Registration error:', err);
      setIsAuthenticated(false);
    }
  };

  const login = async ({ email, password }) => {
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (err) {
      console.error('Login error:', err);
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, register, login, logout, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
