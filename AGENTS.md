# AGENTS

This file provides guidance to AI Agents when working with this personal portfolio landing page project.

## Project Overview

This is a modern, responsive personal portfolio landing page built with **Astro**, TypeScript, and plain CSS. The site is fully static (prerendered), showcases projects and skills, and provides contact information in a visually appealing, animated interface.

- **Framework**: Astro (static site generation, `.astro` components)
- **Language**: TypeScript
- **Styling**: Hand-written CSS with design tokens (custom properties) + scoped `<style>` blocks
- **Animations**: CSS transitions + a small IntersectionObserver reveal script (no animation runtime)
- **Icons**: Inline SVG via `src/components/ui/Icon.astro` (zero runtime dependency)
- **Fonts**: Self-hosted variable fonts (`@fontsource-variable/manrope`, `@fontsource-variable/inter`)
- **Deployment**: Appwrite Sites (Static Hosting), output in `dist/`
- **Form**: n8n webhook + Data Table (Contact form submissions)
- **Language Support**: Bilingual (English/Spanish) with real routes — `/` (EN) and `/es/` (ES)
- **JS shipped to the browser**: only theme toggle, mobile menu, scroll reveal, hero typewriter and the contact form


## Project Architecture & Structure

### Directory Structure

```
d4lanis.com/
├── src/
│   ├── components/            # Astro components, one per section
│   │   ├── Navbar.astro       # Sticky nav, theme + language toggles, mobile drawer
│   │   ├── Hero.astro         # Hero banner + typewriter
│   │   ├── About.astro        # About me + "What I do" services
│   │   ├── Projects.astro     # Featured projects grid
│   │   ├── ProjectCard.astro  # Single project card
│   │   ├── Skills.astro       # Skills grouped by category
│   │   ├── Contact.astro      # Contact form + social links (vanilla fetch)
│   │   ├── Footer.astro       # Page footer
│   │   ├── HomePage.astro     # Composes all landing sections for a given lang
│   │   └── ui/
│   │       ├── Icon.astro     # Inline SVG icon component
│   │       └── icons.ts       # IconName union type
│   ├── layouts/
│   │   ├── BaseLayout.astro   # <head>, SEO/OG/hreflang, theme init, reveal script
│   │   └── LegalLayout.astro  # Header/footer + typography for legal pages
│   ├── i18n/
│   │   ├── ui.ts              # EN/ES translation dictionaries
│   │   └── utils.ts           # useTranslations(), getLangFromUrl(), getAlternateLang()
│   ├── data/                  # Static content data (framework-agnostic TS)
│   │   ├── projects.ts        # Project portfolio data
│   │   └── skills.ts          # Skills list data
│   ├── styles/
│   │   ├── tokens.css         # Design tokens (colors, type, spacing, radius)
│   │   └── global.css         # Reset, base styles, shared primitives
│   ├── pages/                 # File-based routes
│   │   ├── index.astro        # /            (English home)
│   │   ├── es/index.astro     # /es/         (Spanish home)
│   │   ├── privacy-policy.astro
│   │   ├── terms.astro
│   │   └── data-deletion.astro
│   └── env.d.ts               # Astro + PUBLIC_LEAD_ENDPOINT typings
├── public/                    # Static public assets (favicon, etc.)
├── astro.config.mjs           # Astro, i18n and sitemap configuration
├── package.json               # Dependencies and scripts
└── tsconfig.json              # Extends astro/tsconfigs/strict
```

## Landing Page Best Practices

### UX/UI Design Principles

#### Visual Hierarchy
- **Hero Section**: Immediate impact with large heading, compelling subtitle, and clear CTA
- **Progressive Disclosure**: Information revealed as users scroll
- **White Space**: Generous spacing between sections for readability
- **Contrast**: High contrast for text readability, especially CTAs
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop

#### Section Organization
1. **Hero/Landing**: Name, title, elevator pitch, primary CTA
2. **About**: Personal introduction, background, philosophy
3. **Skills**: Technical competencies, visual skill indicators
4. **Projects**: Portfolio showcase with images, descriptions, links
5. **Contact**: Multiple contact methods, social links, optional form
6. **Footer**: Copyright, additional links, social media

