import { useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase config
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

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const testSignUp = async () => {
    try {
      setIsLoading(true);
      setError('');
      setSuccess('');
      
      console.log('Testing signup with:', email);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Signup successful:', userCredential.user.uid);
      setSuccess(`✅ Account created successfully! User ID: ${userCredential.user.uid}`);
      
    } catch (error: any) {
      console.error('Signup error:', error);
      setError(`❌ Signup failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testLogin = async () => {
    try {
      setIsLoading(true);
      setError('');
      setSuccess('');
      
      console.log('Testing login with:', email);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful:', userCredential.user.uid);
      setSuccess(`✅ Login successful! User ID: ${userCredential.user.uid}`);
      
    } catch (error: any) {
      console.error('Login error:', error);
      setError(`❌ Login failed: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">🔥 Firebase Auth Test</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="test@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="At least 6 characters"
            />
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={testSignUp}
              disabled={isLoading || !email || !password}
              className="flex-1 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 disabled:opacity-50"
            >
              {isLoading ? 'Testing...' : 'Test Signup'}
            </button>
            
            <button
              onClick={testLogin}
              disabled={isLoading || !email || !password}
              className="flex-1 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
            >
              {isLoading ? 'Testing...' : 'Test Login'}
            </button>
          </div>
        </div>
        
        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {success}
          </div>
        )}
        
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-sm mb-2">Firebase Project Info:</h3>
          <p className="text-xs text-gray-600">
            Project ID: {firebaseConfig.projectId}<br/>
            Auth Domain: {firebaseConfig.authDomain}
          </p>
        </div>
        
        <div className="mt-4 text-xs text-gray-500">
          <p><strong>Next Steps:</strong></p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Go to Firebase Console</li>
            <li>Enable Authentication → Email/Password</li>
            <li>Create Firestore Database</li>
            <li>Try the test buttons above</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
