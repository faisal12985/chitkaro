import { useState, useEffect, useRef } from 'react';
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
  where,
  updateDoc
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCcBIzOTbW0R8vmO_vINpf7UNLqDHY-zOE",
  authDomain: "vibechat-677a6.firebaseapp.com",
  projectId: "vibechat-677a6",
  storageBucket: "vibechat-677a6.firebasestorage.app",
  messagingSenderId: "70333439409",
  appId: "1:70333439409:web:f1096cc50597cd5501f190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

interface User {
  id: string;
  username: string;
  email: string;
  isOnline: boolean;
  lastSeen: Date;
}

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: Date;
  chatId: string;
}

interface Chat {
  id: string;
  participants: string[];
  participantNames: string[];
  lastMessage?: string;
  lastMessageTime?: Date;
  otherUser?: User;
}

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState('');
  const [showUserList, setShowUserList] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const user: User = {
          id: firebaseUser.uid,
          username: firebaseUser.displayName || 'Unknown',
          email: firebaseUser.email || '',
          isOnline: true,
          lastSeen: new Date()
        };
        setCurrentUser(user);
        
        // Update user online status
        await updateDoc(doc(db, 'users', firebaseUser.uid), {
          isOnline: true,
          lastSeen: serverTimestamp()
        });
        
        setError('');
      } else {
        setCurrentUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Listen to all users
  useEffect(() => {
    if (!currentUser) return;

    const q = query(collection(db, 'users'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const usersList: User[] = snapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data(),
          lastSeen: doc.data().lastSeen?.toDate() || new Date()
        } as User))
        .filter(user => user.id !== currentUser.id);
      
      setUsers(usersList);
    });

    return () => unsubscribe();
  }, [currentUser]);

  // Listen to user's chats
  useEffect(() => {
    if (!currentUser) return;

    const q = query(
      collection(db, 'chats'),
      where('participants', 'array-contains', currentUser.id)
    );
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chatsList: Chat[] = snapshot.docs.map(doc => {
        const data = doc.data();
        const otherUserId = data.participants.find((id: string) => id !== currentUser.id);
        const otherUser = users.find(u => u.id === otherUserId);
        
        return {
          id: doc.id,
          participants: data.participants,
          participantNames: data.participantNames,
          lastMessage: data.lastMessage,
          lastMessageTime: data.lastMessageTime?.toDate(),
          otherUser
        };
      });
      
      setChats(chatsList);
    });

    return () => unsubscribe();
  }, [currentUser, users]);

  // Listen to messages in active chat
  useEffect(() => {
    if (!activeChat) return;

    const q = query(
      collection(db, 'messages'),
      where('chatId', '==', activeChat.id),
      orderBy('timestamp', 'asc')
    );
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesList: Message[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date()
      } as Message));
      
      setMessages(messagesList);
    });

    return () => unsubscribe();
  }, [activeChat]);

  const handleSignUp = async (username: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      setError('');
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: username });
      
      // Save user to Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        username,
        email,
        isOnline: true,
        lastSeen: serverTimestamp(),
        createdAt: serverTimestamp()
      });
      
    } catch (error: any) {
      setError('Signup failed: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError('');
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError('Login failed: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      if (currentUser) {
        await updateDoc(doc(db, 'users', currentUser.id), {
          isOnline: false,
          lastSeen: serverTimestamp()
        });
      }
      await signOut(auth);
    } catch (error: any) {
      setError('Logout failed: ' + error.message);
    }
  };

  const startChat = async (otherUser: User) => {
    if (!currentUser) return;
    
    // Check if chat already exists
    const existingChat = chats.find(chat => 
      chat.participants.includes(otherUser.id)
    );
    
    if (existingChat) {
      setActiveChat(existingChat);
      setShowUserList(false);
      return;
    }
    
    // Create new chat
    try {
      const chatRef = await addDoc(collection(db, 'chats'), {
        participants: [currentUser.id, otherUser.id],
        participantNames: [currentUser.username, otherUser.username],
        createdAt: serverTimestamp(),
        lastMessage: '',
        lastMessageTime: serverTimestamp()
      });
      
      const newChat: Chat = {
        id: chatRef.id,
        participants: [currentUser.id, otherUser.id],
        participantNames: [currentUser.username, otherUser.username],
        otherUser
      };
      
      setActiveChat(newChat);
      setShowUserList(false);
    } catch (error: any) {
      setError('Failed to start chat: ' + error.message);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeChat || !currentUser) return;

    try {
      // Add message to Firestore
      await addDoc(collection(db, 'messages'), {
        chatId: activeChat.id,
        senderId: currentUser.id,
        senderName: currentUser.username,
        content: newMessage.trim(),
        timestamp: serverTimestamp()
      });
      
      // Update chat's last message
      await updateDoc(doc(db, 'chats', activeChat.id), {
        lastMessage: newMessage.trim(),
        lastMessageTime: serverTimestamp()
      });
      
      setNewMessage('');
    } catch (error: any) {
      setError('Failed to send message: ' + error.message);
    }
  };

  // Handle typing indicator
  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
    
    if (!isTyping) {
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading VibeChat...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">✨ VibeChat</h1>
          <p className="text-gray-600 mb-8">Real-time chat with Firebase</p>
          
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-6">
              {isLoginMode ? 'Welcome Back!' : 'Join VibeChat'}
            </h2>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <AuthForm 
              isLoginMode={isLoginMode} 
              onToggleMode={() => setIsLoginMode(!isLoginMode)}
              onLogin={handleLogin}
              onSignUp={handleSignUp}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg flex flex-col">
        {/* Header */}
        <div className="p-4 bg-blue-600 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-bold">✨ VibeChat</h1>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <p className="text-sm opacity-75">Hi, {currentUser.username}! (Online)</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="bg-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-800"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Chat/Users Toggle */}
        <div className="flex border-b">
          <button
            onClick={() => setShowUserList(false)}
            className={`flex-1 p-3 text-sm font-medium ${
              !showUserList ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
            }`}
          >
            Chats ({chats.length})
          </button>
          <button
            onClick={() => setShowUserList(true)}
            className={`flex-1 p-3 text-sm font-medium ${
              showUserList ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
            }`}
          >
            Users ({users.length})
          </button>
        </div>

        {/* List Content */}
        <div className="flex-1 overflow-y-auto">
          {showUserList ? (
            // Users List
            <div className="p-2">
              {users.map(user => (
                <div
                  key={user.id}
                  onClick={() => startChat(user)}
                  className="p-3 hover:bg-gray-50 cursor-pointer rounded-lg border-b"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      user.isOnline ? 'bg-green-500' : 'bg-gray-400'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{user.username}</p>
                      <p className="text-sm text-gray-500">
                        {user.isOnline ? 'Online' : `Last seen ${user.lastSeen.toLocaleTimeString()}`}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {users.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p className="mb-2">👥 No other users yet</p>
                  <p className="text-sm">To test chat features:</p>
                  <ol className="text-sm mt-2 space-y-1">
                    <li>1. Open incognito window</li>
                    <li>2. Go to localhost:5174</li>
                    <li>3. Sign up as another user</li>
                    <li>4. Start chatting! 🚀</li>
                  </ol>
                </div>
              )}
            </div>
          ) : (
            // Chats List
            <div className="p-2">
              {chats.map(chat => (
                <div
                  key={chat.id}
                  onClick={() => setActiveChat(chat)}
                  className={`p-3 hover:bg-gray-50 cursor-pointer rounded-lg border-b ${
                    activeChat?.id === chat.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      chat.otherUser?.isOnline ? 'bg-green-500' : 'bg-gray-400'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">
                        {chat.otherUser?.username || 'Unknown User'}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {chat.lastMessage || 'No messages yet'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {chats.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p>No chats yet</p>
                  <p className="text-sm">Click on "Users" to start chatting!</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {activeChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-white shadow-sm border-b">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  activeChat.otherUser?.isOnline ? 'bg-green-500' : 'bg-gray-400'
                }`}></div>
                <div>
                  <h2 className="font-semibold text-gray-900">
                    {activeChat.otherUser?.username || 'Unknown User'}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {activeChat.otherUser?.isOnline ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.senderId === currentUser.id ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.senderId === currentUser.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    <p>{message.content}</p>
                    <p className={`text-xs mt-1 opacity-75`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={handleTyping}
                  placeholder={`Message ${activeChat.otherUser?.username || 'user'}...`}
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
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-4">✨</div>
              <h2 className="text-xl font-semibold mb-2">Welcome to VibeChat!</h2>
              <p>Select a chat from the sidebar or start a new conversation</p>
              <p className="text-sm mt-2">Click on "Users" to see who's online</p>
            </div>
          </div>
        )}
      </div>

      {/* Error Display */}
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg">
          <p>{error}</p>
          <button 
            onClick={() => setError('')}
            className="ml-2 text-sm underline"
          >
            Dismiss
          </button>
        </div>
      )}
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
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="password"
        placeholder="Password (6+ characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
        minLength={6}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-colors"
      >
        {isLoading ? 'Please wait...' : (isLoginMode ? 'Login' : 'Sign Up')}
      </button>
      <p className="mt-4 text-sm text-gray-600 text-center">
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
