import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    try {
      const savedUser = localStorage.getItem('gradien_user');
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error('Error loading user from localStorage:', error);
      localStorage.removeItem('gradien_user');
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication - in real app, this would be an API call
      if (email === 'admin@gradienunila.id' && password === 'admin123') {
        const mockUser: User = {
          id: '1',
          name: 'Admin Gradien',
          email: 'admin@gradienunila.id',
          role: 'admin',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
        };
        
        setUser(mockUser);
        localStorage.setItem('gradien_user', JSON.stringify(mockUser));
        return true;
      }
      
      // Mock member login
      if (email === 'member@gradienunila.id' && password === 'member123') {
        const mockUser: User = {
          id: '2',
          name: 'Member Gradien',
          email: 'member@gradienunila.id',
          role: 'member',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
        };
        
        setUser(mockUser);
        localStorage.setItem('gradien_user', JSON.stringify(mockUser));
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock registration
      const mockUser: User = {
        id: Date.now().toString(),
        name,
        email,
        role: 'member',
        avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face`
      };
      
      setUser(mockUser);
      localStorage.setItem('gradien_user', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('gradien_user');
    } catch (error) {
      console.error('Error removing user from localStorage:', error);
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}