# Evangadi Forum — Backend

REST API for the Evangadi Forum application. Built with Node.js, Express, and MySQL.

## Tech Stack
- Node.js / Express
- MySQL (mysql2)
- JWT (jsonwebtoken) for auth
- bcrypt for password hashing

## Environment Variables
Create a .env file:

DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=evangadi_forum
JWT_SECRET=your_jwt_secret
PORT=10000

## Getting Started
npm install
npm run dev

## API Endpoints

### Users
- POST /api/users/register
- POST /api/users/login
- GET  /api/users/check (auth required)

### Questions
- GET  /api/questions
- GET  /api/questions/:id
- POST /api/questions (auth required)

### Answers
- POST /api/answers (auth required)

## Notes
This repo contains backend only. The frontend lives in a separate repo: evangadi-frontend.
