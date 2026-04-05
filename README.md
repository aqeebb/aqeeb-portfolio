# Aqeeb Portfolio — Setup Guide

## Project Structure
```
aqeeb-portfolio/
├── src/                  ← React frontend (deploy on Vercel / GitHub Pages)
│   └── components/
│       └── Contact.jsx   ← Updated to call YOUR backend
├── server/               ← Node.js backend (deploy SEPARATELY on Vercel)
│   ├── api/
│   │   └── send-email.js ← Serverless function
│   ├── package.json
│   └── vercel.json
└── ...
```

---

## Step 1 — Deploy the Backend (server folder)

1. Copy the `server/` folder into a **new separate GitHub repo** (e.g. `aqeeb-portfolio-server`)
2. Go to [vercel.com](https://vercel.com) → **New Project** → import that repo
3. In Vercel dashboard → **Settings → Environment Variables**, add:
   - `GMAIL_USER` → `mohamedaqeeb14@gmail.com`
   - `GMAIL_APP_PASS` → your Gmail App Password (see below)
4. Deploy — Vercel gives you a URL like `https://aqeeb-portfolio-server.vercel.app`

### Getting Gmail App Password
1. Go to [myaccount.google.com](https://myaccount.google.com) → Security
2. Enable **2-Step Verification**
3. Search **App Passwords** → Create for "Mail"
4. Copy the 16-character password → paste as `GMAIL_APP_PASS`

---

## Step 2 — Update Frontend with Backend URL

Open `src/components/Contact.jsx` and replace line 4:
```js
// Change this:
const API_URL = 'https://YOUR-SERVER.vercel.app/api/send-email'

// To your actual Vercel URL:
const API_URL = 'https://aqeeb-portfolio-server.vercel.app/api/send-email'
```

---

## Step 3 — Deploy Frontend

```bash
npm install
npm run build
```
Deploy the `dist/` folder to Vercel or GitHub Pages. Done! ✅
