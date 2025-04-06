# 🏡 MERN Estate – Real Estate Marketplace

A full-stack real estate platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js), styled using Tailwind CSS. This project features secure JWT authentication, Google OAuth login, Firebase image storage, and a modern responsive UI for listing, managing, and searching real estate properties.

---

## ✨ Features

- 🔐 **Authentication**
  - Email/password login secured with JWT
  - Google OAuth login integration
  - Cookie-based token validation for protected routes

- 🏠 **Listings Management**
  - Full CRUD operations: Create, Read, Update, Delete
  - Upload multiple listing images via Firebase Storage

- 🔎 **Advanced Search & Pagination**
  - Filter listings by title, price, type, and more
  - MongoDB aggregation for fast filtering and sorting

- 👤 **User Dashboard**
  - Manage personal listings and profile info
  - Upload/change profile pictures
  - One-click account deletion

---

## 🛠 Tech Stack

**Frontend**
- React.js
- Vite
- Tailwind CSS
- Redux Toolkit

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB Atlas

**Auth**
- JWT
- Google OAuth

**Image Upload**
- Firebase Storage

**Deployment**
- Render

---

## 🚀 Getting Started

### 📋 Prerequisites

1. [Node.js & npm](https://nodejs.org/)
2. [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas)
3. [Firebase project](https://firebase.google.com/) (for image storage)
4. [Google Developer account](https://console.cloud.google.com/) (for OAuth)

---

### ⚙️ Installation

#### 1. Clone the repository

```bash
git clone https://github.com/jhanyu2019/mern-estate.git
cd mern-estate
```

#### 2. Install dependencies

```bash
npm install
```

#### 3. Set environment variables

Create a `.env` file in both `client/` and `api/` folders as needed. Example:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

#### 4. Run the project locally

```bash
# For backend (api)
cd api
npm install
npm run dev

# For frontend (client)
cd ../client
npm install
npm run dev
```

---
