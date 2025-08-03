import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">ChitChat</h1>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Login</h2>
          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 border rounded-lg"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-3 border rounded-lg"
            />
            <button 
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Don't have an account? <span className="text-blue-500 cursor-pointer">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
