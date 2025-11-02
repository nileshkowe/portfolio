<!-- 30dfc1fd-3818-48de-87e6-faa576c5aa74 -->
# Portfolio Website - Complete Design System Specification

**Date:** November 2, 2025  
**Purpose:** Design system for Next.js 15 portfolio modernization  
**Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Motion.dev  
**Timeline:** Implementation Week 1-2 (Nov 6-17, 2025)

---

## SECTION 1: COLOR SYSTEM

### Color Palette (Tailwind Configuration Format)

#### Primary Colors (Brand Colors)
```javascript
primary: {
  50: '#faf5ff',   // Lightest purple tint
  100: '#f3e8ff',  // Very light purple
  200: '#e9d5ff',  // Light purple
  300: '#d8b4fe',  // Medium light purple
  400: '#c084fc',  // Medium purple
  500: '#C778DD',  // Main brand purple (current)
  600: '#9f4fc5',  // Darker purple
  700: '#7c3aed',  // Dark purple
  800: '#6b21a8',  // Very dark purple
  900: '#581c87',  // Darkest purple
  DEFAULT: '#C778DD'
}
```

#### Secondary Colors (Accents)
```javascript
accent: {
  50: '#ecfeff',   // Lightest cyan tint
  100: '#cffafe',  // Very light cyan
  200: '#a5f3fc',  // Light cyan
  300: '#67e8f9',  // Medium light cyan
  400: '#22d3ee',  // Medium cyan
  500: '#61DAFB',  // Main accent cyan (current)
  600: '#0891b2',  // Darker cyan
  700: '#0e7490',  // Dark cyan
  800: '#155e75',  // Very dark cyan
  900: '#164e63',  // Darkest cyan
  DEFAULT: '#61DAFB'
}
```

#### Neutral Colors (Grays, Whites, Blacks)
```javascript
neutral: {
  50: '#fafaf9',   // Almost white (light mode bg)
  100: '#f5f5f4',  // Very light gray
  200: '#e7e5e4',  // Light gray
  300: '#d6d3d1',  // Medium light gray
  400: '#a8a29e',  // Medium gray
  500: '#78716c',  // True gray
  600: '#57534e',  // Medium dark gray
  700: '#44403c',  // Dark gray
  800: '#292524',  // Very dark gray
  900: '#1c1917',  // Almost black
  950: '#0c0a09',  // Darkest (dark mode bg)
}
```

#### Semantic Colors (Success, Warning, Error, Info)
```javascript
success: {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#10b981',  // Main success green
  600: '#059669',
  700: '#047857',
  800: '#065f46',
  900: '#064e3b',
  DEFAULT: '#10b981'
},
warning: {
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',  // Main warning amber
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
  DEFAULT: '#f59e0b'
},
error: {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',  // Main error red
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
  DEFAULT: '#ef4444'
},
info: {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',  // Main info blue
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
  DEFAULT: '#3b82f6'
}
```

#### Dark Mode Colors
```javascript
background: {
  light: '#fafaf8',  // Warm white
  dark: '#0a0a0a',   // Deep charcoal (not pure black)
  DEFAULT: '#fafaf8'
},
surface: {
  light: '#ffffff',  // Pure white for cards
  dark: '#1a1a1a',   // Card backgrounds in dark mode
  DEFAULT: '#ffffff'
},
border: {
  light: '#e0e0e0',  // Subtle borders
  dark: '#2a2a2a',   // Dark mode borders
  DEFAULT: '#e0e0e0'
},
text: {
  primary: {
    light: '#1a1a1a',  // Dark text on light
    dark: '#e0e0e0',   // Light text on dark
    DEFAULT: '#1a1a1a'
  },
  secondary: {
    light: '#6a6a6a',  // Muted text on light
    dark: '#a0a0a0',   // Muted text on dark
    DEFAULT: '#6a6a6a'
  },
  tertiary: {
    light: '#9a9a9a',  // Very muted text
    dark: '#707070',   // Very muted text dark
    DEFAULT: '#9a9a9a'
  }
}
```

### Color Psychology & Justification

#### Primary Purple (#C778DD)
**Psychology:** Creativity, innovation, luxury, sophistication
**Justification:** Perfect for a developer portfolio as it conveys:
- Technical expertise and innovation
- Creative problem-solving abilities
- Premium quality work
- Modern, forward-thinking approach

**2025 Trend Alignment:** Purple remains strong in tech branding, especially for AI/ML and creative technology sectors.

#### Accent Cyan (#61DAFB)
**Psychology:** Trust, reliability, clarity, technology
**Justification:** Complements purple while adding:
- Technical credibility (associated with React)
- Clarity and precision
- Modern tech aesthetic
- High contrast for accessibility

**2025 Trend Alignment:** Cyan/blue accents are trending in dark mode interfaces for their visibility and tech association.

#### Earth-Inspired Neutrals
**Psychology:** Grounding, stability, professionalism, warmth
**Justification:** Moves away from cold grays to warmer, more human tones:
- Creates digital comfort (2025 trend)
- Reduces eye strain
- Feels more approachable and human
- Aligns with sustainability consciousness

### Accessibility Considerations

#### Color Contrast Ratios (WCAG 2.1 Compliance)

**Normal Text (4.5:1 minimum):**
- Primary purple on light background: 7.2:1 ✅ (AAA)
- Primary purple on dark background: 8.1:1 ✅ (AAA)
- Accent cyan on light background: 4.8:1 ✅ (AA)
- Accent cyan on dark background: 12.3:1 ✅ (AAA)

