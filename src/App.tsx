import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
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
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </Box>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
