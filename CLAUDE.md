# CLAUDE.md

This file provides guidance for AI assistants working on this codebase.

## Project Overview

Personal portfolio website for Nilesh, a Software & AI/ML Engineer. Built with **Next.js 15** (App Router) and **React 19** using **TypeScript**. Features advanced animations, 3D backgrounds, interactive components, and a multi-theme system.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15.3.x (App Router, Turbopack dev) |
| Language | TypeScript 5 (strict mode) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 + CSS variables (OKLCH color space) |
| UI Primitives | shadcn/ui (New York style) + Radix UI |
| Animations | Framer Motion, GSAP, React Spring, Tailwind Animate |
| 3D | Three.js + React Three Fiber + Drei |
| Icons | Lucide React |
| Code Editor | Monaco Editor |
| Forms | React Hook Form |
| Font | Fira Code (monospace, Google Fonts) |

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint (next/core-web-vitals + next/typescript)
```

There is no test suite configured. No unit/integration/e2e test runner exists.

## Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (font, header, footer, background effects)
│   ├── page.tsx                # Home page (composes all sections)
│   ├── globals.css             # Tailwind v4 theme, CSS variables, keyframes
│   ├── (components)/           # Layout-level shared components
│   │   ├── Header.tsx          # Navigation with scroll detection
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Dots.tsx            # Decorative dots animation
│   │   └── LineDeco.tsx        # Decorative line elements
│   ├── (sections)/home/        # Home page section components
│   │   ├── HeroSection.tsx     # Landing hero with CV download
│   │   ├── InteractiveSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── AboutMeSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── QuoteSection.tsx
│   │   └── ContactSection.tsx
│   ├── projects/page.tsx       # Projects listing with filtering
│   ├── about/page.tsx          # About page
│   └── contact/page.tsx        # Contact form page
├── components/                 # Reusable components
│   ├── 3d/                     # Three.js components (InteractiveBackground, LiquidBackground)
│   ├── interactive/            # Terminal emulator, CodePlayground (Monaco)
│   ├── transitions/            # PageTransition, PixelTransition
│   ├── ui/                     # shadcn/ui primitives + custom components
│   │   ├── button.tsx, card.tsx, input.tsx, etc.  # shadcn/ui
│   │   ├── Magnet.tsx, MagneticCursor.tsx         # Cursor effects
│   │   ├── SplitText.tsx, Spotlight.tsx           # Animation components
│   │   ├── SpotlightCard.tsx, TiltedCard.tsx      # Card variants
│   │   └── ThemeCustomizer.tsx                    # Multi-theme switcher
│   ├── magicui/                # Magic UI animated components
│   ├── widgets/                # GitHubActivity widget
│   └── ExpandableProjectCard.tsx
├── lib/
│   ├── projectsData.ts        # Centralized project data (single source of truth)
│   ├── utils.ts                # cn() utility (clsx + tailwind-merge)
│   └── logger.ts               # Logging utilities
public/
├── documents/                  # Resume/CV PDF
├── icons/                      # SVG icons
└── images/                     # Project screenshots, hero images
logger.js                       # Server-side file logger (root level)
```

## Key Conventions

### Path Aliases

Defined in `tsconfig.json`:
- `@/*` maps to `./src/*`
- `@/logger` maps to `./logger.js` (root-level server logger)

### Component Patterns

- **Server Components by default** — only add `"use client"` when the component needs browser APIs, hooks, or event handlers.
- **shadcn/ui** components live in `src/components/ui/` and use the New York style variant. Add new ones via `npx shadcn@latest add <component>`. The project also has a React Bits registry configured (`@react-bits` in `components.json`).
- **Custom UI components** (Magnet, SplitText, TiltedCard, etc.) also live in `src/components/ui/` but are hand-written, not from shadcn.
- Use the `cn()` helper from `@/lib/utils` for conditional/merged Tailwind classes.

### Styling

- **Tailwind CSS v4** configured via `@tailwindcss/postcss` (not a `tailwind.config` file).
- Theme tokens declared in `src/app/globals.css` using `@theme` and CSS custom properties with OKLCH color space.
- Brand colors: primary `#C778DD` (purple), secondary `#ABB2BF` (gray), accent `#61DAFB` (cyan), dark `#282C33`.
- Custom keyframe animations defined in `globals.css`: `fadeIn`, `slideUp`, `scaleIn`, `glow`.
- Light/dark mode support via `.dark` class and CSS variable overrides.
- Body font is Fira Code monospace applied globally.

### Data

- All project data is centralized in `src/lib/projectsData.ts`. Add new projects there — do not hardcode project info in components.
- Projects have categories: `fullstack`, `frontend`, `ai`, `tool`.
- Projects have statuses: `completed`, `in-progress`, `planned`.

### Animation Libraries

Four animation systems are in use — choose based on context:
1. **Framer Motion** — primary choice for React component animations (mount/unmount, layout, gestures).
2. **GSAP** — used for timeline-based scroll animations and complex sequencing.
3. **React Spring** — physics-based spring animations.
4. **Tailwind Animate** — simple CSS utility animations via classes.

### Routing

Next.js App Router with file-based routing:
- Route groups `(components)` and `(sections)` organize files without affecting URL paths.
- Pages: `/`, `/projects`, `/about`, `/contact`.

### Root Layout

`src/app/layout.tsx` renders the global shell: Spotlight effect, LiquidBackground (3D), MagneticCursor, Header, PageTransition wrapper, Footer, and ThemeCustomizer. All pages inherit this layout.

## Configuration Files

| File | Purpose |
|------|---------|
| `next.config.ts` | Next.js config (minimal, defaults) |
| `tsconfig.json` | TypeScript strict mode, path aliases |
| `eslint.config.mjs` | ESLint flat config (next/core-web-vitals + next/typescript) |
| `postcss.config.mjs` | PostCSS with `@tailwindcss/postcss` |
| `components.json` | shadcn/ui config (New York style, Lucide icons, path aliases) |

## Static Assets

- Place images in `public/images/` (referenced as `/images/...` in code).
- Place icons in `public/icons/`.
- Resume PDF lives at `public/documents/`.

## Common Tasks

### Adding a new project
1. Add an entry to the `projectsData` array in `src/lib/projectsData.ts`.
2. Place the project image in `public/images/projects/`.
3. Set `featured: true` if it should appear on the home page.

### Adding a new shadcn/ui component
```bash
npx shadcn@latest add <component-name>
```
Components are installed to `src/components/ui/`.

### Adding a new page
Create `src/app/<route>/page.tsx`. It will automatically inherit the root layout with header, footer, and background effects.

### Adding a new home page section
1. Create the component in `src/app/(sections)/home/`.
2. Import and place it in `src/app/page.tsx`.

## Things to Watch Out For

- **No testing infrastructure** — there are no tests. Be extra careful with changes and verify the build passes (`npm run build`).
- **Multiple animation libraries** — avoid mixing animation systems within a single component. Pick one.
- **Tailwind v4 syntax** — uses `@theme` directive and `@tailwindcss/postcss`, not the older `tailwind.config.js` approach.
- **Server vs Client components** — the root layout uses client components for interactivity (3D, cursor, transitions). New components should default to server unless they need client features.
- **No environment variables** — social links and contact info are currently hardcoded. No `.env` files are needed to run the project.
- **Logger at root** — `logger.js` is a server-side file logger at the project root (not in `src/`). It writes to a `logs/` directory.
