import { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useLanguage } from '../contexts/LanguageContext';
import { useThemeMode } from '../contexts/ThemeContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { mode, toggleTheme } = useThemeMode();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const navItems = [
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.projects'), id: 'projects' },
    { label: t('nav.skills'), id: 'skills' },
  ];

  return (
    <>
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
                fontFamily: '"Space Grotesk", sans-serif',
                letterSpacing: '-0.02em',
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Box component="span" sx={{ color: 'text.secondary', opacity: 0.5 }}>{'{'}</Box> DA <Box component="span" sx={{ color: 'text.secondary', opacity: 0.5 }}>{'}'}</Box>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {/* Desktop Navigation */}
              <Button 
                color="inherit" 
                onClick={() => scrollToSection('about')}
                sx={{ display: { xs: 'none', md: 'inline-flex' } }}
              >
                {t('nav.about')}
              </Button>
              <Button 
                color="inherit" 
                onClick={() => scrollToSection('projects')}
                sx={{ display: { xs: 'none', md: 'inline-flex' } }}
              >
                {t('nav.projects')}
              </Button>
              <Button 
                color="inherit" 
                onClick={() => scrollToSection('skills')}
                sx={{ display: { xs: 'none', md: 'inline-flex' } }}
              >
                {t('nav.skills')}
              </Button>
              <Button 
                variant="contained" 
                onClick={() => scrollToSection('contact')}
                sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
              >
                {t('nav.contact')}
              </Button>

              {/* Mobile Menu Button */}
              <IconButton
                color="primary"
                aria-label="open navigation menu"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { xs: 'inline-flex', md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>

              {/* Theme Toggle */}
              <IconButton 
                onClick={toggleTheme}
                color="primary"
                sx={{ ml: { xs: 0, sm: 1 } }}
                aria-label="toggle theme"
              >
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>

              {/* Language Toggle */}
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

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: 'background.default',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            borderBottom: (theme) =>
              theme.palette.mode === 'light'
                ? '1px solid rgba(0, 0, 0, 0.08)'
                : '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <Typography variant="h6" color="primary.main">
            Menu
          </Typography>
          <IconButton onClick={handleDrawerToggle} aria-label="close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => scrollToSection(item.id)}>
                <ListItemText 
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '1.1rem',
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={() => scrollToSection('contact')}>
              <ListItemText 
                primary={t('nav.contact')}
                primaryTypographyProps={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'primary.main',
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
