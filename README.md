# 📍 Live Tracking Application

A real-time location tracking app where multiple users can share their locations on a live map. Built with Express, Socket.io, Kafka, and Leaflet.

## Features

✨ **Real-time Location Updates** — Watch live location changes on an interactive map  
🔄 **Message Queue** — Uses Kafka for reliable message delivery  
🗺️ **Interactive Map** — Built with Leaflet and OpenStreetMap  
💬 **WebSocket Communication** — Instant updates via Socket.io

---

## Prerequisites

Before you start, make sure you have installed:

- **Node.js** (v18+) - [Download here](https://nodejs.org/)
- **Docker & Docker Compose** - [Download here](https://www.docker.com/products/docker-desktop)
- **pnpm** - Run: `npm install -g pnpm`

---

## Local Development

### 1. **Clone or Setup the Project**

```bash
cd LiveTracking
```

### 2. **Install Dependencies**

```bash
pnpm install
```

### 3. **Start Kafka (Required)**

```bash
docker-compose up -d
```

This starts both Zookeeper and Kafka in the background.

### 4. **Setup Kafka Topics**

```bash
node kafka-admin.js
```

This creates the required `location-updates` topic.

### 5. **Start the Application**

```bash
node index.js
```

You should see:

```
Server running on http://localhost:8000
```

### 6. **Open in Browser**

Go to: `http://localhost:8000`

Open multiple browser tabs/windows to see real-time location updates!



## Project Structure

```
LiveTracking/
├── index.js              # Main server file
├── kafka-client.js       # Kafka configuration
├── kafka-admin.js        # Topic setup script
├── public/
│   └── index.html        # Frontend (Leaflet map)
├── package.json          # Dependencies
├── docker-compose.yml    # Kafka + Zookeeper config
└── .gitignore           # Files to ignore in git
```

---

## Troubleshooting

### **"Cannot connect to Kafka"**

```bash
docker-compose down -v
docker-compose up -d
sleep 5
node kafka-admin.js
```

### **"Port 9092 already in use"**

```bash
docker-compose down
docker-compose up -d
```

### **"Cannot access localhost:8000"**

- Make sure Docker is running
- Make sure you ran `node index.js` in the right terminal
- Check if port 8000 is free

---

## Quick Start Commands

```bash
# Start everything
docker-compose up -d
sleep 5
node kafka-admin.js
node index.js

# Access the app
# Open browser: http://localhost:8000

# Expose to internet (new terminal)
ngrok http 8000

# Stop everything
docker-compose down
```

---


