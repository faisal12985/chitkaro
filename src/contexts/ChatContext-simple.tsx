import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
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
  participants: User[];
  lastMessage?: Message;
}

interface ChatContextType {
  chats: Chat[];
  activeChat: Chat | null;
  messages: { [chatId: string]: Message[] };
  setActiveChat: (chat: Chat) => void;
  sendMessage: (content: string, receiverId: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Mock data
const mockUsers: User[] = [
  { id: '2', username: 'Alice', email: 'alice@example.com' },
  { id: '3', username: 'Bob', email: 'bob@example.com' },
  { id: '4', username: 'Charlie', email: 'charlie@example.com' },
];

export function ChatProvider({ children, currentUser }: { children: ReactNode; currentUser: User }) {
  const [activeChat, setActiveChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<{ [chatId: string]: Message[] }>({});

  // Create initial chats with mock users
  const chats: Chat[] = mockUsers.map(user => ({
    id: `chat-${currentUser.id}-${user.id}`,
    participants: [currentUser, user],
  }));

  const sendMessage = (content: string, receiverId: string) => {
    if (!activeChat) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      senderId: currentUser.id,
      receiverId,
      content,
      timestamp: new Date(),
      isRead: false,
    };

    setMessages(prev => ({
      ...prev,
      [activeChat.id]: [...(prev[activeChat.id] || []), newMessage]
    }));

    // Simulate receiving a reply after 2 seconds
    setTimeout(() => {
      const replyMessage: Message = {
        id: `msg-${Date.now()}-reply`,
        senderId: receiverId,
        receiverId: currentUser.id,
        content: `Thanks for your message: "${content}"`,
        timestamp: new Date(),
        isRead: false,
      };

      setMessages(prev => ({
        ...prev,
        [activeChat.id]: [...(prev[activeChat.id] || []), replyMessage]
      }));
    }, 2000);
  };

  return (
    <ChatContext.Provider value={{
      chats,
      activeChat,
      messages,
      setActiveChat,
      sendMessage,
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
