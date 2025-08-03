import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  getDocs,
  serverTimestamp,
  doc,
  getDoc
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { useFirebaseAuth } from './FirebaseAuthContext';

interface User {
  id: string;
  username: string;
  email: string;
  isOnline: boolean;
}

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
}

interface Chat {
  id: string;
  otherUser: User;
  lastMessage?: Message;
}

interface ChatContextType {
  chats: Chat[];
  activeChat: Chat | null;
  messages: Message[];
  allUsers: User[];
  setActiveChat: (chat: Chat) => void;
  sendMessage: (content: string) => void;
  startNewChat: (userId: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function FirebaseChatProvider({ children }: { children: ReactNode }) {
  const { user } = useFirebaseAuth();
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [chats, setChats] = useState<Chat[]>([]);

  // Get all users
  useEffect(() => {
    if (!user) return;

    const fetchUsers = async () => {
      try {
        const usersRef = collection(db, 'users');
        const snapshot = await getDocs(usersRef);
        
        const users: User[] = snapshot.docs
          .filter(doc => doc.id !== user.id) // Exclude current user
          .map(doc => {
            const data = doc.data();
            return {
              id: doc.id,
              username: data.username || 'Unknown',
              email: data.email || '',
              isOnline: data.isOnline || false
            };
          });
        
        setAllUsers(users);
        
        // Create chats for all users
        const userChats: Chat[] = users.map(otherUser => ({
          id: [user.id, otherUser.id].sort().join('-'),
          otherUser
        }));
        
        setChats(userChats);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [user]);

  // Listen to messages for active chat
  useEffect(() => {
    if (!activeChat || !user) {
      setMessages([]);
      return;
    }

    const messagesRef = collection(db, 'messages');
    const q = query(
      messagesRef,
      where('chatId', '==', activeChat.id),
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: Message[] = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          senderId: data.senderId,
          receiverId: data.receiverId,
          content: data.content,
          timestamp: data.timestamp?.toDate() || new Date(),
          isRead: data.isRead || false
        };
      });
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [activeChat, user]);

  const sendMessage = async (content: string) => {
    if (!activeChat || !user || !content.trim()) return;

    try {
      await addDoc(collection(db, 'messages'), {
        chatId: activeChat.id,
        senderId: user.id,
        receiverId: activeChat.otherUser.id,
        content: content.trim(),
        timestamp: serverTimestamp(),
        isRead: false
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const startNewChat = (userId: string) => {
    if (!user) return;
    
    const otherUser = allUsers.find(u => u.id === userId);
    if (otherUser) {
      const chatId = [user.id, userId].sort().join('-');
      const newChat: Chat = {
        id: chatId,
        otherUser
      };
      setActiveChat(newChat);
    }
  };

  return (
    <ChatContext.Provider value={{
      chats,
      activeChat,
      messages,
      allUsers,
      setActiveChat,
      sendMessage,
      startNewChat
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useFirebaseChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useFirebaseChat must be used within a FirebaseChatProvider');
  }
  return context;
}
