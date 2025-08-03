import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { AuthState, User } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_FAILURE' }
  | { type: 'LOGOUT' }
  | { type: 'SET_USER'; payload: User };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
}

// Mock user database - replace with actual backend API
const mockUsers = [
  {
    id: '1',
    username: 'john_doe',
    email: 'john@example.com',
    password: 'password123', // In real app, this would be hashed
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff',
  },
  {
    id: '2',
    username: 'jane_smith',
    email: 'jane@example.com',
    password: 'mypassword', // In real app, this would be hashed
    avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=ef4444&color=fff',
  },
  {
    id: '3',
    username: 'demo_user',
    email: 'demo@example.com',
    password: 'demo123', // In real app, this would be hashed
    avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=10b981&color=fff',
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (email: string, password: string) => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Find user in mock database
      const mockUser = mockUsers.find(user => user.email === email);
      
      if (!mockUser) {
        dispatch({ type: 'LOGIN_FAILURE' });
        throw new Error('User not found');
      }
      
      // Validate password
      if (mockUser.password !== password) {
        dispatch({ type: 'LOGIN_FAILURE' });
        throw new Error('Invalid password');
      }
      
      // Create user object without password
      const user: User = {
        id: mockUser.id,
        username: mockUser.username,
        email: mockUser.email,
        isOnline: true,
        avatar: mockUser.avatar,
      };
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
      throw error;
    }
  };

  const signup = async (username: string, email: string, password: string) => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      const existingUser = mockUsers.find(user => user.email === email);
      if (existingUser) {
        dispatch({ type: 'LOGIN_FAILURE' });
        throw new Error('User already exists');
      }
      
      // Validate input
      if (password.length < 6) {
        dispatch({ type: 'LOGIN_FAILURE' });
        throw new Error('Password must be at least 6 characters');
      }
      
      // In a real app, you would send this to your backend
      // For demo purposes, we'll just create a temporary user
      const newUser: User = {
        id: Date.now().toString(),
        username,
        email,
        isOnline: true,
        avatar: `https://ui-avatars.com/api/?name=${username}&background=8b5cf6&color=fff`,
      };
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: newUser });
      localStorage.setItem('user', JSON.stringify(newUser));
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
      throw error;
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
  };

  // Check for existing user on mount
  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        dispatch({ type: 'SET_USER', payload: user });
      } catch (error) {
        localStorage.removeItem('user');
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
