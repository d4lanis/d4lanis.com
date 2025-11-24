# Daniel Alanis - Portfolio Website

A modern, bilingual (English/Spanish) portfolio website built with React, TypeScript, and Material UI.

## 🚀 Features

- **Bilingual Support**: Toggle between English and Spanish
- **Modern Design**: Clean, minimalist UI with Material UI
- **Responsive**: Mobile-first design that works on all devices
- **Contact Form**: Integrated with EmailJS for direct messaging
- **Projects Showcase**: Highlights key projects with tech stacks and achievements
- **Skills Display**: Organized by category (Frontend, Backend, Cloud, AI, etc.)
- **Smooth Animations**: Subtle transitions and hover effects

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **UI Library**: Material UI (MUI)
- **Styling**: Emotion (CSS-in-JS)
- **Email**: EmailJS
- **Icons**: Material Icons

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
```

## 🔧 Configuration

### EmailJS Setup

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update `src/components/Contact.tsx` with your credentials:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { /* template params */ },
  'YOUR_PUBLIC_KEY'
);
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Navigation with language switcher
│   ├── Hero.tsx          # Hero section with CTA
│   ├── About.tsx         # About me and what I do
│   ├── Projects.tsx      # Project cards
│   ├── Skills.tsx        # Skills by category
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer with links
├── contexts/
│   └── LanguageContext.tsx  # Bilingual support
├── data/
│   ├── projects.ts       # Project data
│   └── skills.ts         # Skills data
├── theme.ts              # MUI theme configuration
├── App.tsx               # Main app component
└── main.tsx              # Entry point
```

## 🌐 Deployment

### Netlify

```bash
npm run build
# Deploy the 'dist' folder
```

### Vercel

```bash
npm run build
# Deploy with Vercel CLI or connect your repository
```

### GitHub Pages

```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## 📝 Customization

### Adding Projects

Edit `src/data/projects.ts`:

```typescript
{
  titleEn: 'Project Name',
  titleEs: 'Nombre del Proyecto',
  descriptionEn: 'Description in English',
  descriptionEs: 'Descripción en español',
  tech: ['React', 'Node.js'],
  highlights: {
    en: ['Achievement 1', 'Achievement 2'],
    es: ['Logro 1', 'Logro 2']
  }
}
```

### Adding Skills

Edit `src/data/skills.ts`:

```typescript
{
  category: 'categoryKey',
  skills: ['Skill 1', 'Skill 2']
}
```

### Changing Theme

Edit `src/theme.ts` to customize colors, typography, and component styles.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Daniel Alanis**
- Email: daniel.alanis.hdz@gmail.com
- Phone: +52 844 146 1714
- Location: Saltillo, Coahuila, México

---

Built with ❤️ using React, TypeScript, and Material UI