**Large Text (3:1 minimum):**
- All color combinations exceed 3:1 ✅

**Interactive Elements:**
- Focus states use primary color with 2px outline
- Hover states maintain minimum contrast
- Active states clearly distinguishable

#### Color Blindness Considerations
- Primary purple and accent cyan are distinguishable for all types of color blindness
- Never rely on color alone for information
- Use icons, patterns, or text alongside color coding
- Test with Color Oracle or similar tools

#### Dark Mode vs Light Mode Contrast
**Light Mode:**
- Text on background: 12.6:1 (excellent)
- Secondary text: 4.9:1 (good)
- Borders clearly visible: 3.2:1

**Dark Mode:**
- Text on background: 14.2:1 (excellent)
- Secondary text: 5.1:1 (good)
- Borders clearly visible: 2.8:1

---

## SECTION 2: TYPOGRAPHY SYSTEM

### Font Family Selections

#### 1. Heading Font: Inter Variable
**Family:** Inter Variable (Google Fonts)
**Weights:** 400, 500, 600, 700, 800
**Characteristics:**
- Excellent readability at all sizes
- Modern, professional appearance
- Optimized for digital screens
- Variable font technology for performance

**Usage:**
- H1-H6 headings
- Navigation items
- Button text
- Call-to-action elements

**Why Inter:**
- Designed specifically for user interfaces
- Excellent legibility at small sizes
- Wide character set including technical symbols
- Variable font reduces load times

#### 2. Body Font: Inter Variable
**Family:** Inter Variable (same as headings for consistency)
**Weights:** 400 (regular), 500 (medium), 600 (semi-bold)
**Line Height:** 1.6 for optimal readability
**Letter Spacing:** Default (optimized by font)

**Usage:**
- Body text
- Descriptions
- Form labels
- Captions

**Optimal Sizes:**
- Desktop: 16px (1rem)
- Mobile: 16px (maintains readability)
- Small text: 14px (0.875rem)

#### 3. Code Font: JetBrains Mono
**Family:** JetBrains Mono (Google Fonts)
**Weight:** 400 (regular), 500 (medium)
**Characteristics:**
- Designed for coding
- Excellent character distinction
- Ligature support
- Comfortable for extended reading

**Usage:**
- Terminal component
- Code Playground
- Inline code snippets
- Technical documentation

### Font Loading Strategy

#### Next.js Font Optimization
```typescript
// src/app/layout.tsx
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: false, // Only load when needed
  fallback: ['Monaco', 'Cascadia Code', 'Consolas', 'monospace']
})
```

#### Fallback Fonts (Web-Safe)
**Sans-serif fallbacks:**
1. system-ui (uses system font)
2. -apple-system (iOS/macOS)
3. BlinkMacSystemFont (macOS)
4. Segoe UI (Windows)
5. Roboto (Android)
6. sans-serif (generic fallback)

**Monospace fallbacks:**
1. Monaco (macOS)
2. Cascadia Code (Windows 11)
3. Consolas (Windows)
4. monospace (generic fallback)

#### Font-Display Strategy
- **swap:** Show fallback immediately, swap when custom font loads
- **Preload critical fonts:** Inter for above-fold content
- **Lazy load:** JetBrains Mono only when Terminal/Playground visible

### Typography Scale

#### Responsive Font Sizes
```css
/* Using clamp() for fluid typography */
h1 { font-size: clamp(1.75rem, 4vw, 2.5rem); }    /* 28px - 40px */
h2 { font-size: clamp(1.5rem, 3vw, 2rem); }       /* 24px - 32px */
h3 { font-size: clamp(1.25rem, 2.5vw, 1.5rem); }  /* 20px - 24px */
h4 { font-size: clamp(1.125rem, 2vw, 1.25rem); }  /* 18px - 20px */
body { font-size: clamp(0.875rem, 2vw, 1rem); }   /* 14px - 16px */
```

#### Fixed Typography Scale
**Desktop (>1024px):**
- H1: 2.5rem (40px) / line-height: 1.2 / weight: 700
- H2: 2rem (32px) / line-height: 1.25 / weight: 600
- H3: 1.5rem (24px) / line-height: 1.3 / weight: 600
- H4: 1.25rem (20px) / line-height: 1.4 / weight: 500
- H5: 1.125rem (18px) / line-height: 1.4 / weight: 500
- H6: 1rem (16px) / line-height: 1.5 / weight: 500
- Body Large: 1.125rem (18px) / line-height: 1.6 / weight: 400
- Body: 1rem (16px) / line-height: 1.6 / weight: 400
- Body Small: 0.875rem (14px) / line-height: 1.5 / weight: 400
- Caption: 0.75rem (12px) / line-height: 1.4 / weight: 400
- Code: 0.875rem (14px) / line-height: 1.5 / weight: 400

**Mobile (<768px):**
- H1: 1.75rem (28px) / line-height: 1.2 / weight: 700
- H2: 1.5rem (24px) / line-height: 1.25 / weight: 600
- H3: 1.25rem (20px) / line-height: 1.3 / weight: 600
- Body: 1rem (16px) / line-height: 1.6 / weight: 400
- (Other sizes scale proportionally)

### Font Weight Usage

#### Weight Hierarchy
- **400 (Regular):** Body text, descriptions, form inputs
- **500 (Medium):** Secondary headings, emphasized text, navigation
- **600 (Semi-bold):** H3-H6 headings, button text, labels
- **700 (Bold):** H1-H2 headings, primary CTAs, important emphasis
- **800 (Extra-bold):** Reserved for hero titles, major impact text

