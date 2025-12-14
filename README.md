# Chess Game - Microservices Monorepo



Full-stack chess game built with Spring Boot backend and React frontend microservices.



## Architecture

&nbsp;
┌──────────────────────────────────┐
│  Chess Frontend (React)          │
│  Port: 3000                      │
│  - Chess Board UI                │
│  - WebSocket Client              │
└────────────┬─────────────────────┘

            HTTP

┌────────────▼─────────────────────┐
│  Chess Backend (Spring Boot)     │
│  Port: 8080                      │
│  - REST API                      │
│  - WebSocket Server              │
│  - Game Logic                    │
└──────────────────────────────────┘


## Project Structure

&nbsp;
swap\_chess\_in\_java/
├── chess-backend-service/     # Spring Boot microservice
│   ├── src/
│   ├── pom.xml
│   └── README.md
│
├── chess-frontend-service/    # React microservice (to be created)
│   ├── src/
│   ├── package.json
│   └── README.md
│
└── README.md                  # This file


## Tech Stack





### Backend

* Java 24
* Spring Boot 3.2.0
* Spring Web
* Spring WebSocket
* Maven

### Frontend (Coming Soon)

* React 18
* WebSocket (SockJS + STOMP)
* Axios

## Quick Start





### Backend


cd chess-backend-service
./mvnw spring-boot:run



Backend will run on: http://localhost:8080

### 

//future plans

### Frontend (After creation)


cd chess-frontend-service
npm install
npm start


Frontend will run on: http://localhost:3000

## Development Status

* ✅ Backend service created and configured
* ✅ Java 24 configured in pom.xml
* ✅ Spring Boot running successfully
* ⏳ Frontend service (next step)
* ⏳ Chess game logic
* ⏳ WebSocket integration

## API Endpoints (To be implemented)

* POST /api/games - Create new game
* GET /api/games/{id} - Get game state
* POST /api/games/{id}/join - Join game
* WebSocket: /chess-websocket

## Author

Chess Game Microservices Project By DK

