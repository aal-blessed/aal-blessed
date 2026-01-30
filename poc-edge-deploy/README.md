# Project X - Edge Deployment POC

> ⚠️ INTERNAL TESTING ONLY - PRIVATE REPOSITORY

Minimal proof-of-concept for testing edge deployment platforms.

## Purpose

Test and validate:
- Auto-deployment from GitHub
- API endpoint functionality
- Response times
- Logging capabilities

## Structure

```
poc-edge-deploy/
├── frontend/
│   ├── index.html
│   └── style.css
├── api/
│   ├── server.js
│   ├── package.json
│   └── .gitignore
├── .env.example
├── README.md
└── TESTING.md
```

## Quick Start

1. Clone the repository
2. Copy `.env.example` to `api/.env`
3. Install dependencies:
   ```bash
   cd api
   npm install
   ```
4. Run the server:
   ```bash
   npm start
   ```
5. Open http://localhost:3000

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/health` | Health check |
| `GET /api/time` | Server time and region |
| `GET /api/echo` | Echo test with query params |

## Notes

- This is a minimal POC for internal testing
- Not intended for production use
- See TESTING.md for test procedures