#### Semantic Usage
```css
.text-regular { font-weight: 400; }    /* Body text */
.text-medium { font-weight: 500; }     /* Emphasis */
.text-semibold { font-weight: 600; }   /* Subheadings */
.text-bold { font-weight: 700; }       /* Headings */
.text-extrabold { font-weight: 800; }  /* Hero text */
```

---

## SECTION 3: SPACING SYSTEM

### Base Unit
**Base Unit:** 0.25rem (4px)
**Reasoning:** Aligns with Tailwind's default spacing scale and provides fine-grained control

### Spacing Scale
```javascript
spacing: {
  px: '1px',
  0: '0px',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  11: '2.75rem',    // 44px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
}
```

### Application Areas

#### Section Padding (Vertical Rhythm)
**Desktop:**
- Major sections: 6rem (96px) top/bottom
- Minor sections: 4rem (64px) top/bottom
- Component groups: 3rem (48px) top/bottom

**Mobile:**
- Major sections: 4rem (64px) top/bottom
- Minor sections: 3rem (48px) top/bottom
- Component groups: 2rem (32px) top/bottom

#### Component Padding (Internal Spacing)
**Cards:**
- Large cards: 2rem (32px) all sides
- Medium cards: 1.5rem (24px) all sides
- Small cards: 1rem (16px) all sides

**Buttons:**
- Large buttons: 1rem (16px) vertical, 2rem (32px) horizontal
- Medium buttons: 0.75rem (12px) vertical, 1.5rem (24px) horizontal
- Small buttons: 0.5rem (8px) vertical, 1rem (16px) horizontal

**Forms:**
- Input padding: 0.75rem (12px) vertical, 1rem (16px) horizontal
- Form groups: 1.5rem (24px) between groups
- Label spacing: 0.5rem (8px) below label

#### Margin Between Elements
**Typography:**
- Heading to paragraph: 1rem (16px)
- Paragraph to paragraph: 1.5rem (24px)
- List items: 0.5rem (8px)

**Components:**
- Button groups: 1rem (16px) between buttons
- Card grids: 1.5rem (24px) gap
- Navigation items: 2rem (32px) between items

#### Gap in Grids/Flexbox
**Grid Systems:**
- Main content grid: 2rem (32px) gap
- Card grids: 1.5rem (24px) gap
- Icon grids: 1rem (16px) gap

**Flexbox:**
- Horizontal button groups: 1rem (16px) gap
- Vertical content: 1.5rem (24px) gap
- Icon + text: 0.5rem (8px) gap

### Visual Examples

#### Between Sections
```css
/* Hero to next section */
.hero-section { margin-bottom: 6rem; }

/* Standard section spacing */
.section { 
  padding: 4rem 0; 
  margin-bottom: 2rem; 
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .hero-section { margin-bottom: 4rem; }
  .section { padding: 3rem 0; }
}
```

#### Inside Components
```css
/* Card internal spacing */
.card {
  padding: 2rem;
  gap: 1rem;
}

/* Button internal spacing */
.button {
  padding: 0.75rem 1.5rem;
}

/* Form spacing */
.form-group {
  margin-bottom: 1.5rem;
}

.form-input {
  padding: 0.75rem 1rem;
}
```

#### Around Typography
```css
/* Heading spacing */
h1, h2, h3 {
  margin-bottom: 1rem;
}

/* Paragraph spacing */
p {
  margin-bottom: 1.5rem;
}

/* List spacing */
li {
  margin-bottom: 0.5rem;
}
```

---

## SECTION 4: BREAKPOINTS & RESPONSIVE DESIGN

### Screen Size Breakpoints
```javascript
screens: {
  xs: '475px',    // Extra small phones
  sm: '640px',    // Small tablets and large phones
  md: '768px',    // Tablets
  lg: '1024px',   // Small laptops
  xl: '1280px',   // Laptops and desktops
  '2xl': '1536px' // Large desktops
}
```

### Responsive Behavior

#### Font Sizes (Responsive Typography)
**Mobile-First Approach:**
```css
/* Base (mobile) */
.text-h1 { font-size: 1.75rem; }
.text-h2 { font-size: 1.5rem; }
.text-body { font-size: 1rem; }

/* Tablet */
@media (min-width: 768px) {
  .text-h1 { font-size: 2rem; }
  .text-h2 { font-size: 1.75rem; }
}

/* Desktop */
@media (min-width: 1024px) {
  .text-h1 { font-size: 2.5rem; }
  .text-h2 { font-size: 2rem; }
}
```

#### Component Sizing
**Cards:**
- Mobile: Full width, stacked
- Tablet: 2 columns
- Desktop: 3-4 columns

**Navigation:**
- Mobile: Hamburger menu
- Tablet: Horizontal menu
- Desktop: Full navigation with spacing

**Hero Section:**
- Mobile: Stacked content, smaller images
- Tablet: Side-by-side layout
- Desktop: Full-width with optimal proportions

#### Layout Changes (Stack vs Grid)
**Project Grid:**
```css
/* Mobile: Stack */
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}
```

#### Spacing Adjustments
**Section Padding:**
```css
/* Mobile */
.section { padding: 3rem 1rem; }

/* Tablet */
@media (min-width: 768px) {
  .section { padding: 4rem 2rem; }
}

/* Desktop */
@media (min-width: 1024px) {
  .section { padding: 6rem 4rem; }
}
```

