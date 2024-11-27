import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const userData = localStorage.getItem('user') || '{}';
  const [user, setUser] = useState(JSON.parse(userData));
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { token })
        .then(response => {
          login(response.data);
        })
        .catch(error => {
          console.error(error);
          logout();
        });
    }
  }, [token]);

  const login = (data) => {
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem('token', token);
    const userData = JSON.stringify(data.user);
    localStorage.setItem('user', userData);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
