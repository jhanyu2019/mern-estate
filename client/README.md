MERN Estate – Real Estate Marketplace
A full-stack real estate platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js), with Tailwind CSS for styling, JWT for secure authentication, Firebase for image storage, and Google OAuth integration. The application enables users to list, manage, and search for properties through a responsive and intuitive interface.

Features
Authentication
Email/password authentication with JWT

Google OAuth integration for seamless login

Listings Management
Full CRUD operations: Create, Read, Update, and Delete property listings

Multiple image uploads via Firebase Storage

Advanced Search
Filter listings by title, price, type, etc.

Sorting and pagination using efficient MongoDB queries

User Dashboard
Manage personal listings and profiles

Upload profile images

Account deletion with cookie-based JWT validation

Frontend
Developed with React.js and Vite

Tailwind CSS for modern UI

React Router for client-side routing

Redux Toolkit for state management

Deployment
Easily deployable to platforms such as Render

Tech Stack
Layer	Technology
Frontend	React.js, Vite, Tailwind CSS, Redux Toolkit
Backend	Node.js, Express.js
Database	MongoDB (Atlas)
Authentication	JWT, Google OAuth
Image Storage	Firebase Storage
Deployment	Render
Getting Started
Prerequisites
Node.js and npm

MongoDB Atlas account

Firebase account for image handling

Google Developer account (for OAuth credentials)

Installation：
# Clone the repository
git clone https://github.com/jhanyu2019/mern-estate.git
cd mern-estate

# Install dependencies
npm install

# Set up environment variables
# Create a .env file in the root directory and add the following:
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_api_key
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret

# Start the development server
npm run dev