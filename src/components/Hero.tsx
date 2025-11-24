import { Box, Container, Typography, Button } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            animation: 'fadeInUp 1s ease-out',
            '@keyframes fadeInUp': {
              from: {
                opacity: 0,
                transform: 'translateY(30px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              mb: 2,
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            Daniel Alanis
          </Typography>
          
          <Typography
            variant="h3"
            sx={{
              mb: 3,
              color: 'text.secondary',
              fontWeight: 500,
            }}
          >
            {t('hero.title')}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              mb: 2,
              color: 'primary.dark',
              fontWeight: 600,
            }}
          >
            {t('hero.subtitle')}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
              color: 'text.secondary',
              fontSize: '1.1rem',
            }}
          >
            {t('hero.description')}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2,
              mb: 4,
              color: 'text.secondary',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <EmailIcon fontSize="small" />
              <Typography variant="body2">daniel.alanis.hdz@gmail.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">+52 844 146 1714</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">Saltillo, Coahuila, México</Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            size="large"
            onClick={scrollToContact}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
            }}
          >
            {t('hero.cta')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
