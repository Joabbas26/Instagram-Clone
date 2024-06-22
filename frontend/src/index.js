import React from 'react'
import ReactDOM from 'react-dom/client'
import 'tailwindcss/tailwind.css';
import App from './App.js'
import './index.css'
import { AuthProvider } from './context/AuthContext.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthProvider>,
)
