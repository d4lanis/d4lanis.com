# Portfolio Implementation Specification

**Tech Stack: Astro • TypeScript • Design Tokens (CSS) • Bilingual routes • Contact Form (n8n)**

This document complements the main bilingual portfolio page and defines how the website is implemented using modern, clean, minimalist frontend technologies.

---

# 1. Project Setup

## **Astro + TypeScript**

The project is an Astro static site. Components are `.astro` files (no UI framework), styles are plain CSS, and JavaScript is limited to a few small client scripts.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output -> dist/
npm run preview  # serve the production build
npm run check    # astro check (types)
npm run lint     # eslint
```

Key decisions:

- **Rendering**: `output: 'static'` — every page is prerendered to HTML.
- **i18n**: `prefixDefaultLocale: false` → English at `/`, Spanish at `/es/`.
- **Styling**: design tokens in `src/styles/tokens.css` + scoped `<style>` per component.
- **Theming**: light/dark via `[data-theme]` on `<html>`, set before paint by an inline script.
- **Animations**: CSS transitions + a single IntersectionObserver reveal script.
- **Contact form**: vanilla `<script>` that posts JSON to the n8n lead endpoint (`PUBLIC_LEAD_ENDPOINT`).

See `AGENTS.md`, `README.md` and `QUICKSTART.md` for the full documentation.