#### Typography Best Practices
- **Font Hierarchy**: Clear distinction between h1, h2, h3, body text
- **Readability**: Line height 1.5-1.7, max width 65-75 characters per line
- **Font Pairing**: Maximum 2-3 font families (heading + body + accent)
- **Size Scale**: Consistent type scale (e.g., 1.25x ratio)

#### Color Theory
- **Primary Color**: Brand/personality color (main CTAs, accents)
- **Secondary Color**: Supporting color for variety
- **Neutral Palette**: Grays for backgrounds, text, borders
- **Semantic Colors**: Success (green), warning (yellow), error (red)
- **Dark Mode**: Inverted palette with proper contrast ratios
- **Accessibility**: WCAG AA minimum contrast (4.5:1 for text)

### Animation Standards

#### Animation Strategy

The project ships **no animation runtime**. Animations are CSS transitions triggered by class changes:

- **Reveal on scroll**: elements marked with `.reveal` start hidden (`opacity: 0`, translated) and get `.is-visible` added by a single `IntersectionObserver` in `src/layouts/BaseLayout.astro`.
- **Progressive enhancement**: the `.reveal` styles only apply when `<html>` has the `js` class (set by an inline script), so content is visible without JavaScript.
- **Stagger**: pass `style="transition-delay:0.1s"` (inline) on sibling `.reveal` elements. Inline styles are required because the global `.reveal` rule defines the `transition` shorthand.
- **Hover interactions**: keep `transform`/`box-shadow` transitions on the **inner** element, never on the same node that carries `.reveal`, to avoid conflicting `transition`/`transform` declarations.

```css
/* global.css */
html.js .reveal { opacity: 0; transform: translateY(24px); transition: opacity .6s ease-out, transform .6s ease-out; }
html.js .reveal.is-visible { opacity: 1; transform: none; }
```

#### Animation Guidelines
- **Performance**: animate only `transform` and `opacity`
- **Duration**:
  - Micro-interactions: 100-300ms
  - Standard transitions: 300-500ms
  - Entrances / reveals: 500-800ms
- **Easing**: `ease-out` for entrances, `ease` / `ease-in-out` for transitions
- **Avoid**: excessive motion that can cause motion sickness
- **Respect**: `prefers-reduced-motion` — handled globally in `global.css` (reveals become visible immediately, transitions are neutralized)

#### Scroll Animations
```js
// src/layouts/BaseLayout.astro
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2, rootMargin: '0px 0px -100px 0px' });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
```



### Performance Optimization

#### Image Optimization
- Use WebP format with fallbacks
- Lazy load images below the fold
- Serve responsive images with `srcset`
- Compress images (aim for <200KB per image)
- Use SVG for icons and logos

#### Code Splitting

Astro only ships the JavaScript that is explicitly needed. The whole landing page is prerendered as static HTML; client JS is limited to a few small scripts embedded in components (Astro bundles each `<script>` once):

```astro
<!-- Solo el formulario necesita lógica de cliente -->
<form data-contact-form>...</form>
<script>
  // fetch al endpoint de leads (vanilla, sin framework)
</script>
```

If an interactive island is ever needed, React/Vue/Svelte can be added with `@astrojs/react` and a `client:visible` directive.

#### Bundle Optimization
- Sin frameworks de UI ni runtime de animación
- Iconos como SVG inline (no icon fonts, no librerías de iconos)
- Fuentes variables auto-hospedadas y subseteadas por `@fontsource`
- HTML/CSS minificado por el build de Astro
- Target: navegadores modernos (ES2020+)

### Accessibility Standards

#### Semantic HTML
```tsx
// ✅ Good
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

// ❌ Bad
<div className="header">
  <div className="nav">
    <div onClick={navigate}>About</div>
  </div>
</div>
```

#### ARIA Labels
- Add `aria-label` to icon buttons
- Use `aria-describedby` for form inputs
- Implement `role` attributes when appropriate
- Provide skip links for keyboard navigation

#### Keyboard Navigation
- Ensure all interactive elements are keyboard accessible
- Visible focus indicators (outline or ring)
- Logical tab order
- Support `Enter` and `Space` for custom controls

