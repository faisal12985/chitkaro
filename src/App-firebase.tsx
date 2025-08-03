import { useState } from 'react';
import { FirebaseAuthProvider, useFirebaseAuth } from './contexts/FirebaseAuthContext';
import { FirebaseChatProvider, useFirebaseChat } from './contexts/FirebaseChatContext';

function ChatInterface() {
  const { user, logout } = useFirebaseAuth();
  const { chats, activeChat, messages, setActiveChat, sendMessage } = useFirebaseChat();
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    sendMessage(newMessage);
    setNewMessage('');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/3 bg-white border-r">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Chats</h2>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">Hi, {user?.username}!</span>
              <button
                onClick={logout}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto">
          {chats.length > 0 ? (
            chats.map(chat => (
              <div
                key={chat.id}
                onClick={() => setActiveChat(chat)}
                className={`p-4 cursor-pointer border-b hover:bg-gray-50 ${
                  activeChat?.id === chat.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                }`}
              >
                <div className="font-medium">{chat.otherUser.username}</div>
                <div className="text-sm text-gray-500">{chat.otherUser.email}</div>
                <div className="flex items-center mt-1">
                  <div className={`w-2 h-2 rounded-full mr-2 ${
                    chat.otherUser.isOnline ? 'bg-green-500' : 'bg-gray-400'
                  }`}></div>
                  <span className="text-xs text-gray-500">
                    {chat.otherUser.isOnline ? 'Online' : 'Offline'}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">
              <p>No other users found.</p>
              <p className="text-sm mt-2">Ask someone to sign up to start chatting!</p>
            </div>
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {activeChat ? (
          <>
            {/* Chat Header */}
            <div className="bg-white p-4 border-b">
              <h3 className="text-lg font-semibold">{activeChat.otherUser.username}</h3>
              <div className="flex items-center mt-1">
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  activeChat.otherUser.isOnline ? 'bg-green-500' : 'bg-gray-400'
                }`}></div>
                <span className="text-sm text-gray-500">
                  {activeChat.otherUser.isOnline ? 'Online' : 'Offline'}
                </span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length > 0 ? (
                messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderId === user?.id ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.senderId === user?.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      <p>{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.senderId === user?.id ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 mt-8">
                  <p>No messages yet. Start the conversation!</p>
                </div>
              )}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="bg-white p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <h3 className="text-lg font-medium mb-2">🔥 Real-time Chat with Firebase!</h3>
              <p>Select a user from the sidebar to start messaging.</p>
              <p className="text-sm mt-2">All messages are stored in Firebase Firestore.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AuthWrapper() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isAuthenticated, isLoading, login, signup, user } = useFirebaseAuth();

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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">🔥 ChitChat - Real Firebase Chat</h1>
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
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>Real Firebase Integration!</strong><br/>
                Create an account and chat with real users in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <FirebaseChatProvider>
      <ChatInterface />
    </FirebaseChatProvider>
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      if (isLoginMode) {
        await login(email, password);
      } else {
        await signup(username, email, password);
      }
    } catch (error: any) {
      setError(error.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
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
        disabled={isLoading}
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        {isLoading ? 'Please wait...' : (isLoginMode ? 'Login' : 'Sign Up')}
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
    <FirebaseAuthProvider>
      <AuthWrapper />
    </FirebaseAuthProvider>
  );
}

export default App;
