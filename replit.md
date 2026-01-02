# Bonzi Buddy Chat Application

## Overview
A real-time chat application featuring Bonzi Buddy characters using Socket.IO for real-time communication and Express for serving the frontend.

## Project Structure
```
/
├── server.js          # Main Express + Socket.IO server
├── config/
│   └── config.json    # Server configuration (godmode password)
├── bans.json          # Persistent ban storage
├── frontend/
│   ├── index.html     # Main entry point
│   ├── script.js      # Client-side JavaScript
│   ├── style.css      # Styles
│   ├── img/           # Images and assets
│   ├── font/          # Custom fonts
│   └── lib/           # Third-party libraries (jQuery, Socket.IO, etc.)
└── package.json       # Node.js dependencies
```

## Technology Stack
- **Backend**: Node.js with Express
- **Real-time**: Socket.IO v1.7.4
- **Frontend**: Vanilla JavaScript with jQuery
- **Graphics**: EaselJS for canvas rendering

## Running the Application
The server runs on port 5000 and serves both the API and static frontend files.

```bash
npm start
```

## Features
- Real-time chat with Bonzi Buddy characters
- Multiple character colors
- Chat rooms support
- Admin/godmode system
- IP-based ban system
- Alt account limiting (max 3 per IP)

## Configuration
- `config/config.json`: Contains godmode password
- `bans.json`: Persistent storage for IP bans

## Recent Changes
- 2025-12-30: Configured for Replit environment (port 5000, host 0.0.0.0)
