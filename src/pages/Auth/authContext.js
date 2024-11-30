import React, { createContext, useState, useContext } from 'react';

// Create the Auth Context
const AuthContext = createContext();

// Provide Auth Context to the App
export function AuthProvider({ children }) {
  const [users, setUsers] = useState([]); // Store registered users
  const [currentUser, setCurrentUser] = useState(null); // Track the logged-in user

  // Simulate user registration
  const register = (user) => {
    const existingUser = users.find((u) => u.email === user.email);
    if (existingUser) {
      throw new Error('Email already registered.');
    }
    setUsers([...users, user]);
  };

  // Simulate user login
  const login = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Invalid email or password.');
    }
    // setIsLoggedIn(logged)
    setCurrentUser(user);
  };
  
  // Logout user
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, register, login , logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to access Auth Context
export function useAuth() {
  return useContext(AuthContext);
}
