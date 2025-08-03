import { useChat } from '../contexts/ChatContext';
import { useAuth } from '../contexts/AuthContext';
import { formatDistanceToNow } from 'date-fns';
import type { Chat } from '../types';

interface ChatSidebarProps {
  className?: string;
}

export function ChatSidebar({ className = '' }: ChatSidebarProps) {
  const { chats, activeChat, setActiveChat, onlineUsers } = useChat();
  const { user, logout } = useAuth();

  const handleChatSelect = (chat: Chat) => {
    setActiveChat(chat);
  };

  return (
    <div className={`chat-sidebar flex flex-col ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              className="avatar h-12 w-12"
              src={user?.avatar}
              alt={user?.username}
            />
            <div>
              <h3 className="text-lg font-semibold text-white">{user?.username}</h3>
              <div className="flex items-center space-x-1">
                <div className="online-dot w-2 h-2"></div>
                <p className="text-xs text-blue-100">Online</p>
              </div>
            </div>
          </div>
          <button
            onClick={logout}
            className="text-blue-100 hover:text-white transition-colors p-2 rounded-full hover:bg-blue-600"
            title="Logout"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="input-field pl-10 text-sm"
            placeholder="Search conversations..."
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {chats.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            <svg className="mx-auto h-12 w-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="font-medium">No conversations yet</p>
            <p className="text-sm mt-1">Start chatting to see conversations here</p>
          </div>
        ) : (
          <div>
            {chats.map((chat) => {
              const otherUser = chat.participants[0];
              const isOnline = onlineUsers.includes(otherUser.id);
              const isActive = activeChat?.id === chat.id;

              return (
                <div
                  key={chat.id}
                  className={`chat-item ${isActive ? 'active' : ''}`}
                  onClick={() => handleChatSelect(chat)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        className="avatar h-12 w-12"
                        src={otherUser.avatar}
                        alt={otherUser.username}
                      />
                      <div className={`absolute -bottom-1 -right-1 ${isOnline ? 'online-dot' : 'offline-dot'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {otherUser.username}
                        </p>
                        {chat.lastMessage && (
                          <p className="text-xs text-gray-500">
                            {formatDistanceToNow(chat.lastMessage.timestamp, { addSuffix: true })}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate">
                          {chat.lastMessage?.content || 'No messages yet'}
                        </p>
                        {chat.unreadCount > 0 && (
                          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-blue-500 rounded-full ml-2">
                            {chat.unreadCount}
                          </span>
                        )}
                      </div>
                      {!isOnline && otherUser.lastSeen && (
                        <p className="text-xs text-gray-400 mt-1">
                          Last seen {formatDistanceToNow(otherUser.lastSeen, { addSuffix: true })}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
