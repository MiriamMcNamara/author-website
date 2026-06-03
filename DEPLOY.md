# Deployment guide

## 1. Install dependencies

Open Terminal, navigate to this folder, and run:

```bash
cd "path/to/Mimi's Author Website"
npm install
npm run dev       # preview locally at http://localhost:5173
npm run build     # make sure it builds cleanly before pushing
```

---

## 2. Set up Formspree (contact form)

1. Go to [formspree.io](https://formspree.io) and create a free account using **mimiwritesbooks@icloud.com**
2. Create a new form — name it anything (e.g. "Website contact")
3. Copy the form ID (looks like `xabc1234`)
4. Open `src/components/Contact.tsx` and replace `'YOUR_FORM_ID'` with your actual ID:
   ```ts
   const FORMSPREE_ID = 'xabc1234'
   ```
Free tier: 50 submissions/month, more than enough for a personal site.

---

## 3. Add your photo

Drop a headshot in the `public/` folder (e.g. `public/headshot.jpg`).

Then open `src/components/About.tsx` and replace the placeholder div with:
```tsx
<img src="/headshot.jpg" alt="Miriam McNamara" className={styles.photo} />
```

---

## 4. Add book covers (optional but nice)

Drop cover images in `public/covers/` (e.g. `public/covers/mary-reade.jpg`).

In `src/components/Books.tsx`, find the `BookCover` component and swap the placeholder div for:
```tsx
<img src="/covers/mary-reade.jpg" alt="Cover of The Unbinding of Mary Reade" />
```

Your publisher or agent should be able to provide high-res cover files.

---

## 5. Push to GitHub

```bash
cd "path/to/Mimi's Author Website"
git init
git branch -m main
git config user.email "miriammcnamara@icloud.com"
git config user.name "Miriam McNamara"
git add -A
git commit -m "Initial commit"
```

Then on GitHub.com:
1. Click **New repository**
2. Name it `miriammcnamara-website` (or whatever you like)
3. Leave it **public** (required for free Netlify deploys — your code is not sensitive)
4. Do **not** initialize with a README (you already have files)
5. Copy the remote URL it gives you, then run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/miriammcnamara-website.git
git push -u origin main
```

---

## 6. Deploy to Netlify (free, ~2 minutes)

1. Go to [netlify.com](https://netlify.com) and sign up with GitHub
2. Click **Add new site → Import an existing project**
3. Choose your GitHub repo
4. Netlify auto-detects Vite — build settings should be:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**

Your site will be live at a random URL like `dreamy-curie-123.netlify.app` in about 30 seconds.

---

## 7. Point miriammcnamara.com to Netlify

In Netlify:
1. Go to **Site settings → Domain management → Add custom domain**
2. Enter `miriammcnamara.com`
3. Netlify will tell you to update your DNS — note the values it gives you

In Squarespace (your current domain registrar):
1. Go to your Squarespace account → **Domains**
2. Click on `miriammcnamara.com` → **DNS Settings**
3. Delete any existing A records pointing to Squarespace
4. Add the A record / CNAME values Netlify gave you

DNS propagates in 15 minutes to a few hours. Netlify auto-provisions a free SSL certificate (HTTPS) once it sees your domain.

---

## 8. (Optional) Transfer domain to Cloudflare

If you want to own your domain independently of Squarespace (recommended long-term):

1. Create a free account at [cloudflare.com](https://cloudflare.com)
2. Go to **Domain Registration → Transfer domain**
3. Enter `miriammcnamara.com` and follow the steps
4. You'll need to unlock the domain in Squarespace first: **Domains → miriammcnamara.com → Advanced Settings → Domain Lock: Off**
5. Squarespace will email you a transfer authorization code
6. Cloudflare charges at-cost (~$9/year, no markup)

Once transferred, set DNS records in Cloudflare the same way as Step 7 above.

---

## Future updates

To make changes: edit files locally → `npm run build` to verify → `git add -A && git commit -m "description" && git push`. Netlify auto-deploys on every push to `main`.
