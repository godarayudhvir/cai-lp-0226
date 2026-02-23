# Cyber Alliance India — Astro Website

> **Built with Intent.** Rebuilt from scratch with Astro 4 + Tailwind CSS for performance, maintainability, and clean architecture.

---

## 🚀 Quick Start

### Prerequisites
- Node.js **18.17+** or **20+**
- npm / pnpm / yarn

### 1. Install dependencies

```bash
npm install
```

### 2. Start dev server

```bash
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321)

### 3. Build for production

```bash
npm run build
npm run preview   # preview the built site locally
```

---

## 📁 Project Structure

```
cyber-alliance-astro/
├── public/
│   ├── assets/
│   │   └── img/
│   │       └── logo.jpeg          ← Put your logo here
│   └── posts/
│       ├── 1.md                   ← Blog post 1
│       └── 2.md                   ← Blog post 2 (add more sequentially)
│
├── src/
│   ├── components/
│   │   ├── Navbar.astro           ← Shared navigation (home + page variants)
│   │   ├── Footer.astro           ← Shared footer (full + minimal variants)
│   │   └── sections/
│   │       ├── Hero.astro         ← Landing hero with CTA
│   │       ├── ClientSlider.astro ← Infinite scroll client logos
│   │       ├── About.astro        ← About + YouTube background video
│   │       ├── Services.astro     ← 4 service cards
│   │       ├── Testimonials.astro ← Auto-scrolling reviews
│   │       ├── VideoTestimonials.astro ← Client story videos
│   │       ├── Blog.astro         ← Dynamic blog from /posts/*.md
│   │       ├── Videos.astro       ← IBRACORP YouTube embeds
│   │       └── Contact.astro      ← Contact form + social links
│   │
│   ├── data/
│   │   └── site.ts                ← ⭐ SINGLE SOURCE OF TRUTH for all site config
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro       ← HTML shell, SEO meta, analytics, Chatwoot
│   │   └── PolicyLayout.astro     ← Wrapper for legal/policy pages
│   │
│   ├── pages/
│   │   ├── index.astro            ← Homepage
│   │   ├── pricing.astro          ← /pricing
│   │   ├── referral.astro         ← /referral
│   │   ├── portfolio.astro        ← /portfolio
│   │   ├── privacy.astro          ← /privacy
│   │   ├── terms.astro            ← /terms
│   │   └── 404.astro              ← Custom 404
│   │
│   └── styles/
│       └── global.css             ← Global Tailwind + custom CSS
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## ⚙️ Configuration

**All site-wide data lives in `src/data/site.ts`** — edit this file to update:

| Key | Purpose |
|-----|---------|
| `SITE.email` | Contact email address |
| `SITE.phone` | Phone / WhatsApp number |
| `SITE.umamiId` | Umami Analytics website ID |
| `SITE.chatwootToken` | Chatwoot website token |
| `SITE.web3formsKey` | Web3Forms access key |
| `SITE.socials` | All social media URLs |
| `CLIENTS` | Scrolling client logo names |
| `TESTIMONIALS` | Client review cards |
| `SERVICES` | The 4 service offerings |
| `IBRACORP_VIDEOS` | YouTube video IDs in the videos section |

---

## 📝 Adding Blog Posts

Blog posts are plain Markdown files in `public/posts/`. They are fetched client-side.

1. Create `public/posts/2.md` (increment the number)
2. Follow this format:

```markdown
# Your Post Title

> Short description shown on the card.

![Image Alt](https://your-image-url.com/image.jpg)

## Section heading

Your content here...
```

The blog section will automatically pick up new posts.

---

## 🌐 Deployment

### Cloudflare Pages (Recommended)

1. Push to GitHub
2. In Cloudflare Pages → Create project → Connect to Git
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Done — auto-deploys on every push

### GitHub Pages

Add to `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repo-name', // only if deploying to subpath
});
```

### Vercel / Netlify

Zero-config — just connect your repo.

---

## 🔄 URL Changes from Old Site

| Old path | New path |
|----------|---------|
| `/index.html` | `/` |
| `/forge/links/services-pricing.html` | `/pricing` |
| `/forge/links/referral-policy.html` | `/referral` |
| `/forge/links/privacy-policy.html` | `/privacy` |
| `/forge/links/terms-of-service.html` | `/terms` |
| `/forge/index.html` | `/portfolio` |

Add redirects in Cloudflare Pages → Settings → Redirects, or in a `_redirects` file in `public/`:

```
/forge/links/services-pricing.html  /pricing  301
/forge/links/referral-policy.html   /referral 301
/forge/links/privacy-policy.html    /privacy  301
/forge/links/terms-of-service.html  /terms    301
/forge/index.html                   /portfolio 301
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [Astro 4](https://astro.build) | Static site framework (zero JS by default) |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [TypeScript](https://typescriptlang.org) | Type safety across components |
| [Umami](https://umami.is) | Privacy-respecting analytics |
| [Chatwoot](https://chatwoot.com) | Live chat widget |
| [Web3Forms](https://web3forms.com) | Form submissions without a backend |
| [Cashfree](https://cashfree.com) | Payment processing |
| [Bootstrap Icons](https://icons.getbootstrap.com) | Icon set |

---

## 📄 License

© 2025 Cyber Alliance India. All rights reserved.
