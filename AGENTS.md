# AGENTS

This file provides guidance to AI Agents when working with this personal portfolio landing page project.

## Project Overview

This is a modern, responsive personal portfolio landing page built with React, TypeScript, and Vite. The site showcases projects, skills, and provides contact information in a visually appealing, animated interface.

- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Material-UI (MUI) with custom theming
- **Animations**: Framer Motion
- **Deployment**: Appwrite Sites (Static Hosting)
- **Form**: Formspree (Contact form submissions)
- **Language Support**: Bilingual (English/Spanish)

## Project Architecture & Structure

### Directory Structure

```
d4lanis.com/
├── src/
│   ├── components/      # React components for each section
│   │   ├── About.tsx    # About me section
│   │   ├── Contact.tsx  # Contact form and info
│   │   ├── Footer.tsx   # Page footer with links
│   │   ├── Hero.tsx     # Hero banner/landing section
│   │   ├── Navbar.tsx   # Navigation bar
│   │   ├── Projects.tsx # Projects showcase
│   │   └── Skills.tsx   # Skills display
│   ├── contexts/        # React context providers
│   │   ├── LanguageContext.tsx # i18n language state
│   │   └── ThemeContext.tsx    # Theme mode state (light/dark)
│   ├── data/           # Static content data
│   │   ├── projects.ts  # Project portfolio data
│   │   └── skills.ts    # Skills list data
│   ├── assets/         # Images, icons, static files
│   ├── App.tsx         # Root application component
│   ├── main.tsx        # Application entry point
│   ├── index.css       # Global styles
│   └── theme.ts        # MUI theme configuration
├── public/             # Static public assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite build configuration
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

#### Animation Library Strategy

This project uses **Framer Motion** for animations:
- **Framer Motion**: Complex orchestrated animations, scroll-triggered effects, advanced gestures, micro-interactions, and entrance animations

Combine Framer Motion with Material UI components for optimal performance and developer experience.

#### Framer Motion Patterns

```tsx
// Fade in on scroll
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Stagger children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Hover interactions
const hoverVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};
```

#### Animation Guidelines
- **Performance**: Use `transform` and `opacity` for 60fps animations
- **Duration**: 
  - Micro-interactions: 100-300ms
  - Standard transitions: 300-500ms
  - Complex animations: 500-800ms
- **Easing**: 
  - `easeOut` for entrances (feels responsive)
  - `easeInOut` for smooth transitions
  - `spring` for playful, natural movement
- **Avoid**: Excessive motion that can cause motion sickness
- **Respect**: `prefers-reduced-motion` for accessibility

#### Scroll Animations
```tsx
// Use intersection observer for scroll-triggered animations
const controls = useAnimation();
const [ref, inView] = useInView({ threshold: 0.2 });

useEffect(() => {
  if (inView) {
    controls.start("visible");
  }
}, [controls, inView]);
```



### Performance Optimization

#### Image Optimization
- Use WebP format with fallbacks
- Lazy load images below the fold
- Serve responsive images with `srcset`
- Compress images (aim for <200KB per image)
- Use SVG for icons and logos

#### Code Splitting
```tsx
// Lazy load components
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

// Wrap in Suspense
<Suspense fallback={<Loading />}>
  <Projects />
</Suspense>
```

#### Bundle Optimization
- Tree-shake unused code
- Minimize third-party dependencies
- Use Vite's build optimization
- Target modern browsers (ES2020+)

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
- Runs on `http://localhost:5173`
- Hot module replacement (HMR) enabled
- Fast refresh for React components

### Build Process
1. TypeScript compilation
2. Vite bundling and optimization
3. Asset processing and minification
4. Static site generation

## Code Style Guidelines

### Component Structure

```tsx
// ✅ Preferred component structure
import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  // Hooks
  const [isVisible, setIsVisible] = useState(false);

  // Effects
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handlers
  const handleClick = () => {
    // Handle action
  };

  // Render
  return (
    <Box component={motion.section} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
      <Button onClick={handleClick}>Get Started</Button>
    </Box>
  );
}
```

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

### MUI Theming

```tsx
// Custom theme structure
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  spacing: 8, // Base spacing unit
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
```

### Responsive Design Patterns

```tsx
// ✅ Use MUI breakpoints
import { useTheme, useMediaQuery } from '@mui/material';

function ResponsiveComponent() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  return (
    <Box 
      sx={{
        padding: { xs: 2, sm: 3, md: 4 }, // Responsive spacing
        fontSize: { xs: '0.875rem', md: '1rem' }, // Responsive typography
        display: { xs: 'block', md: 'flex' }, // Responsive layout
      }}
    >
      {isMobile ? <MobileView /> : <DesktopView />}
    </Box>
  );
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
- **Form Submission**: Contact form submissions handled by Formspree
- **Data Privacy**: Clear privacy policy for collected data

## Internationalization (i18n)

### Language Context Pattern

```tsx
// Language context structure
interface LanguageContextType {
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
  t: (key: string) => string; // Translation function
}

// Translation object structure
const translations = {
  en: {
    hero: {
      title: 'Welcome',
      subtitle: 'Your subtitle here',
      cta: 'Get in Touch',
    },
  },
  es: {
    hero: {
      title: 'Bienvenido',
      subtitle: 'Tu subtítulo aquí',
      cta: 'Contáctame',
    },
  },
};
```

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

### Formspree Integration

#### Contact Form Setup

```typescript
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('YOUR_FORM_ID');
  if (state.succeeded) return <p>Thanks!</p>;
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" required />
      <ValidationError field="name" errors={state.errors} />
      <input type="email" name="email" required />
      <ValidationError field="email" errors={state.errors} />
      <textarea name="message" required />
      <ValidationError field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>Send</button>
    </form>
  );
}
```

#### Form Configuration

1. Create account at https://formspree.io/
2. Create a new form and note the Form ID from the URL
3. In the form settings, add fields with these names:
   - `name` (text, required)
   - `email` (email, required)
   - `message` (textarea, required)
   - `phoneNumber` (tel, optional)
4. Configure email notifications in the Formspree dashboard

#### Environment Variables

```bash
# .env
VITE_FORMSPREE_FORM_ID=your_form_id
```

#### Security Considerations

- Formspree handles spam protection automatically
- Rate limiting is built into Formspree
- Formspree provides reCAPTCHA protection
- All form data is encrypted in transit

## Testing Guidelines

### Component Testing
```tsx
// Example test structure
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  it('renders title and subtitle', () => {
    render(<Hero title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });
  
  it('calls onClick handler when button is clicked', () => {
    const handleClick = jest.fn();
    render(<Hero title="Test" onCtaClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

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
- Clear Vite cache: `rm -rf node_modules/.vite`
- Check TypeScript errors: `npx tsc --noEmit`

### Animation Performance
- Use `transform` and `opacity` instead of layout properties
- Implement `will-change` sparingly for complex animations
- Reduce motion complexity on mobile devices

### Responsive Issues
- Test on real devices, not just browser devtools
- Use MUI's `sx` prop for responsive styling
- Implement mobile-first approach

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
