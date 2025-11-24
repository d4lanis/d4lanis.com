# Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure EmailJS (Optional)**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your EmailJS credentials:
   - Sign up at https://www.emailjs.com/
   - Create a service and template
   - Add your credentials to `.env`

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open http://localhost:5173 in your browser

### Development

- **Hot reload**: Changes are automatically reflected
- **Language toggle**: Use the globe icon in the navbar
- **Smooth scrolling**: Click navigation items to scroll to sections

### Building for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization Guide

### Update Personal Information

1. **Contact Details**: Edit `src/components/Hero.tsx` and `src/components/Footer.tsx`
2. **Projects**: Edit `src/data/projects.ts`
3. **Skills**: Edit `src/data/skills.ts`
4. **About Text**: Edit `src/contexts/LanguageContext.tsx` translations

### Change Colors

Edit `src/theme.ts`:

```typescript
palette: {
  primary: {
    main: '#2C3E50',  // Change this
  },
  secondary: {
    main: '#3498DB',  // Change this
  },
}
```

### Add Social Links

Edit `src/components/Footer.tsx` to add or modify social media links.

## 🌐 Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build settings are already configured in `netlify.toml`
4. Add environment variables in Netlify dashboard if using EmailJS

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Build settings are already configured in `vercel.json`
4. Add environment variables in Vercel dashboard if using EmailJS

### GitHub Pages

```bash
npm run build
# Deploy the dist/ folder to your gh-pages branch
```

## 🔧 Troubleshooting

### Build fails
- Ensure Node.js version is 18+
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

### Contact form not working
- Check EmailJS credentials in `.env`
- Verify service and template are active in EmailJS dashboard
- Check browser console for errors

### Styles not loading
- Clear browser cache
- Run `npm run build` again
- Check that all CSS imports are correct

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Material UI Documentation](https://mui.com/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
