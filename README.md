# preetham-reddy-portfolio

Personal portfolio website for **Preetham Reddy Matta** — Data Scientist specializing in ML pipelines, predictive modeling, forecasting, and statistical analysis.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + custom CSS (IBM Plex Mono · Playfair Display · Outfit)
- **Language:** TypeScript
- **Rendering:** Client-side animations with IntersectionObserver

## Design Direction

- Dark, analytical aesthetic — inspired by real-time data dashboards
- Teal + Amber accent palette with grain texture overlay
- Animated skill bars, staggered section reveals, live chart in hero
- Fully responsive (mobile-first breakpoints)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Main page (assembles sections)
│   └── globals.css      # Global styles + design tokens
├── components/
│   ├── Navbar.tsx       # Sticky navigation
│   ├── Hero.tsx         # Animated hero + live chart visual
│   ├── About.tsx        # Bio, education, certifications
│   ├── Projects.tsx     # Featured project cards with outcomes
│   ├── Experience.tsx   # Timeline-style work history
│   ├── Skills.tsx       # Animated skill bars + tech cloud
│   └── Contact.tsx      # CTA + contact links + footer
└── lib/
    └── data.ts          # All portfolio content (single source of truth)
```

## Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Customization

All content lives in `src/lib/data.ts`. Edit that file to:
- Update personal info, email, social links
- Add or modify projects, experience, and skills
- Adjust stats and metrics

No environment variables required. No external APIs. Works offline.

## Build for Production

```bash
npm run build
npm start
```
