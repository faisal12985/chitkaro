# ✨ VibeChat

A modern real-time chat application built with React, TypeScript, Firebase, and Tailwind CSS.

![VibeChat](https://img.shields.io/badge/VibeChat-Live%20Chat%20App-blue)
![React](https://img.shields.io/badge/React-18.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Firebase](https://img.shields.io/badge/Firebase-10.0-orange)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-cyan)

## 🚀 Features

- ✅ **Real-time messaging** with Firebase Firestore
- 👥 **User authentication** (signup/login)
- 🟢 **Online/offline status** tracking
- 💬 **One-to-one conversations**
- 📱 **Responsive mobile design**
- ⚡ **Instant message delivery**
- 🔐 **Secure Firebase authentication**

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Firestore + Authentication)
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify ready

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vibechat.git
   cd vibechat
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Create Firestore Database
   - Copy your Firebase config

4. **Environment setup**
   
   Create a `.env` file and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open** http://localhost:5173

## 🔥 Firebase Setup

### 1. Authentication Rules
Enable Email/Password authentication in Firebase Console.

### 2. Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 📦 Build & Deploy

### Build for production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 🎯 Usage

1. **Sign up** with email/password
2. **Browse users** in the Users tab
3. **Click on any user** to start chatting
4. **Send messages** in real-time
5. **See online status** with green indicators

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Firebase for real-time backend services
- Tailwind CSS for beautiful styling
- Vite for lightning-fast development

---

Made with ❤️ and lots of ✨ vibes!
