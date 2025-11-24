import { AppBar, Toolbar, Button, Box, Container, IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useLanguage } from '../contexts/LanguageContext';
import { useThemeMode } from '../contexts/ThemeContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { mode, toggleTheme } = useThemeMode();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={0}
      sx={{ 
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? 'rgba(255, 255, 255, 0.98)'
            : 'rgba(26, 26, 26, 0.98)',
        backdropFilter: 'blur(10px)',
        borderBottom: (theme) =>
          theme.palette.mode === 'light'
            ? '1px solid rgba(0, 0, 0, 0.08)'
            : '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box 
            sx={{ 
              fontWeight: 700, 
              fontSize: '1.5rem',
              color: 'primary.main',
              cursor: 'pointer',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Daniel Alanis
          </Box>
          
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Button 
              color="inherit" 
              onClick={() => scrollToSection('about')}
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              {t('nav.about')}
            </Button>
            <Button 
              color="inherit" 
              onClick={() => scrollToSection('projects')}
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              {t('nav.projects')}
            </Button>
            <Button 
              color="inherit" 
              onClick={() => scrollToSection('skills')}
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              {t('nav.skills')}
            </Button>
            <Button 
              variant="contained" 
              onClick={() => scrollToSection('contact')}
            >
              {t('nav.contact')}
            </Button>
            <IconButton 
              onClick={toggleTheme}
              color="primary"
              sx={{ ml: 1 }}
              aria-label="toggle theme"
            >
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton 
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              color="primary"
              sx={{ ml: 1 }}
              aria-label="toggle language"
            >
              <LanguageIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