#### Screen Readers
- Meaningful alt text for images
- Hidden text for icon-only buttons
- Announce dynamic content changes
- Proper heading hierarchy (h1 → h2 → h3)

## Development Workflow

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
- Runs on `http://localhost:4321`
- Hot module replacement (HMR) enabled
- Astro dev toolbar available for inspection

### Build Process
1. Route collection from `src/pages/**`
2. Server-side rendering of each `.astro` page to static HTML
3. Client `<script>` bundling (only the code that is actually used)
4. CSS bundling/minification (global + scoped styles)
5. Static output in `dist/` (+ `sitemap-index.xml`)

## Code Style Guidelines

### Component Structure

```astro
---
// ✅ Preferred component structure
import Icon from './ui/Icon.astro';
import { useTranslations } from '../i18n/utils';
import type { Lang } from '../i18n/ui';

interface Props {
  lang: Lang;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
---

<section class="section" id="about">
  <div class="container">
    <h2 class="about__title">{t('about.title')}</h2>
    <a class="btn btn--primary" href="#contact"><Icon name="send" size={20} /></a>
  </div>
</section>

<style>
  /* Scoped to this component automatically */
  .about__title {
    color: var(--primary);
  }
</style>
```

Conventions:
- One component per section in `src/components/`.
- Language is passed down via a `lang` prop; build a translator with `useTranslations(lang)`.
- Content/translations live in `src/i18n/ui.ts`, never hardcoded in markup (except proper nouns like "Daniel Alanis").
- Use the shared primitives defined in `src/styles/global.css` (`.container`, `.section`, `.btn`, `.chip`, `.card`, `.reveal`).
- Use `:global(...)` only when styling slotted content (see `LegalLayout.astro`).

### TypeScript Best Practices

```tsx
// ✅ Define clear interfaces
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// ✅ Use type inference when obvious
const projects = [/* ... */]; // Type is inferred

// ✅ Use union types for variants
type ThemeMode = 'light' | 'dark';
type Language = 'en' | 'es';

// ❌ Avoid 'any' type
const data: any = fetchData(); // Bad

// ✅ Use proper typing
const data: Project[] = fetchData(); // Good
```

### Design Tokens

All visual values live as CSS custom properties in `src/styles/tokens.css`. Light values are on `:root`, dark values are applied through `[data-theme="dark"]` (with a `prefers-color-scheme` fallback).

```css
:root {
  --primary: #00d1ff;
  --primary-dark: #00a3c7;
  --bg: #ffffff;
  --surface: #f8fafc;
  --text: #0b0f1a;
  --text-muted: #64748b;
  --divider: rgba(0, 0, 0, 0.08);
  --radius-sm: 8px;
  --radius-md: 12px;
  --font-heading: 'Manrope Variable', system-ui, sans-serif;
  --font-body: 'Inter Variable', system-ui, sans-serif;
  --fs-h1: 3.5rem;
  --space-3: 24px;
}

[data-theme='dark'] {
  --bg: #0b0f1a;
  --surface: #1e293b;
  --text: #f1f5f9;
  --text-muted: #94a3b8;
  --divider: rgba(255, 255, 255, 0.08);
}
```

Rules:
- Never hardcode hex colors in components — use the tokens.
- Theme is initialized before paint by an inline script in `BaseLayout.astro` (reads `localStorage['theme-mode']`, falls back to the system preference) to avoid a flash of the wrong theme.
- The toggle lives in `Navbar.astro` and persists the choice to `localStorage`.

### Responsive Design Patterns

Breakpoints follow the previous MUI values: `sm` 600px, `md` 900px, `lg` 1200px (used as `max-width` / `min-width` media queries).

```css
/* ✅ Mobile-first, scoped component styles */
.about__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 900px) {
  .about__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 599px) {
  .about__points {
    grid-template-columns: 1fr;
  }
}
```

## Content Guidelines

### Project Showcase
- **Compelling Titles**: Clear, descriptive project names
- **Concise Descriptions**: 2-3 sentences maximum
- **Technology Stack**: List key technologies used
- **Visual Appeal**: High-quality screenshots or demos
- **Call to Action**: Links to live demo and source code

