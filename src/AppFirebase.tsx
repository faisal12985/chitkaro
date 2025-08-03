import { FirebaseAuthProvider, useFirebaseAuth } from './contexts/FirebaseAuthContext';
import { FirebaseChatProvider } from './contexts/FirebaseChatContext';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { ChatLayout } from './components/ChatLayout';
import { useState } from 'react';

function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
    <Login onToggleMode={() => setIsLogin(false)} />
  ) : (
    <Signup onToggleMode={() => setIsLogin(true)} />
  );
}

function AppContent() {
  const { isAuthenticated, isLoading } = useFirebaseAuth();

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
    return <AuthScreen />;
  }

  return (
    <FirebaseChatProvider>
      <ChatLayout />
    </FirebaseChatProvider>
  );
}

function App() {
  return (
    <FirebaseAuthProvider>
      <AppContent />
    </FirebaseAuthProvider>
  );
}

export default App;
