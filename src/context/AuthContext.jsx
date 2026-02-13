// src/context/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {

    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      localStorage.removeItem("user"); // Remove invalid data to avoid future errors
      return null;
    }

  });


  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };


  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // Also remove token on 
    
  };

  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

};


export const useAuth = () => useContext(AuthContext);
