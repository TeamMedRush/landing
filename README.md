# MedRush — Hyper-Local Pharmacy Quick-Commerce

> Your medicines delivered in minutes. Built by Aditya Prasad Dash & Vinay Kumar Chopra, under the supervision of Dr. Uma Shankar Varri.

---

## Organization Repositories

| Repo | Description | Default Port |
|------|-------------|-------------|
| `landing` | Public landing page (Next.js) | `3000` |
| `server` | Backend REST API (FastAPI + SQLite/PostgreSQL) | `8000` |
| `shop` | User PWA — search, cart, checkout (Next.js) | `3001` |
| `partner-portal` | Partner order dashboard (Next.js) | `3002` |
| `admin-panel` | Admin panel — orders, SLA, refunds (Next.js) | `3003` |
| `gigs` | Gig rider portal (Next.js) | `3004` |

---

## Tech Stack

**Backend:** FastAPI · SQLAlchemy · SQLite (dev) / PostgreSQL (prod) · PyJWT · Passlib/bcrypt  
**Frontend:** Next.js 15 (App Router) · React · TypeScript  
**Auth:** Phone OTP (mocked SMS) + Email/Password · JWT access + refresh tokens · httpOnly cookies

---

## Local Development Setup

### Prerequisites
- Python 3.11+
- Node.js 20+
- `git`

### 1. Clone all repos (from your org)

```bash
# Run this inside your workspace root (e.g. Desktop/MedRush/)
git clone https://github.com/MedRushApp/server
git clone https://github.com/MedRushApp/landing
git clone https://github.com/MedRushApp/shop
# git clone https://github.com/MedRushApp/partner-portal
# git clone https://github.com/MedRushApp/admin-panel
# git clone https://github.com/MedRushApp/gigs
```

---

### 2. Start the Backend (`server`)

```bash
cd server

# Create and activate virtual environment
python -m venv venv
.\venv\Scripts\activate      # Windows
# source venv/bin/activate   # macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Create your .env file (NEVER commit this)
copy .env.example .env

# Run the dev server
uvicorn app.main:app --port 8000 --reload
```

📖 API docs available at **http://localhost:8000/docs**

> **OTP Testing:** OTPs are printed to the server console. Watch the terminal after clicking "Send OTP".

---

### 3. Start the Landing Page (`landing`)

```bash
cd landing
npm install
npm run dev          # Runs on http://localhost:3000
```

---

### 4. Start the Shop PWA (`shop`)

```bash
cd shop
npm install
npm run dev -- -p 3001   # Runs on http://localhost:3001
```

> The Shop connects to the backend at `http://localhost:8000`. Make sure the server is running first.

---

### 5. Start Other Portals (when ready)

```bash
cd partner-portal && npm install && npm run dev -- -p 3002
cd admin-panel    && npm install && npm run dev -- -p 3003
cd gigs           && npm install && npm run dev -- -p 3004
```

---

## Environment Variables

### `server/.env` (copy from `.env.example`)

```env
SECRET_KEY=medrush-super-secret-key-12345
ACCESS_TOKEN_EXPIRE_MINUTES=15
REFRESH_TOKEN_EXPIRE_DAYS=7
DATABASE_URL=sqlite+aiosqlite:///./medrush.db
```

> For production, replace `DATABASE_URL` with your PostgreSQL connection string.

---

## Authentication Flows

| Portal | Method | Role |
|--------|--------|------|
| Shop | Phone OTP **or** Email + Password | USER |
| Partner Portal | Phone OTP only | PARTNER |
| Admin Panel | Email + Password only | ADMIN |
| Gigs Portal | Phone OTP only | GIG |

JWT tokens are stored in **httpOnly cookies** (set via Next.js API proxy routes) to prevent XSS.

---

## API Endpoints (v1)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/v1/auth/send-otp` | — | Send OTP to phone |
| POST | `/api/v1/auth/verify-otp` | — | Verify OTP → JWT pair |
| POST | `/api/v1/auth/register` | — | Register with email+password |
| POST | `/api/v1/auth/login` | — | Login with email+password |
| POST | `/api/v1/auth/refresh` | Refresh token | Renew access token |
| POST | `/api/v1/auth/logout` | Access token | Clear session cookies |
| GET | `/api/v1/auth/me` | Access token | Get current user |

---

## Security Notes

- `.env` files are in `.gitignore` — **never commit secrets**
- Tokens are in **httpOnly cookies** — never exposed to JavaScript
- SMS is mocked in development (OTP printed to server logs)
- To use a real SMS provider, replace `app/services/otp_service.py`'s `send_sms_otp()` function with Fast2SMS/MSG91

---

## Project Team

| Name | Roll No |
|------|---------|
| Aditya Prasad Dash | 2023EBCS712 |
| Vinay Kumar Chopra | 2023EBCS765 |

**Supervisor:** Dr. Uma Shankar Varri
