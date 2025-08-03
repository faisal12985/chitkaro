import { useFirebaseChat } from '../contexts/FirebaseChatContext';
import { useFirebaseAuth } from '../contexts/FirebaseAuthContext';
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import type { User } from '../types';

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FirebaseChatSidebar({ isOpen, onClose }: ChatSidebarProps) {
  const { chats, activeChat, selectChat, onlineUsers, users } = useFirebaseChat();
  const { user, logout } = useFirebaseAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChatSelect = (chatUserId: string) => {
    selectChat(chatUserId);
    onClose();
  };

  const handleUserSelect = (selectedUser: User) => {
    selectChat(selectedUser.id);
    onClose();
  };

  const filteredUsers = users.filter(u => 
    u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredChats = chats.filter(chat =>
    chat.otherUser?.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.otherUser?.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img
              className="h-8 w-8 rounded-full"
              src={user?.avatar}
              alt={user?.username}
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{user?.username}</h2>
              <p className="text-sm text-green-600">Online</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={logout}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              title="Logout"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users or chats..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {searchTerm ? (
            <>
              {/* Available Users */}
              {filteredUsers.length > 0 && (
                <div>
                  <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Users
                  </div>
                  {filteredUsers.map((availableUser) => {
                    const isOnline = onlineUsers.includes(availableUser.id);
                    return (
                      <div
                        key={availableUser.id}
                        onClick={() => handleUserSelect(availableUser)}
                        className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                      >
                        <div className="relative">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={availableUser.avatar}
                            alt={availableUser.username}
                          />
                          {isOnline && (
                            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">
                              {availableUser.username}
                            </p>
                            <div className="flex items-center space-x-1">
                              {isOnline ? (
                                <span className="text-xs text-green-600">Online</span>
                              ) : (
                                <span className="text-xs text-gray-500">Offline</span>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 truncate">{availableUser.email}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Existing Chats */}
              {filteredChats.length > 0 && (
                <div>
                  <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Chats
                  </div>
                  {filteredChats.map((chat) => {
                    const otherUser = chat.otherUser!;
                    const isOnline = onlineUsers.includes(otherUser.id);
                    const isActiveChat = activeChat?.id === chat.id;

                    return (
                      <div
                        key={chat.id}
                        onClick={() => handleChatSelect(otherUser.id)}
                        className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                          isActiveChat ? 'bg-blue-50 border-blue-200' : ''
                        }`}
                      >
                        <div className="relative">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={otherUser.avatar}
                            alt={otherUser.username}
                          />
                          {isOnline && (
                            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">
                              {otherUser.username}
                            </p>
                            <div className="flex items-center space-x-1">
                              {chat.lastMessageTime && (
                                <span className="text-xs text-gray-500">
                                  {formatDistanceToNow(chat.lastMessageTime, { addSuffix: true })}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500 truncate">
                              {chat.lastMessage || 'Start a conversation'}
                            </p>
                            {(chat?.unreadCount ?? 0) > 0 && (
                              <span className="ml-2 px-2 py-1 text-xs bg-blue-500 text-white rounded-full">
                                {chat.unreadCount}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          ) : (
            <>
              {/* Recent Chats */}
              {chats.length > 0 && (
                <div>
                  <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                    Recent Chats
                  </div>
                  {chats.map((chat) => {
                    const otherUser = chat.otherUser!;
                    const isOnline = onlineUsers.includes(otherUser.id);
                    const isActiveChat = activeChat?.id === chat.id;

                    return (
                      <div
                        key={chat.id}
                        onClick={() => handleChatSelect(otherUser.id)}
                        className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                          isActiveChat ? 'bg-blue-50 border-blue-200' : ''
                        }`}
                      >
                        <div className="relative">
                          <img
                            className="h-12 w-12 rounded-full"
                            src={otherUser.avatar}
                            alt={otherUser.username}
                          />
                          {isOnline && (
                            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">
                              {otherUser.username}
                            </p>
                            <div className="flex items-center space-x-1">
                              {chat.lastMessageTime && (
                                <span className="text-xs text-gray-500">
                                  {formatDistanceToNow(chat.lastMessageTime, { addSuffix: true })}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500 truncate">
                              {chat.lastMessage || 'Start a conversation'}
                            </p>
                            {(chat.unreadCount || 0) > 0 && (
                              <span className="ml-2 px-2 py-1 text-xs bg-blue-500 text-white rounded-full">
                                {chat.unreadCount}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* All Users */}
              <div>
                <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  All Users
                </div>
                {users.map((availableUser) => {
                  const isOnline = onlineUsers.includes(availableUser.id);
                  const hasExistingChat = chats.some(chat => chat.otherUser?.id === availableUser.id);

                  if (hasExistingChat) return null;

                  return (
                    <div
                      key={availableUser.id}
                      onClick={() => handleUserSelect(availableUser)}
                      className="flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100"
                    >
                      <div className="relative">
                        <img
                          className="h-12 w-12 rounded-full"
                          src={availableUser.avatar}
                          alt={availableUser.username}
                        />
                        {isOnline && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">
                            {availableUser.username}
                          </p>
                          <div className="flex items-center space-x-1">
                            {isOnline ? (
                              <span className="text-xs text-green-600">Online</span>
                            ) : (
                              <span className="text-xs text-gray-500">Offline</span>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{availableUser.email}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
