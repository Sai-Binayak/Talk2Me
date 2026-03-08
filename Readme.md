# HelpMe - Chat Application 

## Backend

### > Tech Stack

* Node.js
* Express.js
* MongoDB (planned for database)
* Mongoose (for database modeling)
* JSON Web Token (JWT) for authentication
* bcryptjs for password hashing
* dotenv for environment variables
* cookie-parser for handling cookies
* Cloudinary (planned for media uploads)
* Socket.io (planned for real-time chat)

---

## Project Setup

### 1. Clone the repository

```
git clone <repository-url>
cd backend
```

---

### 2. Install dependencies

Run the following command to install required packages:

```
npm install express mongoose dotenv jsonwebtoken bcryptjs cookie-parser cloudinary socket.io
```

Install nodemon for development:

```
npm install nodemon -D
```

---

### 3. Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4. Running the server

Start the development server using:

```
npm run dev
```

Or run normally with:

```
node server.js
```

The server will start on:

```
http://localhost:5001
```

---

## Current Project Structure

```
backend
│
├── routes
│   └── authRoutes.js
│
├── controllers
│   └── authController.js
│
├── src
│   └── index.js
```

---

## Current API Routes

The following authentication routes are currently defined:

```
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout
```

These routes are placeholders and will later contain the full authentication logic.

---

## Next Steps

Upcoming features to be implemented:

* MongoDB database connection
* User model using Mongoose
* Signup and login logic
* Password hashing with bcrypt
* JWT authentication
* Real-time chat using Socket.io
* Image upload using Cloudinary
