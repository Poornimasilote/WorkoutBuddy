🏋️ WorkoutBuddy
WorkoutBuddy is a full-stack MERN application for managing workouts with secure user authentication and protected routes.

🚀 Live Demo
Frontend: https://workout-buddy-drab.vercel.app
Backend: https://workoutbuddy-api-2z0q.onrender.com

🛠 Tech Stack
Frontend: React (Vite), Axios
Backend: Node.js, Express, MongoDB, Mongoose
auth: JWT, bcrypt

Deployment: Vercel, Render, MongoDB Atlas
✨ Features
User signup & login
JWT-based authentication
Protected workout routes
Create, read, update & delete workouts

User-specific data access
⚙️ Environment Variables

Backend
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret


Frontend
VITE_API_URL=https://your-backend.onrender.com

▶️ Run Locally
# Backend
cd server && npm install && npm run dev

# Frontend
cd client && npm install && npm run dev
