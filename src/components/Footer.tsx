import { Box, Container, Typography, IconButton } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
            Daniel Alanis
          </Typography>
          
          <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
            {t('footer.tagline')}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
            <IconButton
              sx={{ color: 'white' }}
              href="mailto:daniel.alanis.hdz@gmail.com"
              aria-label="Email"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'white' }}
              href="tel:+528441461714"
              aria-label="Phone"
            >
              <PhoneIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'white' }}
              href="https://github.com/d4lanis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              sx={{ color: 'white' }}
              href="https://linkedin.com/in/daniel-alanis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
          </Box>

          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {t('footer.location')}
          </Typography>
          
          <Typography variant="body2" sx={{ mt: 2, opacity: 0.7 }}>
            © {new Date().getFullYear()} Daniel Alanis. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
