# Kofeetek Frontend

React + Vite frontend for kofeetek.in

## Local Development

```bash
npm install
cp .env.example .env
# Edit .env → set VITE_API_URL=http://localhost:5000 for local dev
npm run dev
# Opens at http://localhost:3000
```

## Build for Production

```bash
npm run build
# Output goes to dist/ folder
```

## Deploy to Vercel (recommended for frontend)

1. Push this folder to a GitHub repo (e.g. `kofeetek-frontend`)
2. Go to https://vercel.com → New Project → Import that repo
3. Framework: **Vite** (auto-detected)
4. Add Environment Variables in Vercel dashboard:
   - `VITE_SUPABASE_URL` → your Supabase URL
   - `VITE_SUPABASE_ANON_KEY` → your Supabase anon key
   - `VITE_API_URL` → `https://api.kofeetek.in` (your backend URL)
5. Click Deploy

## Custom Domain (kofeetek.in)

In Vercel dashboard → Project → Settings → Domains:
- Add `kofeetek.in`
- Add `www.kofeetek.in`

Then in your domain registrar (GoDaddy/Namecheap etc.):
- Add A record: `@` → `76.76.21.21` (Vercel IP)
- Add CNAME: `www` → `cname.vercel-dns.com`
