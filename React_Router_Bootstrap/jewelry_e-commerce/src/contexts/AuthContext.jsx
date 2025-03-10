import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const user = { id: 1, name: 'User', email };
    localStorage.setItem('user', JSON.stringify(user));
    setCurrentUser(user);
    return Promise.resolve(user);
  };

  const register = (name, email, password) => {
    // This would normally be an API call
    const user = { id: Date.now(), name, email };
    localStorage.setItem('user', JSON.stringify(user));
    setCurrentUser(user);
    return Promise.resolve(user);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};