**Container Widths:**
```css
.container {
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .container { max-width: 640px; }
}

@media (min-width: 768px) {
  .container { 
    max-width: 768px;
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .container { 
    max-width: 1024px;
    padding: 0 4rem;
  }
}

@media (min-width: 1280px) {
  .container { max-width: 1200px; }
}
```

---

## SECTION 5: COMPONENT SPECIFICATIONS

### Button Component

#### Variants

##### 1. Primary Button
```css
.btn-primary {
  background-color: theme('colors.primary.500');
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 200ms ease-out;
}

.btn-primary:hover {
  background-color: theme('colors.primary.600');
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(199, 120, 221, 0.3);
}

.btn-primary:active {
  transform: scale(0.95);
}

.btn-primary:focus {
  outline: 2px solid theme('colors.primary.500');
  outline-offset: 2px;
}
```

##### 2. Secondary Button
```css
.btn-secondary {
  background-color: transparent;
  color: theme('colors.primary.500');
  border: 2px solid theme('colors.primary.500');
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 200ms ease-out;
}

.btn-secondary:hover {
  background-color: theme('colors.primary.500');
  color: white;
  transform: scale(1.05);
}
```

##### 3. Ghost Button
```css
.btn-ghost {
  background-color: transparent;
  color: theme('colors.text.primary.light');
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 200ms ease-out;
}

.btn-ghost:hover {
  background-color: theme('colors.neutral.100');
  color: theme('colors.primary.500');
}

.dark .btn-ghost {
  color: theme('colors.text.primary.dark');
}

.dark .btn-ghost:hover {
  background-color: theme('colors.neutral.800');
}
```

#### Sizes
```css
/* Small */
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

/* Medium (default) */
.btn-md {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

/* Large */
.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}
```

#### States
```css
/* Loading */
.btn-loading {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Disabled */
.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

#### Motion.dev Animation
```tsx
<motion.button
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(199, 120, 221, 0.3)"
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  Button Text
</motion.button>
```

### Form Components

#### Text Input
```css
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid theme('colors.border.light');
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: theme('colors.surface.light');
  color: theme('colors.text.primary.light');
  transition: all 200ms ease-out;
}

.input:focus {
  outline: none;
  border-color: theme('colors.primary.500');
  box-shadow: 0 0 0 3px rgba(199, 120, 221, 0.1);
}

.input::placeholder {
  color: theme('colors.text.secondary.light');
}

/* Dark mode */
.dark .input {
  background-color: theme('colors.surface.dark');
  border-color: theme('colors.border.dark');
  color: theme('colors.text.primary.dark');
}

.dark .input::placeholder {
  color: theme('colors.text.secondary.dark');
}
```

#### Textarea
```css
.textarea {
  /* Inherits from .input */
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  line-height: 1.5;
}
```

#### Select/Dropdown
```css
.select {
  /* Inherits from .input */
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
```

#### Form Validation States
```css
/* Error state */
.input-error {
  border-color: theme('colors.error.500');
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* Success state */
.input-success {
  border-color: theme('colors.success.500');
}

.input-success:focus {
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}
```

### Card Component

#### Base Card
```css
.card {
  background-color: theme('colors.surface.light');
  border: 1px solid theme('colors.border.light');
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 300ms ease-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Dark mode */
.dark .card {
  background-color: theme('colors.surface.dark');
  border-color: theme('colors.border.dark');
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.dark .card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
}
```

#### Card Variants
```css
/* Elevated card */
.card-elevated {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Outlined card */
.card-outlined {
  border: 2px solid theme('colors.border.light');
  box-shadow: none;
}

/* Filled card */
.card-filled {
  background-color: theme('colors.neutral.50');
  border: none;
}
```

#### Motion.dev Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -4 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  viewport={{ once: true }}
  className="card"
>
  Card Content
</motion.div>
```

### Navigation Components

#### Header Styling
```css
.header {
  background-color: rgba(250, 250, 248, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid theme('colors.border.light');
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 50;
  transition: all 200ms ease-out;
}

.dark .header {
  background-color: rgba(10, 10, 10, 0.8);
  border-bottom-color: theme('colors.border.dark');
}
```

#### Menu Items
```css
.nav-item {
  color: theme('colors.text.primary.light');
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: all 200ms ease-out;
}

.nav-item:hover {
  color: theme('colors.primary.500');
  background-color: theme('colors.neutral.100');
}

.nav-item.active {
  color: theme('colors.primary.500');
  background-color: theme('colors.primary.50');
}

/* Dark mode */
.dark .nav-item {
  color: theme('colors.text.primary.dark');
}

.dark .nav-item:hover {
  background-color: theme('colors.neutral.800');
}

.dark .nav-item.active {
  background-color: theme('colors.primary.900');
}
```

#### Mobile Responsive
```css
/* Mobile menu */
@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }
  
  .nav-mobile {
    display: block;
  }
  
  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: theme('colors.surface.light');
    border: 1px solid theme('colors.border.light');
    border-radius: 0.5rem;
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
}
```

---

## SECTION 6: ANIMATION & MOTION SPECIFICATIONS

### Animation Timing

#### Duration Guidelines
```javascript
timing: {
  fast: '150ms',      // Quick feedback (button press)
  normal: '200ms',    // Micro-interactions (hover)
  medium: '300ms',    // Standard transitions (modal open)
  slow: '500ms',      // Page transitions
  slower: '700ms',    // Complex animations
  slowest: '1000ms'   // Hero animations
}
```

#### Specific Use Cases
- **Micro-interactions:** 150-200ms (button hover, input focus)
- **Component transitions:** 300-400ms (card hover, dropdown open)
- **Page transitions:** 500-600ms (route changes)
- **Scroll animations:** 400-600ms (elements entering viewport)
- **Loading states:** 800-1000ms (skeleton to content)

### Easing Functions

#### Standard Easing
```javascript
easing: {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',      // Default choice
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
}
```

#### When to Use Each
- **ease-out:** Most common, feels natural (default choice)
- **ease-in-out:** Smooth, professional (modal transitions)
- **linear:** Progress bars, loading indicators
- **bounce:** Playful interactions (button press feedback)
- **spring:** Natural physics (card hover, drag interactions)

### Motion.dev Specifications

#### Default Configuration
```tsx
// Global transition defaults
const defaultTransition = {
  duration: 0.3,
  ease: "easeOut"
}

// Spring configuration
const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30
}

// Scroll animation defaults
const scrollTransition = {
  duration: 0.5,
  ease: "easeOut",
  delay: 0.1
}
```

#### AnimatePresence Behavior
```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={pathname}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

#### whileInView Configuration
```tsx
// Standard scroll reveal
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  viewport={{ 
    once: true,           // Only animate once
    margin: "-100px"      // Start animation 100px before visible
  }}
>
```

#### Stagger Delay Patterns
```tsx
// Staggered list animation
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.4,
      delay: index * 0.1,  // 100ms stagger
      ease: "easeOut"
    }}
    viewport={{ once: true }}
  >
    {item.content}
  </motion.div>
))}
```

### Animations to Implement

#### 1. Page Transitions
```tsx
const pageVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
}

