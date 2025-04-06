🏡 MERN Estate – Real Estate Marketplace
A full-stack real estate platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js), styled using Tailwind CSS, and featuring JWT authentication, Google OAuth login, and Firebase image storage. Users can list, manage, and search for properties via a responsive, intuitive UI.

✨ Features
🔐 Authentication
Email/password login secured with JWT

Google OAuth login integration

Cookie-based token validation for protected routes

🏠 Listings Management
Full CRUD operations: Create, Read, Update, Delete

Upload multiple listing images via Firebase Storage

🔍 Advanced Search & Pagination
Filter listings by title, price, type, etc.

MongoDB aggregation for fast filtering, sorting, and pagination

👤 User Dashboard
Manage personal listings and profile info

Upload and change profile pictures

One-click account deletion

🧱 Tech Stack          Layer	Technology
Frontend	             React.js, Vite, Tailwind CSS, Redux Toolkit
Backend	               Node.js, Express.js
Database	             MongoDB Atlas
Auth	                 JWT, Google OAuth
Image Upload	         Firebase Storage
Deployment	           Render


🚀 Getting Started
📋 Prerequisites
1. Node.js & npm
2. MongoDB Atlas account
3. Firebase project (for image storage)
4. Google Developer account (for OAuth)

🛠️ Installation
# Clone the repository
git clone https://github.com/jhanyu2019/mern-estate.git
cd mern-estate

# Install dependencies
npm install

# Create a .env file in the root directory with the following:
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_api_key
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret

# Start the development server
npm run dev


