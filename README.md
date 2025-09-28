# TheProtocol - Backend

A real-time chat application backend built with Node.js, Express, MongoDB, and Socket.IO.

---

## 🚀 Features

- **User Authentication:** JWT-based authentication with secure cookies  
- **Real-time Messaging:** Socket.IO integration for instant messaging  
- **Image Upload:** Cloudinary integration for profile pictures and message images  
- **User Management:** User registration, login, and profile updates  
- **Online Status:** Track and display online users  
- **Message History:** Persistent message storage with MongoDB  

---

## 🛠️ Tech Stack

- **Node.js** - Runtime environment  
- **Express.js** - Web framework  
- **MongoDB** - Database  
- **Mongoose** - MongoDB ODM  
- **Socket.IO** - Real-time communication  
- **JWT** - Authentication  
- **bcrypt** - Password hashing  
- **Cloudinary** - Image storage  
- **CORS** - Cross-origin resource sharing  

---

## 📋 Prerequisites

- Node.js (v14 or higher)  
- MongoDB database  
- Cloudinary account  

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/theprotocol-backend.git
cd theprotocol-backend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb://localhost:27017

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key

# Cloudinary Configuration
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET_KEY=your-secret-key

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

### 4. Start the server

```bash
# Development
npm run dev

# Production
npm start
```

---

## 📁 Project Structure

```
├── config/
│   ├── cloudinary.config.js    # Cloudinary configuration
│   ├── mongodb.config.js       # MongoDB connection
│   ├── socket.js               # Socket.IO setup
│   └── utils.js                # Utility functions
├── controllers/
│   ├── auth.controller.js      # Authentication logic
│   └── message.controller.js   # Message handling
├── middleware/
│   └── auth.middleware.js      # JWT authentication middleware
├── models/
│   ├── user.model.js           # User schema
│   └── message.model.js        # Message schema
├── routes/
│   ├── auth.route.js           # Authentication routes
│   └── message.route.js        # Message routes
├── server.js                   # Main application file
└── package.json
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 📞 Support

If you encounter any issues, please create an issue on GitHub or contact the development team.

---

Built with ❤️ by **Mrunal Mehar**

```