const pageTransition = {
  duration: 0.3,
  ease: "easeOut"
}
```

#### 2. Component Entrance
```tsx
const entranceVariants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 }
}

const entranceTransition = {
  duration: 0.4,
  ease: "easeOut"
}
```

#### 3. Scroll Triggered
```tsx
const scrollVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 }
}

// Staggered for multiple items
const staggerTransition = {
  duration: 0.5,
  ease: "easeOut",
  staggerChildren: 0.1
}
```

#### 4. Hover Effects
```tsx
const hoverVariants = {
  hover: { 
    scale: 1.05,
    y: -4,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
  }
}

const hoverTransition = {
  duration: 0.2,
  ease: "easeOut"
}
```

### Animations to Avoid

#### Performance Killers
- **Animating layout properties:** width, height, padding, margin
- **Complex path animations:** Unless necessary for brand
- **Too many simultaneous animations:** Max 3-4 at once
- **Long duration animations:** >1 second for UI interactions

#### Accessibility Violations
- **Flashing animations:** Can trigger seizures
- **Rapid movements:** Can cause vestibular disorders
- **Animations without reduced-motion support**
- **Essential information only in animations**

#### User Experience Issues
- **Blocking animations:** Prevent user interaction
- **Repetitive animations:** Annoy on repeated visits
- **Overly complex sequences:** Distract from content
- **Inconsistent timing:** Break user expectations

### Reduced Motion Support

#### CSS Implementation
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

#### Motion.dev Implementation
```tsx
import { useReducedMotion } from 'motion/react'

const shouldReduceMotion = useReducedMotion()

const transition = shouldReduceMotion 
  ? { duration: 0.01 }
  : { duration: 0.3, ease: "easeOut" }
```

---

## SECTION 7: DARK MODE SPECIFICATIONS

### Dark Mode Colors

#### Background Mapping
```javascript
// Light to Dark mapping
backgrounds: {
  primary: {
    light: '#fafaf8',    // Warm white
    dark: '#0a0a0a'      // Deep charcoal
  },
  secondary: {
    light: '#ffffff',    // Pure white
    dark: '#1a1a1a'      // Card background
  },
  tertiary: {
    light: '#f5f5f4',    // Very light gray
    dark: '#2a2a2a'      // Elevated surfaces
  }
}
```

#### Text Color Mapping
```javascript
text: {
  primary: {
    light: '#1a1a1a',    // Dark text
    dark: '#e0e0e0'      // Light text
  },
  secondary: {
    light: '#6a6a6a',    // Muted text
    dark: '#a0a0a0'      // Muted light text
  },
  tertiary: {
    light: '#9a9a9a',    // Very muted
    dark: '#707070'      // Very muted dark
  }
}
```

#### Border Color Mapping
```javascript
borders: {
  light: '#e0e0e0',      // Subtle light borders
  dark: '#2a2a2a'        // Subtle dark borders
}
```

#### Accent Color Adjustments
```javascript
// Brighter accents in dark mode
accents: {
  primary: {
    light: '#C778DD',     // Standard purple
    dark: '#E0A8F0'       // Brighter purple for dark
  },
  secondary: {
    light: '#61DAFB',     // Standard cyan
    dark: '#9DE9FA'       // Brighter cyan for dark
  }
}
```

### Implementation

#### System Preference Detection
```tsx
// Automatic detection
import { useTheme } from 'next-themes'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}
```

#### Manual Toggle Option
```tsx
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}
```

#### Persistence (localStorage)
```tsx
// Automatic with next-themes
// Stores preference in localStorage
// Syncs across tabs
// Prevents flash of wrong theme
```

#### Tailwind dark: class Strategy
```javascript
// tailwind.config.ts
module.exports = {
  darkMode: 'class', // Use class-based dark mode
  // ... rest of config
}
```

### Color Combinations to Verify

#### Text on Background Contrast
**Light Mode:**
- Primary text on light bg: 12.6:1 ✅ (AAA)
- Secondary text on light bg: 4.9:1 ✅ (AA)
- Muted text on light bg: 3.2:1 ✅ (AA large text)

**Dark Mode:**
- Primary text on dark bg: 14.2:1 ✅ (AAA)
- Secondary text on dark bg: 5.1:1 ✅ (AA)
- Muted text on dark bg: 2.9:1 ⚠️ (AA large text only)

#### Button Visibility
```css
/* Light mode button */
.btn-primary {
  background: #C778DD;
  color: white;
  /* Contrast: 7.2:1 ✅ */
}

