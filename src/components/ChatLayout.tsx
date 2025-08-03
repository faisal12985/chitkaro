import { useState } from 'react';
import { ChatSidebar } from './ChatSidebar';
import ChatWindow from './ChatWindow';
import { useChat } from '../contexts/ChatContext';
import { useAuth } from '../contexts/AuthContext';

export function ChatLayout() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { activeChat } = useChat();
  const { user } = useAuth();

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className={`w-80 bg-white shadow-lg border-r border-gray-200 ${
        showSidebar ? 'block' : 'hidden'
      } lg:block`}>
        <ChatSidebar className="h-full" />
      </div>

      {/* Overlay for mobile */}
      {showSidebar && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        {activeChat && (
          <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
            <button
              onClick={() => setShowSidebar(true)}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              <img
                className="h-8 w-8 rounded-full"
                src={activeChat.participants.find(p => p.id !== user?.id)?.avatar}
                alt={activeChat.participants.find(p => p.id !== user?.id)?.username}
              />
              <span className="font-medium text-gray-900">
                {activeChat.participants.find(p => p.id !== user?.id)?.username}
              </span>
            </div>
          </div>
        )}
        
        <ChatWindow />
      </div>
    </div>
  );
}
