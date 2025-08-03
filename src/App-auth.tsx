import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext-simple';
import { ChatProvider } from './contexts/ChatContext-simple';
import ChatInterface from './components/ChatInterface';

function AuthWrapper() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isAuthenticated, isLoading, login, signup, logout, user } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">ChitChat</h1>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">
              {isLoginMode ? 'Login' : 'Sign Up'}
            </h2>
            <LoginSignupForm 
              isLoginMode={isLoginMode} 
              onToggleMode={() => setIsLoginMode(!isLoginMode)}
              login={login}
              signup={signup}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <ChatProvider currentUser={user!}>
      <ChatInterface />
    </ChatProvider>
  );
}

function LoginSignupForm({ isLoginMode, onToggleMode, login, signup }: {
  isLoginMode: boolean;
  onToggleMode: () => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoginMode) {
      await login(email, password);
    } else {
      await signup(username, email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!isLoginMode && (
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded-lg"
          required
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border rounded-lg"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 border rounded-lg"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
      >
        {isLoginMode ? 'Login' : 'Sign Up'}
      </button>
      <p className="mt-4 text-sm text-gray-600">
        {isLoginMode ? "Don't have an account? " : "Already have an account? "}
        <span 
          onClick={onToggleMode}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          {isLoginMode ? 'Sign up' : 'Login'}
        </span>
      </p>
    </form>
  );
}

function App() {
  return (
    <AuthProvider>
      <AuthWrapper />
    </AuthProvider>
  );
}

export default App;
