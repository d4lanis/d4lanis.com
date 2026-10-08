# Daniel Alanis - Portfolio Website

A modern, bilingual (English/Spanish) portfolio website built with **Astro**, TypeScript, and hand-written CSS. Fully static, with minimal JavaScript.

## 🚀 Features

- **Dark Mode**: Automatic theme detection based on system preference, plus a manual toggle (persisted in `localStorage`, no flash on load)
- **Bilingual (real routes)**: English at `/`, Spanish at `/es/` — both prerendered and indexable
- **Static & fast**: no UI framework, no animation runtime; only tiny amounts of client JS
- **Contact Form**: posts JSON to an n8n lead endpoint
- **Projects Showcase**: highlights key projects with tech stacks and achievements
- **Skills Display**: organized by category (Frontend, Backend, Cloud, AI, etc.)
- **Smooth Animations**: CSS transitions + IntersectionObserver reveal, respecting `prefers-reduced-motion`

## 🛠️ Tech Stack

- **Framework**: Astro (static site generation)
- **Language**: TypeScript
- **Styling**: CSS with design tokens + scoped component styles
- **Animations**: CSS + a small IntersectionObserver script (no runtime)
- **Icons**: inline SVG (`src/components/ui/Icon.astro`)
- **Fonts**: self-hosted variable fonts (`@fontsource-variable/manrope`, `@fontsource-variable/inter`)
- **Form backend**: n8n webhook + Data Table

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type-check / lint
npm run check
npm run lint
```

The dev server runs on `http://localhost:4321`.

## 🔧 Configuration

Copy `.env.example` to `.env` and set the lead endpoint:

```env
PUBLIC_LEAD_ENDPOINT=https://automations.d4lanis.com/webhook/form/lead?site=d4lanis
```

> Astro only exposes variables prefixed with `PUBLIC_` to the client. The value is inlined at build time.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.astro        # Navigation, theme + language toggles, mobile drawer
│   ├── Hero.astro          # Hero section with typewriter
│   ├── About.astro         # About me + "What I do"
│   ├── Projects.astro      # Projects grid
│   ├── ProjectCard.astro   # Single project card
│   ├── Skills.astro        # Skills by category
│   ├── Contact.astro       # Contact form (vanilla fetch)
│   ├── Footer.astro        # Footer
│   ├── HomePage.astro      # Composes all sections for a language
│   └── ui/                 # Icon component + icon types
├── layouts/
│   ├── BaseLayout.astro    # <head>, SEO/OG/hreflang, theme init, reveal script
│   └── LegalLayout.astro   # Header/footer + typography for legal pages
├── i18n/                   # ui.ts (dictionaries) + utils.ts (helpers)
├── data/                   # projects.ts, skills.ts
├── styles/                 # tokens.css, global.css
└── pages/                  # index, es/index, privacy-policy, terms, data-deletion
```

## 🌐 Deployment

Static output goes to `dist/`. Any static host works:

### Appwrite Sites (primary)

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- Set `PUBLIC_LEAD_ENDPOINT` in the project environment variables

### Netlify / Vercel

- Build command `npm run build`, publish `dist` (Netlify config is in `netlify.toml`; Vercel auto-detects Astro)

## 📝 Customization

### Adding Projects

Edit `src/data/projects.ts`:

```ts
{
  titleEn: 'Project Name',
  titleEs: 'Nombre del Proyecto',
  descriptionEn: 'Description in English',
  descriptionEs: 'Descripción en español',
  tech: ['React', 'Node.js'],
  highlights: {
    en: ['Achievement 1', 'Achievement 2'],
    es: ['Logro 1', 'Logro 2'],
  },
}
```

### Adding Skills

Edit `src/data/skills.ts`:

```ts
{
  category: 'categoryKey', // must have a matching skills.<key> translation
  skills: ['Skill 1', 'Skill 2'],
}
```

### Changing Colors / Typography

Edit the design tokens in `src/styles/tokens.css` (light values on `:root`, dark values on `[data-theme="dark"]`).

### Editing Copy / Translations

Edit `src/i18n/ui.ts`. Add each key to both `en` and `es`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Daniel Alanis**

- Email: daniel.alanis.hdz@gmail.com
- Phone: +52 844 146 1714
- Location: Saltillo, Coahuila, México

---

Built with Astro, TypeScript, and a lot of CSS.
