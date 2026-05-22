# MZ5 Digital — Marketing Site

Modern dark-theme agency site built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- Framer Motion
- Space Grotesk + Instrument Serif (accent italics)
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Deploy anywhere that supports Next.js (e.g. [Vercel](https://vercel.com)):

```bash
npm run build
npm run start
```

Or connect the repo to Vercel and use the default Next.js settings.

### SEO & link previews (WhatsApp, LinkedIn, etc.)

Set **`NEXT_PUBLIC_SITE_URL`** to your live URL (see `.env.example`). This ensures Open Graph images and canonical URLs use absolute HTTPS links — required for rich previews when sharing.

After deploying, refresh cached previews with the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) (also used by WhatsApp).

## Project structure

```
src/
├── app/
│   ├── page.tsx                 # Home
│   └── services/
│       ├── branding/
│       ├── web-development/
│       ├── seo/
│       └── ppc/
├── components/
│   ├── layout/                  # Header, Footer, dropdown, mobile nav
│   ├── sections/                # Hero, Services, Process, About, Contact
│   ├── services/                # Service page template
│   ├── ui/                      # Button, Logo, cards, headings
│   └── motion/                  # Scroll reveal animations
└── lib/site.ts                  # Content & navigation data
```

## Contact form emails

Submissions are sent via [Web3Forms](https://web3forms.com) from the browser.

1. Sign up at [web3forms.com](https://web3forms.com) with **muhammad.fahim@mz5digital.com**
2. Add your access key to `.env` as **`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`** (restart `npm run dev` after changing `.env`)
3. Add the same variable in your hosting provider's environment settings for production

## Customize

- **Copy & stats:** `src/lib/site.ts`
- **Logo:** replace `public/logo.png`
- **Colors:** CSS variables in `src/app/globals.css`
