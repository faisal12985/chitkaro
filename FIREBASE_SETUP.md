# Firebase Setup Instructions

## Quick Start with Firebase

### Option 1: Use Firebase Emulator (Local Development)

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase in your project:**
   ```bash
   firebase init
   ```
   - Select Firestore, Authentication
   - Choose your project or create a new one
   - Accept defaults for Firestore rules
   - Enable Emulator for local development

4. **Start Firebase emulators:**
   ```bash
   firebase emulators:start
   ```

### Option 2: Quick Test with Production Firebase

1. **Go to [Firebase Console](https://console.firebase.google.com)**
2. **Create a new project called "chitchat-demo"**
3. **Enable Authentication:**
   - Go to Authentication > Sign-in method
   - Enable "Email/Password"
4. **Enable Firestore:**
   - Go to Firestore Database
   - Create database in production mode
   - Start with test rules (we'll secure later)
5. **Get your config:**
   - Go to Project Settings > General
   - Add a web app
   - Copy the configuration

6. **Create `.env` file in your project root:**
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

### Current Status
- ✅ Firebase SDK installed and configured
- ✅ Real authentication with Firebase Auth
- ✅ Real-time messaging with Firestore
- ✅ User presence tracking
- ✅ Chat creation and management

### Features Working:
- Real user registration and login
- Real-time message sync across devices
- User online/offline status
- Chat history persistence
- Message timestamps
- User profiles with avatars

### To Test:
1. Start the dev server: `npm run dev`
2. Create a new account or use existing Firebase users
3. Open the app in multiple browser windows
4. Chat in real-time between different user accounts!

The app will work with demo data until you set up Firebase, then it becomes a fully functional real-time chat application!
