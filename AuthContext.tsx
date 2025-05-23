import React, { createContext, useState, useContext, useEffect } from 'react';
import { User } from '../types';
import { mockUser } from '../data/mockData';


interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateBalance: (amount: number) => void;
  updateTier: (newTier: 'bronze' | 'silver' | 'gold') => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => false,
  register: async () => false,
  logout: () => {},
  updateBalance: () => {},
  updateTier: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('cryptoCasinoUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email && password) {
        const loggedInUser = {
          ...mockUser,
          email,
        };
        setUser(loggedInUser);
        setIsAuthenticated(true);
        localStorage.setItem('cryptoCasinoUser', JSON.stringify(loggedInUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (name && email && password) {
        const newUser = {
          ...mockUser,
          name,
          email,
          balance: 0,
          tier: 'bronze' as const,
        };
        setUser(newUser);
        setIsAuthenticated(true);
        localStorage.setItem('cryptoCasinoUser', JSON.stringify(newUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('cryptoCasinoUser');
  };

  const updateBalance = (amount: number) => {
    if (user) {
      const newBalance = user.balance + amount;
      const newUser = { ...user, balance: newBalance };
      
      // Update tier based on new balance
      if (newBalance >= 500) {
        newUser.tier = 'gold';
      } else if (newBalance >= 100) {
        newUser.tier = 'silver';
      } else if (newBalance >= 10) {
        newUser.tier = 'bronze';
      }

      setUser(newUser);
      localStorage.setItem('cryptoCasinoUser', JSON.stringify(newUser));
    }
  };

  const updateTier = (newTier: 'bronze' | 'silver' | 'gold') => {
    if (user) {
      const updatedUser = { ...user, tier: newTier };
      setUser(updatedUser);
      localStorage.setItem('cryptoCasinoUser', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      login, 
      register, 
      logout,
      updateBalance,
      updateTier
    }}>
      {children}
    </AuthContext.Provider>
  );
};