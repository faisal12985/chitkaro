import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { AuthState, User } from '../types';

// Check if we're in production mode
const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
const useFirebase = import.meta.env.VITE_FIREBASE_API_KEY;

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

// Mock users for development
const mockUsers = [
  {
    id: '1',
    username: 'john_doe',
    email: 'john@example.com',
    password: 'password123',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=3b82f6&color=fff',
  },
  {
    id: '2',
    username: 'jane_smith',
    email: 'jane@example.com',
    password: 'mypassword',
    avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=ef4444&color=fff',
  },
  {
    id: '3',
    username: 'demo_user',
    email: 'demo@example.com',
    password: 'demo123',
    avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=10b981&color=fff',
  },
];

// Production API functions
const apiLogin = async (email: string, password: string): Promise<User> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Login failed');
  }

  const { user, token } = await response.json();
  localStorage.setItem('token', token);
  return user;
};

const apiSignup = async (username: string, email: string, password: string): Promise<User> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Signup failed');
  }

  const { user, token } = await response.json();
  localStorage.setItem('token', token);
  return user;
};

// Mock functions for development
const mockLogin = async (email: string, password: string): Promise<User> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const mockUser = mockUsers.find(user => user.email === email);
  
  if (!mockUser) {
    throw new Error('User not found');
  }
  
  if (mockUser.password !== password) {
    throw new Error('Invalid password');
  }
  
  const user: User = {
    id: mockUser.id,
    username: mockUser.username,
    email: mockUser.email,
    isOnline: true,
    avatar: mockUser.avatar,
  };
  
  return user;
};

const mockSignup = async (username: string, email: string, password: string): Promise<User> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const existingUser = mockUsers.find(user => user.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }
  
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }
  
  const newUser: User = {
    id: Date.now().toString(),
    username,
    email,
    isOnline: true,
    avatar: `https://ui-avatars.com/api/?name=${username}&background=8b5cf6&color=fff`,
  };
  
  return newUser;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (email: string, password: string) => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      let user: User;
      
      if (useFirebase) {
        // Use Firebase auth (import and use firebaseSignIn from './firebase/auth')
        // const { firebaseSignIn } = await import('../firebase/auth');
        // user = await firebaseSignIn(email, password);
        throw new Error('Firebase auth not available - auth.ts was removed');
      } else if (isProduction && import.meta.env.VITE_API_URL) {
        // Use custom backend API
        user = await apiLogin(email, password);
      } else {
        // Use mock auth for development
        user = await mockLogin(email, password);
      }
      
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
      let user: User;
      
      if (useFirebase) {
        // Use Firebase auth
        // const { firebaseSignUp } = await import('../firebase/auth');
        // user = await firebaseSignUp(username, email, password);
        throw new Error('Firebase auth not available - auth.ts was removed');
      } else if (isProduction && import.meta.env.VITE_API_URL) {
        // Use custom backend API
        user = await apiSignup(username, email, password);
      } else {
        // Use mock auth for development
        user = await mockSignup(username, email, password);
      }
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
      throw error;
    }
  };

  const logout = async () => {
    if (useFirebase) {
      // const { firebaseSignOut } = await import('../firebase/auth');
      // await firebaseSignOut();
      throw new Error('Firebase auth not available - auth.ts was removed');
    } else if (isProduction && import.meta.env.VITE_API_URL) {
      // Call logout API
      const token = localStorage.getItem('token');
      if (token) {
        await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
      }
    }
    
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
    localStorage.removeItem('token');
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
