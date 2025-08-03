import { useState, useEffect, useRef } from 'react';
import { useChat } from '../contexts/ChatContext-simple';
import { useAuth } from '../contexts/AuthContext-simple';

export default function ChatInterface() {
  const { chats, activeChat, messages, setActiveChat, sendMessage } = useChat();
  const { user, logout } = useAuth();
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatMessages = activeChat ? messages[activeChat.id] || [] : [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeChat) return;

    const otherUser = activeChat.participants.find(p => p.id !== user?.id);
    if (otherUser) {
      sendMessage(newMessage.trim(), otherUser.id);
      setNewMessage('');
    }
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
          {chats.map(chat => {
            const otherUser = chat.participants.find(p => p.id !== user?.id);
            return (
              <div
                key={chat.id}
                onClick={() => setActiveChat(chat)}
                className={`p-4 cursor-pointer border-b hover:bg-gray-50 ${
                  activeChat?.id === chat.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                }`}
              >
                <div className="font-medium">{otherUser?.username}</div>
                <div className="text-sm text-gray-500">{otherUser?.email}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {activeChat ? (
          <>
            {/* Chat Header */}
            <div className="bg-white p-4 border-b">
              <h3 className="text-lg font-semibold">
                {activeChat.participants.find(p => p.id !== user?.id)?.username}
              </h3>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map(message => (
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
              ))}
              <div ref={messagesEndRef} />
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
              <h3 className="text-lg font-medium mb-2">Welcome to ChitChat!</h3>
              <p>Select a chat from the sidebar to start messaging.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