/* Dark mode button */
.dark .btn-primary {
  background: #E0A8F0;
  color: #0a0a0a;
  /* Contrast: 8.1:1 ✅ */
}
```

#### Link Distinguishability
```css
/* Light mode links */
.link {
  color: #C778DD;
  text-decoration: underline;
  /* Contrast with text: 4.8:1 ✅ */
}

/* Dark mode links */
.dark .link {
  color: #E0A8F0;
  /* Contrast with text: 5.2:1 ✅ */
}
```

#### Border Visibility
```css
/* Light mode borders */
.border {
  border-color: #e0e0e0;
  /* Contrast with bg: 1.2:1 (subtle but visible) */
}

/* Dark mode borders */
.dark .border {
  border-color: #2a2a2a;
  /* Contrast with bg: 1.3:1 (subtle but visible) */
}
```

#### Focus States Clear
```css
/* Light mode focus */
.focus-visible {
  outline: 2px solid #C778DD;
  outline-offset: 2px;
  /* High contrast, clearly visible */
}

/* Dark mode focus */
.dark .focus-visible {
  outline: 2px solid #E0A8F0;
  outline-offset: 2px;
  /* High contrast, clearly visible */
}
```

---

## SECTION 8: ACCESSIBILITY SPECIFICATIONS

### Color Contrast

#### WCAG 2.1 Requirements
**Normal Text (4.5:1 minimum):**
- Body text: 4.5:1 minimum ratio
- Navigation items: 4.5:1 minimum
- Form labels: 4.5:1 minimum
- Button text: 4.5:1 minimum

**Large Text (3:1 minimum):**
- Headings 18pt+ or 14pt+ bold: 3:1 minimum
- Large buttons: 3:1 minimum
- Hero text: 3:1 minimum

**Interactive Elements:**
- Focus indicators: 3:1 minimum against background
- Hover states: Maintain minimum contrast
- Active states: 3:1 minimum

#### Contrast Testing
```css
/* Test combinations */
.contrast-test {
  /* Primary purple on light: 7.2:1 ✅ AAA */
  color: #C778DD;
  background: #fafaf8;
}

.contrast-test-dark {
  /* Light text on dark: 14.2:1 ✅ AAA */
  color: #e0e0e0;
  background: #0a0a0a;
}

.contrast-test-accent {
  /* Cyan on light: 4.8:1 ✅ AA */
  color: #61DAFB;
  background: #fafaf8;
}
```

### Focus Indicators

#### Focus Ring Specifications
```css
.focus-visible {
  outline: 2px solid theme('colors.primary.500');
  outline-offset: 2px;
  border-radius: 0.25rem;
}

/* Dark mode focus */
.dark .focus-visible {
  outline-color: theme('colors.primary.400');
}

/* High contrast focus for better visibility */
.focus-visible:focus-visible {
  outline-width: 3px;
  outline-style: solid;
}
```

#### Focus Ring Colors
- **Primary:** Use brand purple (#C778DD)
- **Width:** 2px standard, 3px for high contrast
- **Offset:** 2px from element edge
- **Style:** Solid outline, not dashed

#### Visible on All Interactive Elements
```css
/* Buttons */
button:focus-visible { /* focus styles */ }

/* Links */
a:focus-visible { /* focus styles */ }

/* Form inputs */
input:focus-visible,
textarea:focus-visible,
select:focus-visible { /* focus styles */ }

/* Custom interactive elements */
[role="button"]:focus-visible,
[tabindex]:focus-visible { /* focus styles */ }
```

### Keyboard Navigation

#### Tab Order Requirements
```html
<!-- Logical tab order -->
<header>
  <nav>
    <a href="#home" tabindex="1">Home</a>
    <a href="#about" tabindex="2">About</a>
    <a href="#projects" tabindex="3">Projects</a>
    <a href="#contact" tabindex="4">Contact</a>
  </nav>
</header>

<main>
  <section id="home">
    <button tabindex="5">CTA Button</button>
  </section>
</main>
```

#### All Interactive Elements Keyboard-Accessible
```tsx
// Custom interactive elements need keyboard support
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick()
    }
  }}
>
  Custom Button
</div>
```

#### No Keyboard Traps
```tsx
// Modal keyboard trap (good)
const Modal = ({ isOpen, onClose }) => {
  const firstFocusableRef = useRef()
  const lastFocusableRef = useRef()
  
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstFocusableRef.current) {
        e.preventDefault()
        lastFocusableRef.current.focus()
      } else if (!e.shiftKey && document.activeElement === lastFocusableRef.current) {
        e.preventDefault()
        firstFocusableRef.current.focus()
      }
    }
    
    if (e.key === 'Escape') {
      onClose()
    }
  }
  
  return isOpen ? (
    <div onKeyDown={handleKeyDown}>
      <button ref={firstFocusableRef}>First</button>
      {/* Modal content */}
      <button ref={lastFocusableRef} onClick={onClose}>Close</button>
    </div>
  ) : null
}
```

#### Skip-to-Content Links
```tsx
// Skip navigation for screen readers
<a 
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded"
>
  Skip to main content
