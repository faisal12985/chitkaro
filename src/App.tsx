import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  User as FirebaseUser
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot,
  where,
  updateDoc,
  doc,
  setDoc,
  getDoc,
  getDocs,
  serverTimestamp
} from 'firebase/firestore';

// Firebase configuration
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
const db = getFirestore(app);

// Types
interface ChatUser {
  id: string;
  email: string;
  username: string;
  gender: 'male' | 'female' | 'other';
  age: number;
  isOnline: boolean;
  lastSeen: any;
  avatar: string;
}

interface Message {
  id: string;
  text: string;
  senderId: string;
  receiverId: string;
  timestamp: any;
  read: boolean;
}

interface VideoCall {
  id: string;
  callerId: string;
  receiverId: string;
  status: 'pending' | 'active' | 'ended';
  timestamp: any;
  offer?: any;
  answer?: any;
  iceCandidates?: any[];
}

function App() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [currentUser, setCurrentUser] = useState<ChatUser | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<ChatUser[]>([]);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isAwaitingVerification, setIsAwaitingVerification] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState('');
  const [inVideoCall, setInVideoCall] = useState(false);
  const [incomingCall, setIncomingCall] = useState<VideoCall | null>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [peerConnection, setPeerConnection] = useState<RTCPeerConnection | null>(null);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'other'>('male');

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check if email is verified
        if (user.emailVerified) {
          setUser(user);
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = { id: user.uid, ...userDoc.data() } as ChatUser;
            setCurrentUser(userData);
            await updateDoc(doc(db, 'users', user.uid), {
              isOnline: true,
              lastSeen: serverTimestamp()
            });
          }
          setIsAwaitingVerification(false);
        } else if (user && !user.emailVerified) {
          // User exists but email not verified
          setIsAwaitingVerification(true);
          setVerificationEmail(user.email || '');
          setUser(null);
          setCurrentUser(null);
        }
      } else {
        setUser(null);
        setCurrentUser(null);
        setIsAwaitingVerification(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Listen to users
  useEffect(() => {
    if (!currentUser) return;

    const usersQuery = query(collection(db, 'users'));
    const unsubscribe = onSnapshot(usersQuery, (snapshot) => {
      const allUsers = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      })) as ChatUser[];

      const otherUsers = allUsers.filter(u => u.id !== currentUser.id);
      
      // Smart gender filtering
      const filtered = otherUsers.filter(u => {
        if (currentUser.gender === 'male') {
          return u.gender === 'female' || u.gender === 'other';
        } else if (currentUser.gender === 'female') {
          return u.gender === 'male' || u.gender === 'other';
        } else {
          return true; // Show all for 'other'
        }
      });

      setFilteredUsers(filtered);
    });

    return () => unsubscribe();
  }, [currentUser]);

  // Listen to messages
  useEffect(() => {
    if (!activeChat || !currentUser) return;

    const messagesQuery = query(
      collection(db, 'messages'),
      orderBy('timestamp', 'asc')
    );

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const allMessages = snapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data() 
      })) as Message[];

      const chatMessages = allMessages.filter(msg =>
        (msg.senderId === currentUser.id && msg.receiverId === activeChat) ||
        (msg.senderId === activeChat && msg.receiverId === currentUser.id)
      );

      setMessages(chatMessages);
    });

    return () => unsubscribe();
  }, [activeChat, currentUser]);

  // Listen for video calls
  useEffect(() => {
    if (!currentUser) return;

    const callsQuery = query(
      collection(db, 'videoCalls'),
      where('receiverId', '==', currentUser.id),
      where('status', '==', 'pending')
    );

    const unsubscribe = onSnapshot(callsQuery, (snapshot) => {
      if (!snapshot.empty) {
        const call = { id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as VideoCall;
        setIncomingCall(call);
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // WebRTC Configuration
  const rtcConfig = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' }
    ]
  };

  // Initialize peer connection
  const initializePeerConnection = () => {
    const pc = new RTCPeerConnection(rtcConfig);
    
    pc.onicecandidate = (event) => {
      if (event.candidate && activeChat) {
        // Send ICE candidate to remote peer via Firebase
        addDoc(collection(db, 'iceCandidates'), {
          candidate: event.candidate,
          callId: activeChat,
          senderId: currentUser?.id,
          timestamp: serverTimestamp()
        });
      }
    };

    pc.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    return pc;
  };

  // Get user media
  const getUserMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      setLocalStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      return stream;
    } catch (error) {
      console.error('Error accessing media devices:', error);
      alert('Could not access camera/microphone. Please check permissions.');
      return null;
    }
  };

  // Listen for ICE candidates
  useEffect(() => {
    if (!currentUser || !inVideoCall) return;

    const candidatesQuery = query(
      collection(db, 'iceCandidates'),
      where('callId', '==', activeChat),
      where('senderId', '!=', currentUser.id)
    );

    const unsubscribe = onSnapshot(candidatesQuery, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added' && peerConnection) {
          const data = change.doc.data();
          peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
        }
      });
    });

    return () => unsubscribe();
  }, [currentUser, inVideoCall, activeChat, peerConnection]);

  // Listen for call updates (offers/answers)
  useEffect(() => {
    if (!currentUser) return;

    const callsQuery = query(
      collection(db, 'videoCalls'),
      where('receiverId', '==', currentUser.id)
    );

    const unsubscribe = onSnapshot(callsQuery, async (snapshot) => {
      snapshot.docChanges().forEach(async (change) => {
        if (change.type === 'modified') {
          const call = { id: change.doc.id, ...change.doc.data() } as VideoCall;
          
          if (call.status === 'pending' && call.offer && !incomingCall) {
            setIncomingCall(call);
          } else if (call.status === 'active' && call.answer && peerConnection) {
            await peerConnection.setRemoteDescription(new RTCSessionDescription(call.answer));
          }
        }
      });
    });

    return () => unsubscribe();
  }, [currentUser, peerConnection, incomingCall]);

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
      }
      if (peerConnection) {
        peerConnection.close();
      }
    };
  }, []);

  // Handle signup
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('🚀 Starting signup process...');
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log('✅ User created:', result.user.uid);
      
      // Send email verification
      console.log('📧 Sending email verification...');
      await sendEmailVerification(result.user);
      
      console.log('📝 Creating user document...');
      await setDoc(doc(db, 'users', result.user.uid), {
        email,
        username,
        gender,
        age: parseInt(age),
        isOnline: false, // Keep offline until email verified
        lastSeen: serverTimestamp(),
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}&backgroundColor=b6e3f4`,
        emailVerified: false
      });

      setIsAwaitingVerification(true);
      setVerificationEmail(email);
      console.log('✅ Signup successful! Email verification sent.');
      
      // Clear form
      setEmail('');
      setPassword('');
      setUsername('');
      setAge('');
      setGender('male');
      
    } catch (error: any) {
      console.error('❌ Signup failed:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      
      let errorMessage = 'Signup failed: ';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage += 'This email is already registered. Try logging in instead.';
          break;
        case 'auth/weak-password':
          errorMessage += 'Password should be at least 6 characters.';
          break;
        case 'auth/invalid-email':
          errorMessage += 'Please enter a valid email address.';
          break;
        case 'auth/operation-not-allowed':
          errorMessage += 'Email/password authentication is not enabled. Please contact support.';
          break;
        case 'permission-denied':
          errorMessage += 'Database permission denied. Please check Firestore rules.';
          break;
        default:
          errorMessage += error.message;
      }
      
      alert(errorMessage);
    }
  };

  // Handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('🔑 Starting login process...');
      const result = await signInWithEmailAndPassword(auth, email, password);
      
      // Check if email is verified
      if (!result.user.emailVerified) {
        console.log('❌ Email not verified');
        alert('Please verify your email before logging in. Check your inbox for the verification link.');
        await signOut(auth);
        return;
      }
      
      console.log('✅ Login successful!');
    } catch (error: any) {
      console.error('❌ Login failed:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      
      let errorMessage = 'Login failed: ';
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage += 'No account found with this email. Please sign up first.';
          break;
        case 'auth/wrong-password':
          errorMessage += 'Incorrect password. Please try again.';
          break;
        case 'auth/invalid-email':
          errorMessage += 'Please enter a valid email address.';
          break;
        case 'auth/too-many-requests':
          errorMessage += 'Too many failed attempts. Please try again later.';
          break;
        default:
          errorMessage += error.message;
      }
      
      alert(errorMessage);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    if (currentUser) {
      await updateDoc(doc(db, 'users', currentUser.id), {
        isOnline: false,
        lastSeen: serverTimestamp()
      });
    }
    await signOut(auth);
  };

  // Resend verification email
  const resendVerificationEmail = async () => {
    try {
      const currentAuthUser = auth.currentUser;
      if (currentAuthUser) {
        await sendEmailVerification(currentAuthUser);
        alert('📧 Verification email sent! Please check your inbox.');
      }
    } catch (error: any) {
      console.error('Error resending verification email:', error);
      alert('Failed to resend verification email. Please try again.');
    }
  };

  // Check verification status
  const checkVerificationStatus = async () => {
    try {
      const currentAuthUser = auth.currentUser;
      if (currentAuthUser) {
        await currentAuthUser.reload(); // Refresh user data
        if (currentAuthUser.emailVerified) {
          // Update user document to mark as verified
          await updateDoc(doc(db, 'users', currentAuthUser.uid), {
            emailVerified: true,
            isOnline: true
          });
          setIsAwaitingVerification(false);
          alert('✅ Email verified successfully! Welcome to VibeChat!');
          window.location.reload(); // Refresh to update state
        } else {
          alert('❌ Email not verified yet. Please check your inbox and click the verification link.');
        }
      }
    } catch (error: any) {
      console.error('Error checking verification status:', error);
      alert('Failed to check verification status. Please try again.');
    }
  };

  // Send message
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeChat || !currentUser) return;

    await addDoc(collection(db, 'messages'), {
      text: newMessage.trim(),
      senderId: currentUser.id,
      receiverId: activeChat,
      timestamp: serverTimestamp(),
      read: false
    });

    setNewMessage('');
  };

  // Start video call
  const startVideoCall = async (receiverId: string) => {
    if (!currentUser) return;

    try {
      // Get user media first
      const stream = await getUserMedia();
      if (!stream) return;

      // Initialize peer connection
      const pc = initializePeerConnection();
      setPeerConnection(pc);

      // Add local stream to peer connection
      stream.getTracks().forEach(track => {
        pc.addTrack(track, stream);
      });

      // Create offer
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      // Create call document with offer
      await addDoc(collection(db, 'videoCalls'), {
        callerId: currentUser.id,
        receiverId,
        status: 'pending',
        offer: offer,
        timestamp: serverTimestamp()
      });

      setInVideoCall(true);
      alert('📞 Video call request sent! Waiting for response...');
    } catch (error) {
      console.error('Error starting video call:', error);
      alert('Failed to start video call. Please try again.');
    }
  };

  // Accept video call
  const acceptCall = async () => {
    if (!incomingCall || !currentUser) return;

    try {
      // Get user media
      const stream = await getUserMedia();
      if (!stream) return;

      // Initialize peer connection
      const pc = initializePeerConnection();
      setPeerConnection(pc);

      // Add local stream to peer connection
      stream.getTracks().forEach(track => {
        pc.addTrack(track, stream);
      });

      // Set remote description (offer)
      await pc.setRemoteDescription(new RTCSessionDescription(incomingCall.offer));

      // Create answer
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);

      // Update call document with answer
      await updateDoc(doc(db, 'videoCalls', incomingCall.id), {
        status: 'active',
        answer: answer
      });

      setInVideoCall(true);
      setIncomingCall(null);
      alert('📹 Video call started!');
    } catch (error) {
      console.error('Error accepting video call:', error);
      alert('Failed to accept video call. Please try again.');
    }
  };

  // Reject video call
  const rejectCall = async () => {
    if (!incomingCall) return;

    await updateDoc(doc(db, 'videoCalls', incomingCall.id), {
      status: 'ended'
    });

    setIncomingCall(null);
  };

  // End video call
  const endCall = async () => {
    // Stop local stream
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
      setLocalStream(null);
    }

    // Close peer connection
    if (peerConnection) {
      peerConnection.close();
      setPeerConnection(null);
    }

    setRemoteStream(null);
    setInVideoCall(false);
    setIncomingCall(null);
    
    // Update call status in database
    if (activeChat && currentUser) {
      const callsQuery = query(
        collection(db, 'videoCalls'),
        where('callerId', 'in', [currentUser.id, activeChat]),
        where('receiverId', 'in', [currentUser.id, activeChat]),
        where('status', '==', 'active')
      );
      
      const snapshot = await getDocs(callsQuery);
      snapshot.docs.forEach(async (callDoc) => {
        await updateDoc(doc(db, 'videoCalls', callDoc.id), {
          status: 'ended'
        });
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading VibeChat...</p>
        </div>
      </div>
    );
  }

  if (!user || !currentUser) {
    // Email verification screen
    if (isAwaitingVerification) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">📧</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h1>
              <p className="text-gray-600 mb-4">
                We've sent a verification link to:
              </p>
              <p className="text-purple-600 font-semibold text-lg mb-6">
                {verificationEmail}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Click the verification link in your email to activate your VibeChat account. 
                Check your spam folder if you don't see it in your inbox.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={checkVerificationStatus}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-blue-700 transition-all"
              >
                ✅ I've Verified My Email
              </button>

              <button
                onClick={resendVerificationEmail}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all"
              >
                📧 Resend Verification Email
              </button>

              <button
                onClick={() => {
                  signOut(auth);
                  setIsAwaitingVerification(false);
                }}
                className="w-full bg-gray-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-600 transition-all"
              >
                ← Back to Login
              </button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">💡 Why verify your email?</h3>
              <ul className="text-sm text-blue-700 text-left space-y-1">
                <li>• Ensures you're using a real email address</li>
                <li>• Prevents fake accounts from joining</li>
                <li>• Helps recover your account if needed</li>
                <li>• Keeps the VibeChat community safe</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">💕 VibeChat</h1>
            <p className="text-gray-600">Connect with your perfect match!</p>
          </div>

          <div className="flex mb-6">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-l-lg font-medium ${
                isLogin 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-r-lg font-medium ${
                !isLogin 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-4">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
                
                <input
                  type="number"
                  placeholder="Age (18+)"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  min="18"
                  max="100"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">I am:</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === 'male'}
                        onChange={(e) => setGender(e.target.value as any)}
                        className="mr-2 text-pink-600"
                      />
                      <span>👨 Male</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === 'female'}
                        onChange={(e) => setGender(e.target.value as any)}
                        className="mr-2 text-pink-600"
                      />
                      <span>👩 Female</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={gender === 'other'}
                        onChange={(e) => setGender(e.target.value as any)}
                        className="mr-2 text-pink-600"
                      />
                      <span>🌈 Other</span>
                    </label>
                  </div>
                </div>
              </>
            )}

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-pink-600 hover:to-purple-700 transition-all"
            >
              {isLogin ? '💕 Login to VibeChat' : '� Sign Up & Verify Email'}
            </button>
          </form>

          {!isLogin && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>📧 Email verification required!</strong><br />
                After signing up, check your email for a verification link to activate your account.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  const activeChatUser = filteredUsers.find(u => u.id === activeChat);

  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Incoming Call Modal */}
      {incomingCall && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="text-xl font-bold">Incoming Video Call</h3>
              <p className="text-gray-600">Someone wants to video chat!</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={acceptCall}
                className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600"
              >
                📹 Accept
              </button>
              <button
                onClick={rejectCall}
                className="flex-1 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600"
              >
                📵 Decline
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Call Modal */}
      {inVideoCall && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
          <div className="w-full h-full relative">
            {/* Remote Video (Main) */}
            <video
              ref={remoteVideoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
              style={{ transform: 'scaleX(-1)' }}
            />
            
            {/* Local Video (Picture-in-Picture) */}
            <div className="absolute top-4 right-4 w-48 h-36 bg-gray-900 rounded-lg overflow-hidden border-2 border-white shadow-lg">
              <video
                ref={localVideoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
                style={{ transform: 'scaleX(-1)' }}
              />
            </div>

            {/* Controls */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-4 bg-black bg-opacity-50 rounded-full px-6 py-3">
                <button
                  onClick={() => {
                    if (localStream) {
                      const videoTrack = localStream.getVideoTracks()[0];
                      if (videoTrack) {
                        videoTrack.enabled = !videoTrack.enabled;
                      }
                    }
                  }}
                  className="p-3 bg-gray-600 hover:bg-gray-700 rounded-full text-white transition-colors"
                  title="Toggle Camera"
                >
                  📹
                </button>
                
                <button
                  onClick={() => {
                    if (localStream) {
                      const audioTrack = localStream.getAudioTracks()[0];
                      if (audioTrack) {
                        audioTrack.enabled = !audioTrack.enabled;
                      }
                    }
                  }}
                  className="p-3 bg-gray-600 hover:bg-gray-700 rounded-full text-white transition-colors"
                  title="Toggle Microphone"
                >
                  🎤
                </button>

                <button
                  onClick={endCall}
                  className="p-4 bg-red-500 hover:bg-red-600 rounded-full text-white transition-colors"
                  title="End Call"
                >
                  📴
                </button>
              </div>
            </div>

            {/* Call Info */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-50 rounded-lg px-4 py-2">
              <p className="text-white text-sm">
                📹 Video Call with {activeChatUser?.username}
              </p>
            </div>

            {/* Connection Status */}
            {!remoteStream && (
              <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p className="text-lg">Connecting...</p>
                  <p className="text-sm opacity-75">Waiting for {activeChatUser?.username} to join</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                className="h-10 w-10 rounded-full border-2 border-white"
                src={currentUser.avatar}
                alt={currentUser.username}
              />
              <div>
                <h2 className="text-white font-medium">{currentUser.username}</h2>
                <p className="text-pink-100 text-sm">
                  {currentUser.gender === 'male' ? '👨' : currentUser.gender === 'female' ? '👩' : '🌈'} 
                  {currentUser.age} years old
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="text-white hover:text-pink-200 p-2"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>

        {/* Smart Filter Info */}
        <div className="p-3 bg-gradient-to-r from-pink-50 to-purple-50 border-b">
          <p className="text-sm text-gray-600 text-center">
            🎯 Showing {currentUser.gender === 'male' ? 'females & others' : currentUser.gender === 'female' ? 'males & others' : 'all genders'}
          </p>
        </div>

        {/* User List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
              Available ({filteredUsers.length})
            </h3>
            
            {filteredUsers.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-2">No matches found</p>
                <p className="text-sm text-gray-400">
                  Wait for more people to join!
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredUsers.map((user) => (
                  <button
                    key={user.id}
                    onClick={() => setActiveChat(user.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left hover:bg-gray-50 transition-colors ${
                      activeChat === user.id ? 'bg-pink-50 border border-pink-200' : ''
                    }`}
                  >
                    <div className="relative">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={user.avatar}
                        alt={user.username}
                      />
                      <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                        user.isOnline ? 'bg-green-400' : 'bg-gray-400'
                      }`}></span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{user.username}</p>
                      <p className="text-sm text-gray-500">
                        {user.gender === 'male' ? '👨' : user.gender === 'female' ? '👩' : '🌈'} 
                        {user.age} years • {user.isOnline ? 'Online' : 'Offline'}
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        startVideoCall(user.id);
                      }}
                      className="p-2 text-pink-600 hover:bg-pink-100 rounded-full"
                      title="Start video call"
                    >
                      📹
                    </button>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {!activeChat ? (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="h-16 w-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Welcome to VibeChat! 💕</h3>
              <p className="text-gray-600 max-w-sm">
                Select someone from the sidebar to start chatting or video calling!
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Chat Header */}
            <div className="px-6 py-4 border-b border-gray-200 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={activeChatUser?.avatar}
                    alt={activeChatUser?.username}
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{activeChatUser?.username}</h3>
                    <p className="text-sm text-gray-500">
                      {activeChatUser?.gender === 'male' ? '👨' : activeChatUser?.gender === 'female' ? '👩' : '🌈'} 
                      {activeChatUser?.age} years • {activeChatUser?.isOnline ? 'Online' : 'Offline'}
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => startVideoCall(activeChat)}
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-full hover:from-green-500 hover:to-blue-600 transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">💕</div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Start a conversation!</h3>
                  <p className="text-gray-500">Send a message to {activeChatUser?.username}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.senderId === currentUser?.id ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                          message.senderId === currentUser?.id
                            ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                            : 'bg-white text-gray-800 border'
                        }`}
                      >
                        <p>{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.senderId === currentUser?.id ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {message.timestamp?.toDate?.()?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) || 'Just now'}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <form onSubmit={sendMessage} className="flex space-x-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder={`Message ${activeChatUser?.username}...`}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  💕 Send
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
