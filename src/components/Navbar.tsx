import { AppBar, Toolbar, Button, Box, Container, IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

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
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
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
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              color="primary"
              sx={{ ml: 1 }}
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