### Skills Section
- **Categorize**: Group by type (Frontend, Backend, Tools, Soft Skills)
- **Visual Indicators**: Progress bars, star ratings, or simple badges
- **Relevance**: Focus on skills relevant to target audience/role
- **Honesty**: Accurate representation of proficiency level

### Contact Information
- **Multiple Channels**: Email, LinkedIn, GitHub, etc.
- **Accessibility**: Easy to click/copy contact details
- **Response Time**: Set expectations for reply time
- **Form Validation**: Clear error messages with proper validation
- **Form Submission**: Contact form submissions sent to n8n lead endpoint
- **Data Privacy**: Clear privacy policy for collected data

## Internationalization (i18n)

### Routing & Translations

The site uses Astro's built-in i18n with `prefixDefaultLocale: false`, so English lives at `/` and Spanish at `/es/` (see `astro.config.mjs`).

- Routes: `src/pages/index.astro` (EN) and `src/pages/es/index.astro` (ES) both render `<HomePage lang={lang} />`.
- Dictionaries: `src/i18n/ui.ts` holds the `en` / `es` key-value maps.
- Helpers: `src/i18n/utils.ts` exposes `useTranslations(lang)`, `getLangFromUrl(url)` and `getAlternateLang(lang)`.
- The language toggle in `Navbar.astro` is a real link (`getRelativeLocaleUrl`) to the equivalent page in the other locale.

```ts
// src/i18n/ui.ts
export const ui = {
  en: { 'hero.title': 'Full-Stack Software Engineer', /* ... */ },
  es: { 'hero.title': 'Ingeniero de Software Full-Stack', /* ... */ },
} as const;

// src/i18n/utils.ts
export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

// In a component
const t = useTranslations(Astro.props.lang);
const label = t('nav.about');
```

To add a key: add it to **both** `en` and `es` in `ui.ts`. `UIKey` is derived from the `en` dictionary, so a missing key is a type error at `npm run check`.

## SEO Best Practices

### Meta Tags
```html
<head>
  <title>Your Name - Web Developer</title>
  <meta name="description" content="Portfolio of [Your Name], a web developer specializing in React and TypeScript">
  <meta name="keywords" content="web developer, React, TypeScript, portfolio">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Your Name - Portfolio">
  <meta property="og:description" content="Check out my latest projects">
  <meta property="og:image" content="/og-image.jpg">
  <meta property="og:url" content="https://yoursite.com">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Your Name - Portfolio">
  <meta name="twitter:description" content="Check out my latest projects">
  <meta name="twitter:image" content="/twitter-image.jpg">
</head>
```

### Semantic HTML Structure
- Use proper heading hierarchy (h1 → h2 → h3)
- Implement semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Add structured data (JSON-LD) for search engines

## Deployment

### Appwrite Sites Deployment
- **Static Hosting**: Deploy via Appwrite Sites for static web hosting
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Automatic HTTPS**: SSL certificates provided automatically
- **Custom Domain**: Configure custom domain in Appwrite console
- **Environment Variables**: Set in Appwrite project settings
- **Git Integration**: Connect repository for automatic deployments

### Lead Capture Integration (n8n)

Form submissions are sent by `fetch` as JSON to an n8n webhook (replaces the former Formspree integration). The workflow "Form Endpoint - Leads" (id `SFYOn9aTV7kgLD1X`) on `automations.d4lanis.com` is **multi-site**: the `?site=<slug>` query param identifies the client and is validated against the n8n Data Table `sites` (id `Z6ZFGYysVVnHDyf7`: columns `slug`, `site_name`, `notify_emails`, `active`). Unregistered/inactive slugs get 403, malformed 400. Valid leads are inserted into the Data Table `leads` (id `rEOtxW40rbfqSFKv`) with columns `created_at`, `site`, `form`, `email`, `ip`, `data` (full raw JSON of the submission). Responds `200 { success: true, id }`.

Adding a new static site (React/Vite/Astro) = insert one row in `sites` + point its form to `.../webhook/form/lead?site=<slug>`. No workflow changes, no deploys of the endpoint.

Note: n8n production webhooks on this instance do NOT resolve `:param` route segments (they register as literal strings); the site identifier must travel in the query string.

#### Contact Form Setup

