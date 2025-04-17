# 🎵 music_playlist

Full-stack music playlist app — build with Hono + Prisma + PostgreSQL + Zustand + Tailwind, inspired by Spotify.

---

## 🛠️ Tech Stack

- Backend: [Hono](https://hono.dev/) + [Prisma](https://www.prisma.io/) + PostgreSQL
- Frontend: React + TailwindCSS + Zustand + TanStack Router
- Auth & State: Local + Zustand
- Dev Tools: Bun, Docker, Railway

---

## 📦 Getting Started (Backend)

### 1. Build Docker

```bash
docker compose up --build
```

This will:

- Start the backend at `http://localhost:3001`
- Start PostgreSQL on port `5432`

### 2. Initialize Database

After Docker is running, you need to:

```bash
cd backend
bunx prisma migrate dev --name init
bun run seed
```

> Ensure `.env` is configured properly with `DATABASE_URL`.

---

## 📁 Folder Structure

```bash
/backend
  ├─ src/
  │   ├─ routes/
  │   ├─ services/
  │   ├─ repositories/
  │   ├─ domain/
  ├─ prisma/
  │   ├─ schema.prisma
  │   ├─ seed.ts
```

---

## 🚀 Run Frontend

The frontend is built with React + Vite.

### 1. Navigate to frontend directory

```bash
cd wwww
```

### 2. Install dependencies

```bash
bun install
# or
npm install
```

### 3. Run development server

```bash
bun dev
# or
npm run dev
```

Your frontend will be running at `http://localhost:3000` by default.

### 4. Configure environment (if needed)

Create a `.env` file in the frontend directory:

```
VITE_API_URL=http://localhost:3001
```
