# MedRush Landing Page

The public-facing landing page for **MedRush** — Hyperlocal Pharmacy Quick-Commerce. Built with Next.js 16 and Tailwind CSS v4.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- Responsive PWA-ready landing page
- Desktop: sticky navbar, full-width hero with pincode CTA, feature cards
- Mobile: PWA install banner, hamburger menu, stacked layout

## Project Structure

```
app/
  layout.tsx     # Root layout, metadata, font
  page.tsx       # Landing page
  globals.css    # Tailwind import + minimal base styles
public/
  hero-bg.jpg    # Hero background image
  medrush-logo.svg
```

## Environment Variables

No environment variables required for the landing page.
Create `.env.local` for any future additions (already in `.gitignore`).
