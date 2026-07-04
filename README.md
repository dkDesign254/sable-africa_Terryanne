# Sable Africa — The Architecture of African Intelligence

A premium digital intelligence platform delivering structural clarity on African markets to global capital allocators and decision-makers. Not a news blog — an intelligence infrastructure that bridges veteran newsroom rigour with strategic theory, mapping the momentum of the African Economic Century.

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7)
- **Routing:** TanStack Router (file-based)
- **Styling:** Tailwind CSS v4
- **Fonts:** Playfair Display (headings), Inter (body), JetBrains Mono (data)
- **Build:** Bun runtime & package manager
- **Deployment:** Static SSR via Bun.serve on port 3000

## Design System

### Colours
| Token | Value | Usage |
|-------|-------|-------|
| Deep Sable Black | `#0A0A0A` | Dark mode backgrounds |
| Warm Ivory | `#F6F5F2` | Light mode backgrounds |
| Muted Gold | `#B59A5D` | Accents, CTAs, indicators |
| Slate Grey | `#2E3135` | Body text |
| Deep Forest | `#1E3027` | Secondary accent |
| Light Grey | `#F0EFEA` | Subtle backgrounds |

### Typography
- **Headings:** Playfair Display (400–700, italic)
- **Body:** Inter (300–600)
- **Data:** JetBrains Mono (400–500)

### Brand Voice
Measured, authoritative, intelligent, confident, minimal, prestigious, sophisticated, quiet luxury. Avoid: startup aesthetics, crypto vibes, excessive gradients, news blog feeling, corporate templates.

## Website Sections

1. **Hero** — Full-screen cinematic with animated economic network, live data indicators, and dual CTAs
2. **Trust Bar** — Scrolling logo marquee (Bloomberg, Reuters, FT, AfDB, etc.) + key stats
3. **Intelligence Dashboard** — 4 dark data cards (Market Heat Map, Currency Monitor, Regional Trends, Commodity Signals)
4. **Daily Brief** — Premium newsletter cards linking to full article pages
5. **Featured Investigations** — Magazine-style editorial storytelling
6. **Sable Weekend** — Monocle/FT Weekend inspired culture + lifestyle
7. **Why Sable Exists** — Founder narrative section
8. **Subscription** — Three-tier pricing (Free, Professional £49, Institutional Custom)
9. **CTA** — Closing statement
10. **Footer** — 4-column link grid, social icons, office locations
11. **AI Assistant** — Floating chat widget (conceptual demo)

### Dynamic Article Routes

| Route | Type | Content |
|-------|------|---------|
| `/brief/east-africa-infrastructure-paradox` | Brief | Infrastructure investment analysis |
| `/brief/the-refinery-that-could-rewire-african-finance` | Brief | Dangote Refinery financing |
| `/brief/signal-from-the-street` | Brief | Nairobi informal economy |
| `/brief/african-bond-markets-2026` | Brief | Sovereign debt recalibration |
| `/investigations/dangote-effect-refinery` | Investigation | Global energy flows |
| `/investigations/great-ethiopian-dam-negotiations` | Investigation | GERD geopolitics |
| `/weekend/48-hours-in-kigali` | Weekend | Kigali city profile |
| `/weekend/electric-hum-of-curious-people` | Weekend | Accra creative economy |
| `/weekend/library-of-lost-fortunes` | Weekend | African economic archives |

## Setup

```bash
# Install dependencies
bun install

# Development server (hot reload)
bun run dev

# Production build
bun run build

# Publish (build + deploy to port 3000)
bun run publish
```

### Prerequisites
- [Bun](https://bun.sh) v1.x or later
- Node.js 20+ (for compatibility)

## Architecture

```
src/
├── components/       # React components
│   ├── Nav.tsx              # Sticky navigation with 3-mode theme toggle
│   ├── Hero.tsx             # Cinematic hero with SVG network
│   ├── TrustBar.tsx         # Logo marquee + stats
│   ├── Dashboard.tsx        # Market data cards
│   ├── DailyBrief.tsx       # Newsletter cards linking to articles
│   ├── Investigations.tsx   # Magazine-style investigations
│   ├── SableWeekend.tsx     # Weekend edition cards
│   ├── WhySable.tsx         # Founder narrative
│   ├── Pricing.tsx          # Three-tier subscription
│   ├── CTA.tsx              # Closing call to action
│   ├── Footer.tsx           # Site footer
│   ├── AIAssistant.tsx      # Floating chat widget
│   └── ArticleLayout.tsx    # Shared article page layout
├── hooks/
│   └── useTheme.ts          # 3-mode theme hook (light/dark/system)
├── routes/
│   ├── __root.tsx           # HTML shell with fonts & SEO
│   ├── index.tsx            # Landing page
│   ├── brief/               # Daily Brief articles (4 routes)
│   ├── investigations/      # Investigations (2 routes)
│   └── weekend/             # Weekend articles (3 routes)
├── styles/
│   └── app.css              # Tailwind + custom animations
├── config.ts                # Framework configuration
└── serve.ts                 # Production server (port 3000)
```

## Deployment

The site is reverse-proxied behind a public URL and serves on **port 3000**. Run `bun run publish` to build and deploy. The server auto-frees the port across user boundaries.

### Theme System

Supports three modes:
- **Light** — Warm Ivory backgrounds
- **Dark** — Sable Black backgrounds  
- **System** — Follows OS preference (default on first visit)

Toggle cycles through system → light → dark → system. Preference stored in localStorage as `sable-theme`.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

Proprietary — Sable Africa Limited. All rights reserved.