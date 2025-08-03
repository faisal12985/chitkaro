import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { ChatState, Chat, Message, TypingUser } from '../types';

interface ChatContextType extends ChatState {
  setActiveChat: (chat: Chat) => void;
  sendMessage: (content: string, receiverId: string) => void;
  markAsRead: (chatId: string) => void;
  setTyping: (chatId: string, isTyping: boolean) => void;
  addUserOnline: (userId: string) => void;
  removeUserOnline: (userId: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

type ChatAction =
  | { type: 'SET_CHATS'; payload: Chat[] }
  | { type: 'SET_ACTIVE_CHAT'; payload: Chat }
  | { type: 'ADD_MESSAGE'; payload: { chatId: string; message: Message } }
  | { type: 'MARK_AS_READ'; payload: string }
  | { type: 'SET_TYPING'; payload: { chatId: string; user: TypingUser | null } }
  | { type: 'SET_USER_ONLINE'; payload: string }
  | { type: 'SET_USER_OFFLINE'; payload: string };

const initialState: ChatState = {
  chats: [],
  activeChat: null,
  messages: {},
  typingUsers: {},
  onlineUsers: [],
};

function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case 'SET_CHATS':
      return { ...state, chats: action.payload };
    case 'SET_ACTIVE_CHAT':
      return { ...state, activeChat: action.payload };
    case 'ADD_MESSAGE': {
      const { chatId, message } = action.payload;
      return {
        ...state,
        messages: {
          ...state.messages,
          [chatId]: [...(state.messages[chatId] || []), message],
        },
      };
    }
    case 'MARK_AS_READ': {
      const chatId = action.payload;
      return {
        ...state,
        messages: {
          ...state.messages,
          [chatId]: state.messages[chatId]?.map(msg => ({ ...msg, isRead: true })) || [],
        },
      };
    }
    case 'SET_TYPING': {
      const { chatId, user } = action.payload;
      const currentTypingUsers = state.typingUsers[chatId] || [];
      
      if (user) {
        const filteredUsers = currentTypingUsers.filter(u => u.userId !== user.userId);
        return {
          ...state,
          typingUsers: {
            ...state.typingUsers,
            [chatId]: [...filteredUsers, user],
          },
        };
      } else {
        return {
          ...state,
          typingUsers: {
            ...state.typingUsers,
            [chatId]: [],
          },
        };
      }
    }
    case 'SET_USER_ONLINE':
      return {
        ...state,
        onlineUsers: [...state.onlineUsers.filter(id => id !== action.payload), action.payload],
      };
    case 'SET_USER_OFFLINE':
      return {
        ...state,
        onlineUsers: state.onlineUsers.filter(id => id !== action.payload),
      };
    default:
      return state;
  }
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  // Mock data - replace with actual API calls
  React.useEffect(() => {
    const mockChats: Chat[] = [
      {
        id: '1',
        participants: [
          {
            id: '2',
            username: 'alice_smith',
            email: 'alice@example.com',
            isOnline: true,
            avatar: 'https://ui-avatars.com/api/?name=Alice+Smith&background=e11d48&color=fff',
          },
        ],
        lastMessage: {
          id: '1',
          senderId: '2',
          receiverId: '1',
          content: 'Hey! How are you doing?',
          timestamp: new Date(Date.now() - 1000 * 60 * 5),
          isRead: false,
          type: 'text',
        },
        unreadCount: 1,
        updatedAt: new Date(Date.now() - 1000 * 60 * 5),
      },
      {
        id: '2',
        participants: [
          {
            id: '3',
            username: 'bob_jones',
            email: 'bob@example.com',
            isOnline: false,
            lastSeen: new Date(Date.now() - 1000 * 60 * 30),
            avatar: 'https://ui-avatars.com/api/?name=Bob+Jones&background=059669&color=fff',
          },
        ],
        lastMessage: {
          id: '2',
          senderId: '1',
          receiverId: '3',
          content: 'Thanks for the help yesterday!',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
          isRead: true,
          type: 'text',
        },
        unreadCount: 0,
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
      },
    ];

    const mockMessages = {
      '1': [
        {
          id: '1',
          senderId: '2',
          receiverId: '1',
          content: 'Hey! How are you doing?',
          timestamp: new Date(Date.now() - 1000 * 60 * 5),
          isRead: false,
          type: 'text' as const,
        },
      ],
      '2': [
        {
          id: '2',
          senderId: '1',
          receiverId: '3',
          content: 'Thanks for the help yesterday!',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
          isRead: true,
          type: 'text' as const,
        },
        {
          id: '3',
          senderId: '3',
          receiverId: '1',
          content: 'No problem! Always happy to help.',
          timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1),
          isRead: true,
          type: 'text' as const,
        },
      ],
    };

    dispatch({ type: 'SET_CHATS', payload: mockChats });
    Object.entries(mockMessages).forEach(([chatId, messages]) => {
      messages.forEach(message => {
        dispatch({ type: 'ADD_MESSAGE', payload: { chatId, message } });
      });
    });

    // Mock online users
    dispatch({ type: 'SET_USER_ONLINE', payload: '2' });
  }, []);

  const setActiveChat = (chat: Chat) => {
    dispatch({ type: 'SET_ACTIVE_CHAT', payload: chat });
  };

  const sendMessage = (content: string, receiverId: string) => {
    if (!state.activeChat) return;

    const message: Message = {
      id: Date.now().toString(),
      senderId: '1', // Current user ID
      receiverId,
      content,
      timestamp: new Date(),
      isRead: false,
      type: 'text',
    };

    dispatch({ type: 'ADD_MESSAGE', payload: { chatId: state.activeChat.id, message } });
  };

  const markAsRead = (chatId: string) => {
    dispatch({ type: 'MARK_AS_READ', payload: chatId });
  };

  const setTyping = (chatId: string, isTyping: boolean) => {
    if (isTyping) {
      const typingUser: TypingUser = {
        userId: '1',
        username: 'You',
        timestamp: new Date(),
      };
      dispatch({ type: 'SET_TYPING', payload: { chatId, user: typingUser } });
    } else {
      dispatch({ type: 'SET_TYPING', payload: { chatId, user: null } });
    }
  };

  const addUserOnline = (userId: string) => {
    dispatch({ type: 'SET_USER_ONLINE', payload: userId });
  };

  const removeUserOnline = (userId: string) => {
    dispatch({ type: 'SET_USER_OFFLINE', payload: userId });
  };

  return (
    <ChatContext.Provider
      value={{
        ...state,
        setActiveChat,
        sendMessage,
        markAsRead,
        setTyping,
        addUserOnline,
        removeUserOnline,
      }}
    >
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
