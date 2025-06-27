🎧 Spotify Clone – Full-Stack Music Web App
Welcome to the Spotify Clone, a fully responsive, full-stack music streaming web application inspired by the functionality and design of Spotify — built from scratch using React, Node.js, Express, and MongoDB.

This project was built to strengthen full-stack development skills while creating a practical, real-world application that combines authentication, API integration, and responsive UI/UX.

🚀 Live Preview
🌐 Frontend:[Deployed on Netlify](https://spotify-clone-by-devpranayk.netlify.app/)

✨ Key Features
Feature	Description
🔐 User Authentication	Secure Login & Signup with hashed passwords and JWT-based session handling.
🧠 Dynamic Music Data	Music categories and artist sections powered by MongoDB.
🗂️ Filtered Browsing	Browse music by categories like Trending, Artists, and Language.
📱 Responsive Design	Seamless experience across desktop, tablet, and mobile devices.

🧰 Tech Stack
Frontend
React.js + Vite

React Toastify for notifications

React Router for navigation

Context API for global auth state

Backend
Node.js with Express.js

MongoDB Atlas (Cloud-hosted database)

Mongoose for schema modeling

bcrypt.js for password hashing

jsonwebtoken for secure token-based login

dotenv for environment variables

CORS for API communication

🔄 How It Works
1. 🔑 Authentication Flow
Users can register with email & password.

Passwords are hashed using bcrypt before storing.

On login, JWT token is generated and sent to frontend.

Token is stored in memory (via context) and sent with requests if needed.

Logout clears user state and token.

2. 🎵 Music Display
Music and artist data are stored in MongoDB.

Backend exposes REST APIs:

GET /api/songs

GET /api/artists

Data is fetched on component mount and rendered in sections.

3. 🎨 UI & UX
Login and Signup pages are styled with immersive backgrounds and animations.

Navbar updates dynamically based on auth status (shows username & logout).


🎯 Goals Behind This Project
Learn and implement full-stack authentication.

Build reusable, scalable UI components.

Replace static config data with real API responses.

Write clean, modular code both on frontend and backend.

Practice real-world Git workflow (commits, branches, environment variables).

💼 Why This Project Matters to Recruiters
This isn’t just a "clone." It’s a demonstration of full-stack capability, architectural thinking, and clean UI development — with attention to detail that mimics the workflows of real product teams.

✅ Authentication flow from scratch

✅ Clean separation of frontend/backend

✅ Component-based development

✅ Real APIs & MongoDB data modeling

✅ Responsive & accessible UI

✅ Commit history that reflects agile-style iterations


📣 Final Note
This project is the result of continuous learning, debugging, and refining. It reflects my passion for building meaningful web applications and my ability to bring ideas to life with code — both on the frontend and backend.

If you're a recruiter or collaborator interested in this project, I’d love to chat more about how I built it, what I learned, and where it can go from here. ✌️

EMail : pranayk74174174@gmail.com
