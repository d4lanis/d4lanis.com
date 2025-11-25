import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button } from '@mui/material';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <LanguageProvider>
        {/* Skip to main content link for accessibility */}
        <Button
          href="#main-content"
          sx={{
            position: 'absolute',
            left: '-9999px',
            zIndex: 9999,
            '&:focus': {
              left: '50%',
              top: '10px',
              transform: 'translateX(-50%)',
              backgroundColor: 'primary.main',
              color: 'white',
              px: 3,
              py: 1,
            },
          }}
        >
          Skip to main content
        </Button>

        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <Box component="main" id="main-content" sx={{ flexGrow: 1 }}>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </Box>
          <Footer />
        </Box>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
