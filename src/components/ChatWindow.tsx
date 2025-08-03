import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '../contexts/ChatContext';
import { useAuth } from '../contexts/AuthContext';
import { MessageItem } from './MessageItem';
import { TypingIndicator } from './TypingIndicator';
import { EmojiPicker } from './EmojiPicker';

function ChatWindow() {
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const { activeChat, messages, sendMessage, setTyping, typingUsers } = useChat();
  const { user } = useAuth();

  const chatMessages = activeChat ? messages[activeChat.id] || [] : [];
  const chatTypingUsers = activeChat ? typingUsers[activeChat.id] || [] : [];
  const otherUser = activeChat?.participants.find(p => p.id !== user?.id);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages, chatTypingUsers]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeChat || !user || !otherUser) return;

    sendMessage(newMessage.trim(), otherUser.id);
    setNewMessage('');
    setIsTyping(false);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      setTyping(activeChat.id, false);
    }
  };

  const handleTyping = () => {
    if (!isTyping && activeChat) {
      setIsTyping(true);
      setTyping(activeChat.id, true);
    }

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set new timeout
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      if (activeChat) {
        setTyping(activeChat.id, false);
      }
    }, 1000);
  };

  const addEmoji = (emoji: string) => {
    setNewMessage(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  if (!activeChat) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Welcome to ChitChat!</h3>
          <p className="text-gray-600 max-w-sm">
            Select a user from the sidebar to start a conversation. 
            Your chat application is working perfectly!
          </p>
        </div>
      </div>
    );
  }

  const typingUsernames = chatTypingUsers
    .filter(typing => typing.userId !== user?.id)
    .map(typing => typing.username);

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-3">
          <img
            className="h-10 w-10 rounded-full"
            src={otherUser?.avatar}
            alt={otherUser?.username}
          />
          <div>
            <h3 className="text-lg font-medium text-gray-900">{otherUser?.username}</h3>
            <p className="text-sm text-gray-500">
              {otherUser?.isOnline ? (
                <span className="flex items-center">
                  <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                  Online
                </span>
              ) : (
                'Offline'
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {chatMessages.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-gray-500 mb-4">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="text-gray-500">No messages yet. Start the conversation!</p>
            <p className="text-sm text-blue-600 mt-2">✨ This is a working chat demo with mock data!</p>
          </div>
        ) : (
          chatMessages.map((message, index) => {
            const isOwn = message.senderId === user?.id;
            const sender = isOwn ? user : otherUser;
            return (
              <MessageItem
                key={message.id}
                message={message}
                isOwn={isOwn}
                sender={sender}
                showAvatar={
                  index === 0 || 
                  chatMessages[index - 1]?.senderId !== message.senderId
                }
              />
            );
          })
        )}
        
        {typingUsernames.length > 0 && (
          <TypingIndicator usernames={typingUsernames} />
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="px-6 py-4 border-t border-gray-200 bg-white">
        <form onSubmit={handleSendMessage} className="flex items-end space-x-3">
          <div className="flex-1 relative">
            <textarea
              value={newMessage}
              onChange={(e) => {
                setNewMessage(e.target.value);
                handleTyping();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e);
                }
              }}
              placeholder={`Message ${otherUser?.username}...`}
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 focus:border-transparent max-h-32"
              rows={1}
              style={{ minHeight: '48px' }}
            />
            <button
              type="button"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            
            {showEmojiPicker && (
              <div className="absolute bottom-full right-0 mb-2">
                <EmojiPicker 
                  onSelect={addEmoji}
                  onClose={() => setShowEmojiPicker(false)}
                  isOpen={showEmojiPicker}
                />
              </div>
            )}
          </div>
          
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatWindow;