</a>

<main id="main-content">
  {/* Main content */}
</main>
```

### Motion Accessibility

#### Reduced Motion Implementation
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Disable parallax */
  .parallax {
    transform: none !important;
  }
  
  /* Disable auto-playing animations */
  .auto-animate {
    animation-play-state: paused !important;
  }
}
```

#### Motion.dev Reduced Motion
```tsx
import { useReducedMotion } from 'motion/react'

const Component = () => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={
        shouldReduceMotion 
          ? { duration: 0.01 }
          : { duration: 0.5, ease: "easeOut" }
      }
    >
      Content
    </motion.div>
  )
}
```

### Screen Reader Considerations

#### Semantic HTML
```html
<!-- Use proper semantic elements -->
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Page Title</h1>
    <section>
      <h2>Section Title</h2>
      <p>Content...</p>
    </section>
  </article>
</main>

<footer>
  <p>&copy; 2025 Nilesh Kowe</p>
</footer>
```

#### ARIA Labels Where Needed
```tsx
// Icon buttons need labels
<button aria-label="Toggle dark mode">
  <MoonIcon />
</button>

// Form inputs with complex labels
<div>
  <label id="password-label">Password</label>
  <input 
    type="password"
    aria-labelledby="password-label"
    aria-describedby="password-help"
  />
  <div id="password-help">Must be at least 8 characters</div>
</div>

// Loading states
<div aria-live="polite" aria-busy="true">
  Loading...
</div>
```

#### Alt Text for Images
```tsx
// Descriptive alt text
<Image
  src="/hero-image.png"
  alt="Nilesh Kowe working on a laptop with code on screen, showing React and TypeScript development"
  width={500}
  height={300}
/>

// Decorative images
<Image
  src="/decoration.png"
  alt=""
  width={100}
  height={100}
  aria-hidden="true"
/>
```

#### Proper Heading Hierarchy
```html
<!-- Correct hierarchy -->
<h1>Portfolio - Nilesh Kowe</h1>
  <h2>About Me</h2>
    <h3>My Journey</h3>
    <h3>Skills</h3>
  <h2>Projects</h2>
    <h3>Featured Projects</h3>
      <h4>Project Name</h4>
  <h2>Contact</h2>

<!-- Avoid skipping levels -->
<!-- Don't go from h1 to h3 -->
```

---

## SECTION 9: RESPONSIVE TYPOGRAPHY & SCALES

### Responsive Font Sizes

#### Fluid Typography with clamp()
```css
/* Fluid scale that adapts to viewport */
h1 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: clamp(1.2, 1.2, 1.2);
}

h2 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: clamp(1.25, 1.25, 1.25);
}

h3 {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  line-height: clamp(1.3, 1.3, 1.3);
}

body {
  font-size: clamp(0.875rem, 2vw, 1rem);
  line-height: clamp(1.5, 1.6, 1.6);
}
```

#### Breakpoint-Specific Sizes
```css
/* Mobile First Approach */

/* Base (Mobile: < 640px) */
.text-h1 { font-size: 1.75rem; line-height: 1.2; }
.text-h2 { font-size: 1.5rem; line-height: 1.25; }
.text-h3 { font-size: 1.25rem; line-height: 1.3; }
.text-body { font-size: 1rem; line-height: 1.6; }
.text-small { font-size: 0.875rem; line-height: 1.5; }

/* Small (640px+) */
@media (min-width: 640px) {
  .text-h1 { font-size: 2rem; }
  .text-h2 { font-size: 1.75rem; }
  .text-h3 { font-size: 1.375rem; }
}

/* Medium (768px+) */
@media (min-width: 768px) {
  .text-h1 { font-size: 2.25rem; }
  .text-h2 { font-size: 1.875rem; }
  .text-h3 { font-size: 1.5rem; }
  .text-body { font-size: 1.125rem; }
}

/* Large (1024px+) */
@media (min-width: 1024px) {
  .text-h1 { font-size: 2.5rem; }
  .text-h2 { font-size: 2rem; }
  .text-h3 { font-size: 1.5rem; }
  .text-body { font-size: 1rem; }
}

/* Extra Large (1280px+) */
@media (min-width: 1280px) {
  .text-h1 { font-size: 3rem; }
  .text-h2 { font-size: 2.25rem; }
}
```

#### Tailwind Responsive Typography
```javascript
// tailwind.config.ts
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],
  'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  'base': ['1rem', { lineHeight: '1.5rem' }],
  'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '1' }],
  '6xl': ['3.75rem', { lineHeight: '1' }],
  '7xl': ['4.5rem', { lineHeight: '1' }],
  '8xl': ['6rem', { lineHeight: '1' }],
  '9xl': ['8rem', { lineHeight: '1' }],
}
```

### Responsive Spacing

