⭐ Like Me — Fullstack Project with React, Node.js, and PostgreSQL

Like Me is a mini social network developed as a fullstack project, where users can:

Create new posts with a title, image, and description

View all published posts

Give “likes” to any post

Delete posts

Interact with a REST API built with Node.js + Express

Store all data in a PostgreSQL database

This project is part of fullstack web development learning.

📌 Technologies Used
Frontend

React.js

Axios (API consumption)

Bootstrap 5 (styling)

Font Awesome (icons)

JSX + reusable components

Backend

Node.js

Express.js

pg (node-postgres)

dotenv

REST API with GET / POST / PUT / DELETE routes

Database

PostgreSQL

Table: posts

🧩 Main Features
Create Posts

Users can fill out a controlled form and submit posts to the database.

Display All Posts

Posts are rendered as cards, showing the image, title, description, and number of likes.

Like Posts

Each click on the heart icon increases the like counter by +1 and updates the database in real time.

Delete Posts

Clicking the “X” button permanently removes the selected post.

Uniform Cards

All cards maintain the same height and image size for a cleaner layout.

Controlled Form

Inputs are automatically cleared after a new post is submitted.

🗄️ Database Structure

The project uses a PostgreSQL database named likeme, with the following table:

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255),
  img VARCHAR(255),
  descripcion TEXT,
  likes INT
);

🚀 How to Run the Project
1. Clone the repository
git clone https://github.com/your-username/like-me.git

2. Install dependencies
Backend
cd backend
npm install

Frontend
cd frontend
npm install

3. Start the backend
npm start

4. Start the frontend (Vite or React Scripts)
npm run dev

🎯 Learning Objectives

This project was developed to practice:

Building a functional REST API

Connecting a PostgreSQL database

Consuming API endpoints from React

Implementing full CRUD operations

Managing state in React components

Working with controlled forms

Improving UI with Bootstrap
