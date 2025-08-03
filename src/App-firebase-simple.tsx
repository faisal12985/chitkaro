import { useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot,
  serverTimestamp,
  getDocs
} from 'firebase/firestore';
import { auth, db } from './firebase/config';

interface User {
  id: string;
  username: string;
  email: string;
}

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: Date;
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [allUsers, setAllUsers] = useState<User[]>([]);

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          id: firebaseUser.uid,
          username: firebaseUser.displayName || 'Unknown',
          email: firebaseUser.email || ''
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Listen to messages
  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: Message[] = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          senderId: data.senderId,
          senderName: data.senderName,
          content: data.content,
          timestamp: data.timestamp?.toDate() || new Date()
        };
      });
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [user]);

  // Get all users
  useEffect(() => {
    if (!user) return;

    const fetchUsers = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'users'));
        const users: User[] = snapshot.docs
          .filter(doc => doc.id !== user.id)
          .map(doc => {
            const data = doc.data();
            return {
              id: doc.id,
              username: data.username,
              email: data.email
            };
          });
        setAllUsers(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [user]);

  const handleSignUp = async (username: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: username });
      
      // Save user to Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        username,
        email,
        createdAt: serverTimestamp()
      });
    } catch (error: any) {
      alert('Error: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      alert('Error: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;

    try {
      await addDoc(collection(db, 'messages'), {
        senderId: user.id,
        senderName: user.username,
        content: newMessage.trim(),
        timestamp: serverTimestamp()
      });
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

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

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">🔥 ChitChat - Real Firebase Chat</h1>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">
              {isLoginMode ? 'Login' : 'Sign Up'}
            </h2>
            <AuthForm 
              isLoginMode={isLoginMode} 
              onToggleMode={() => setIsLoginMode(!isLoginMode)}
              onLogin={handleLogin}
              onSignUp={handleSignUp}
              isLoading={isLoading}
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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">🔥 ChitChat</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Hi, {user.username}!</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md h-96 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length > 0 ? (
              messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.senderId === user.id ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.senderId === user.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {message.senderId !== user.id && (
                      <p className="text-xs font-semibold mb-1 opacity-75">
                        {message.senderName}
                      </p>
                    )}
                    <p>{message.content}</p>
                    <p className={`text-xs mt-1 opacity-75`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 mt-8">
                <p>🚀 Welcome to the global chat!</p>
                <p className="text-sm mt-2">Start chatting with everyone here.</p>
              </div>
            )}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="border-t p-4">
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
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Online Users */}
        {allUsers.length > 0 && (
          <div className="mt-4 bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-3">Other Users ({allUsers.length})</h3>
            <div className="flex flex-wrap gap-2">
              {allUsers.map(otherUser => (
                <div
                  key={otherUser.id}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {otherUser.username}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AuthForm({ isLoginMode, onToggleMode, onLogin, onSignUp, isLoading }: {
  isLoginMode: boolean;
  onToggleMode: () => void;
  onLogin: (email: string, password: string) => Promise<void>;
  onSignUp: (username: string, email: string, password: string) => Promise<void>;
  isLoading: boolean;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoginMode) {
      await onLogin(email, password);
    } else {
      await onSignUp(username, email, password);
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

export default App;