```ts
async function handleFormSubmit(event: SubmitEvent) {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  await fetch(import.meta.env.PUBLIC_LEAD_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: data.get('name'),
      email: data.get('email'),
      phoneNumber: data.get('phoneNumber'),
      message: data.get('message'),
      form_id: 'd4lanis-contact',
    }),
  });
}
```

Actual implementation: `src/components/Contact.astro` (vanilla `<form>` + a bundled `<script>`).

> Astro only exposes environment variables prefixed with `PUBLIC_` to the client, so the variable is named `PUBLIC_LEAD_ENDPOINT` (previously `VITE_LEAD_ENDPOINT`). The value is inlined at build time.

#### Form Configuration

Fields posted (defined in `src/components/Contact.astro`):
- `name` (text, required)
- `email` (email, required)
- `message` (textarea, required)
- `phoneNumber` (tel, optional)
- `form_id` (string, source form identifier)

Any extra field added to the payload is stored automatically inside the `data` JSON column — no schema migration needed. Review/export submissions in n8n: **Data Tables → leads**.

To add another form, reuse the same endpoint with a different `form_id` value.

#### Environment Variables

```bash
# .env
PUBLIC_LEAD_ENDPOINT=https://automations.d4lanis.com/webhook/form/lead?site=d4lanis
```

#### Security Considerations

- No third-party service touches the data; storage lives in the n8n instance DB
- No built-in spam protection anymore: honeypot/reCAPTCHA and email notifications are planned as v2 in the n8n workflow
- The webhook is public and unauthenticated by design (open form endpoint); do not store sensitive data in new fields without review

## Testing Guidelines

### Component Testing

There is no test runner configured in this project yet. The available quality gates are:

```bash
npm run check   # astro check: TypeScript + Astro diagnostics
npm run lint    # ESLint (JS/TS/Astro)
npm run build   # full static build
npm run preview # serve dist/ for manual/visual QA
```

If a test runner is added, prefer Astro's `Container API` for `.astro` components, or Playwright for end-to-end checks of the landing sections, theme toggle, language routes and contact form.

### Accessibility Testing
- Use axe-core or similar tools
- Test with keyboard navigation
- Verify with screen reader (NVDA, JAWS, VoiceOver)
- Check color contrast ratios

## Performance Targets

- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms
- **Lighthouse Score**: 90+ across all categories

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Common Issues and Solutions

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear the Astro/Vite cache: `rm -rf node_modules/.astro node_modules/.vite` (or `.astro/` in the project root)
- Type-check Astro + TS files: `npm run check`
- Lint: `npm run lint`

### Animation Performance
- Use `transform` and `opacity` instead of layout properties
- Implement `will-change` sparingly for complex animations
- Reduce motion complexity on mobile devices

### Responsive Issues
- Test on real devices, not just browser devtools
- Use CSS media queries with the documented breakpoints (600px / 900px / 1200px)
- Implement a mobile-first approach

## Resources

### Design Inspiration
- [Awwwards](https://www.awwwards.com) - Award-winning web design
- [Dribbble](https://dribbble.com) - Design showcase
- [Behance](https://www.behance.net) - Creative portfolios
- [Lapa Ninja](https://www.lapa.ninja) - Landing page inspiration

### Animation Libraries
- [Framer Motion](https://www.framer.com/motion) - Production-ready animations
- [GSAP](https://greensock.com/gsap) - Professional-grade animations
- [React Spring](https://www.react-spring.dev) - Spring-physics based animations

### Performance Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance auditing
- [WebPageTest](https://www.webpagetest.org) - Detailed performance analysis
- [PageSpeed Insights](https://pagespeed.web.dev) - Google's performance tool

### Accessibility
- [WAVE](https://wave.webaim.org) - Web accessibility evaluation
- [axe DevTools](https://www.deque.com/axe/devtools) - Accessibility testing
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref) - Accessibility standards

## Additional Notes

- Keep content concise and scannable
- Update portfolio regularly with new projects
- Monitor analytics to understand user behavior
- A/B test different CTAs and layouts
- Collect feedback from peers and potential employers/clients
- Maintain consistent branding across all sections
- Optimize for mobile - majority of traffic is mobile
- Consider adding a blog section for thought leadership
