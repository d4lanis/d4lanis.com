import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: (theme) =>
          theme.palette.mode === 'light'
            ? 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
            : 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ textAlign: 'center' }}
        >
          <motion.div variants={itemVariants}>
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
          </motion.div>
          
          <motion.div variants={itemVariants}>
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
          </motion.div>

          <motion.div variants={itemVariants}>
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
          </motion.div>

          <motion.div variants={itemVariants}>
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
          </motion.div>

          <motion.div variants={itemVariants}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
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
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
