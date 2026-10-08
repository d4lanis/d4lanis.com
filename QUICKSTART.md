# Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm (or another package manager)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure the lead endpoint**

   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and set the n8n lead endpoint:
   ```env
   PUBLIC_LEAD_ENDPOINT=https://automations.d4lanis.com/webhook/form/lead?site=d4lanis
   ```
   (Astro only exposes `PUBLIC_`-prefixed variables to the client.)

3. **Start the development server**
   ```bash
   npm run dev
   ```

   Open http://localhost:4321 in your browser.

### Development

- **Hot reload**: changes are reflected instantly
- **Dark mode**: click the sun/moon icon in the navbar (persisted, respects the system preference by default)
- **Language**: the globe icon links to the same page in the other locale (`/` ⇄ `/es/`)
- **Smooth scrolling**: nav links scroll to sections

### Building for Production

```bash
npm run build
```

Output goes to `dist/`.

### Preview Production Build

```bash
npm run preview
```

### Quality Checks

```bash
npm run check   # astro check (TypeScript + Astro diagnostics)
npm run lint    # ESLint
```

## 📝 Customization Guide

### Update Content

1. **Projects**: edit `src/data/projects.ts`
2. **Skills**: edit `src/data/skills.ts`
3. **All copy / translations**: edit `src/i18n/ui.ts` (add keys to both `en` and `es`)
4. **Contact details & social links**: edit `src/components/Contact.astro` and `src/components/Footer.astro`

### Change Colors / Typography

Edit the design tokens in `src/styles/tokens.css`:

```css
:root {
  --primary: #00d1ff;   /* brand accent */
  --bg: #ffffff;
  --text: #0b0f1a;
}
```

Each section's component (`src/components/*.astro`) has a scoped `<style>` block for layout-specific rules.

## 🌐 Deployment

### Appwrite Sites (primary)

1. Push your code to the repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add `PUBLIC_LEAD_ENDPOINT` in the environment variables

### Netlify / Vercel

- Netlify settings are in `netlify.toml` (build `npm run build`, publish `dist`)
- Vercel auto-detects Astro

## 🔧 Troubleshooting

### Build fails
- Ensure Node.js is 18+
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Clear caches: delete `.astro/` and `node_modules/.vite`

### Contact form not working
- Check `PUBLIC_LEAD_ENDPOINT` in `.env` (must start with `https://`)
- Verify the `?site=` slug exists and is active in the n8n `sites` Data Table
- Check the browser console (a warning is logged when the endpoint is missing)

### Styles not loading
- Clear the browser cache
- Re-run `npm run build`

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build/)
- [Astro i18n Routing](https://docs.astro.build/en/guides/internationalization/)
- [Astro Fonts](https://docs.astro.build/en/guides/fonts/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
