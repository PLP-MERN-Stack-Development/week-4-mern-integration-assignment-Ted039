import { createContext, useState, useEffect } from 'react';
import { authService } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(authService.getCurrentUser());

  const login = async (credentials) => {
    const data = await authService.login(credentials);
    setUser(authService.getCurrentUser());
    return data;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  useEffect(() => {
    setUser(authService.getCurrentUser());
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
