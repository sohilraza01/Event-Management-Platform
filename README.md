# Event Management Platform

## Overview
The Event Management Platform is a full-stack web application that allows users to create, manage, and view events. It includes user authentication, event creation tools, real-time updates for attendees.

## Features
### Frontend (Vite + React.js)
- User Authentication (Register/Login with JWT-based authentication)
- Event Dashboard (View upcoming and past events with filters)
- Event Creation (Create and manage events with details like name, description, date, etc.)
- Real-Time Attendee Updates (Using WebSockets)
- Responsive Design (Fully functional across all devices)

### Backend (Node.js + Express.js)
- Authentication API (JWT-based authentication)
- Event Management API (CRUD operations for events with ownership restrictions)
- Real-Time Updates (WebSockets for live attendee updates)
- Database (MongoDB for storing event and user data)

## Tech Stack
### Frontend
- Vite (React.js)
- Tailwind CSS (For styling)
- React Router (For navigation)
- React Query/Axios (For API calls)
- Socket.io-client (For real-time updates)

### Backend
- Node.js + Express.js (API and server-side logic)
- MongoDB (Database for storing users and events)
- Mongoose (For database modeling)
- JSON Web Token (JWT) (For authentication)

## Installation & Setup
### Prerequisites
- Node.js installed
- MongoDB Atlas account

### Backend Setup
```bash
cd backend
npm install
npm run server
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Usage
1. Register/Login to the platform.
2. Create new events and manage them from the dashboard.
3. View upcoming and past events with filtering options.
4. See real-time updates on event attendees.

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user and get JWT token

### Events
- `POST /api/events` - Create a new event
- `GET /api/events` - Fetch all events
- `PUT /api/events/:id` - Update an event
- `DELETE /api/events/:id` - Delete an event

### Real-Time Updates
- WebSockets used for live attendee tracking.

Feel free to contribute or suggest improvements.