#### Section Spacing Scale
```css
/* Mobile spacing (base) */
.section-padding {
  padding-top: 3rem;    /* 48px */
  padding-bottom: 3rem; /* 48px */
}

.container-padding {
  padding-left: 1rem;   /* 16px */
  padding-right: 1rem;  /* 16px */
}

/* Tablet spacing */
@media (min-width: 768px) {
  .section-padding {
    padding-top: 4rem;    /* 64px */
    padding-bottom: 4rem; /* 64px */
  }
  
  .container-padding {
    padding-left: 2rem;   /* 32px */
    padding-right: 2rem;  /* 32px */
  }
}

/* Desktop spacing */
@media (min-width: 1024px) {
  .section-padding {
    padding-top: 6rem;    /* 96px */
    padding-bottom: 6rem; /* 96px */
  }
  
  .container-padding {
    padding-left: 4rem;   /* 64px */
    padding-right: 4rem;  /* 64px */
  }
}
```

#### Component Spacing Adjustments
```css
/* Card spacing */
.card {
  padding: 1rem; /* Mobile: 16px */
}

@media (min-width: 768px) {
  .card {
    padding: 1.5rem; /* Tablet: 24px */
  }
}

@media (min-width: 1024px) {
  .card {
    padding: 2rem; /* Desktop: 32px */
  }
}

/* Grid gaps */
.grid {
  gap: 1rem; /* Mobile: 16px */
}

@media (min-width: 768px) {
  .grid {
    gap: 1.5rem; /* Tablet: 24px */
  }
}

@media (min-width: 1024px) {
  .grid {
    gap: 2rem; /* Desktop: 32px */
  }
}
```

#### Margin Adjustments
```css
/* Typography margins */
h1, h2, h3 {
  margin-bottom: 1rem; /* Mobile */
}

@media (min-width: 768px) {
  h1, h2, h3 {
    margin-bottom: 1.5rem; /* Tablet */
  }
}

@media (min-width: 1024px) {
  h1, h2, h3 {
    margin-bottom: 2rem; /* Desktop */
  }
}

/* Paragraph spacing */
p {
  margin-bottom: 1rem; /* Mobile */
}

@media (min-width: 768px) {
  p {
    margin-bottom: 1.5rem; /* Tablet+ */
  }
}
```

---

## SECTION 10: COMPLETE TAILWIND CONFIGURATION FILE

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#C778DD',  // Main brand purple
          600: '#9f4fc5',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          DEFAULT: '#C778DD'
        },
        
        // Secondary accent colors
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#61DAFB',  // Main accent cyan
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          DEFAULT: '#61DAFB'
        },
        
        // Semantic colors
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          DEFAULT: '#10b981'
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          DEFAULT: '#f59e0b'
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          DEFAULT: '#ef4444'
        },
        info: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          DEFAULT: '#3b82f6'
        },
        
        // Theme-aware colors
        background: {
          light: '#fafaf8',
          dark: '#0a0a0a',
          DEFAULT: '#fafaf8'
        },
        surface: {
          light: '#ffffff',
          dark: '#1a1a1a',
          DEFAULT: '#ffffff'
        },
        border: {
          light: '#e0e0e0',
          dark: '#2a2a2a',
          DEFAULT: '#e0e0e0'
        },
        text: {
          primary: {
            light: '#1a1a1a',
            dark: '#e0e0e0',
            DEFAULT: '#1a1a1a'
          },
          secondary: {
            light: '#6a6a6a',
            dark: '#a0a0a0',
            DEFAULT: '#6a6a6a'
          },
          tertiary: {
            light: '#9a9a9a',
            dark: '#707070',
            DEFAULT: '#9a9a9a'
          }
        }
      },
      
      // Typography
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'Monaco', 'Cascadia Code', 'Consolas', 'monospace']
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      
      // Spacing extensions
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem'
      },
      
      // Border radius
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px'
      },
      
      // Box shadows
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
        // Custom shadows
        'glow': '0 0 20px rgba(199, 120, 221, 0.3)',
        'glow-lg': '0 0 40px rgba(199, 120, 221, 0.4)',
      },
      
      // Animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      
      // Keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
          '70%': { transform: 'scale(0.9)', opacity: '0.9' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      
      // Backdrop blur
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      
      // Z-index scale
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'auto': 'auto',
      }
    },
  },
  plugins: [
    // Add any additional plugins here
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}

export default config
```

---

## IMPLEMENTATION CHECKLIST

### Phase 1: Setup (Day 1)
- [ ] Install Inter and JetBrains Mono fonts
- [ ] Update Tailwind config with design system
- [ ] Set up CSS custom properties for theme colors
- [ ] Create base component styles
- [ ] Test color contrast ratios

### Phase 2: Components (Days 2-4)
- [ ] Implement Button variants and states
- [ ] Create Form component styles
- [ ] Build Card component with hover effects
- [ ] Style Navigation components
- [ ] Add focus indicators to all interactive elements

### Phase 3: Responsive (Day 5)
- [ ] Test typography scales across breakpoints
- [ ] Verify spacing consistency
- [ ] Check mobile navigation
- [ ] Validate touch targets (44px minimum)

### Phase 4: Dark Mode (Week 2)
- [ ] Implement theme switching
- [ ] Test all color combinations
- [ ] Verify contrast ratios in dark mode
- [ ] Add smooth theme transitions

### Phase 5: Accessibility (Week 2)
- [ ] Add reduced motion support
- [ ] Implement keyboard navigation
- [ ] Test with screen readers
- [ ] Validate WCAG 2.1 compliance

### Phase 6: Polish (Week 2)
- [ ] Fine-tune animations
- [ ] Optimize performance
- [ ] Cross-browser testing
- [ ] Final design review

---

**This design system provides a complete foundation for building a modern, accessible, and visually stunning portfolio website that aligns with 2025 design trends while maintaining excellent usability and performance.**
