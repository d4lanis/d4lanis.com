import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

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
            ? 'linear-gradient(135deg, #F9F9F9 0%, #E9ECEF 100%)'
            : 'linear-gradient(135deg, #121212 0%, #0a0a0a 100%)',
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
              variant="h3"
              component="h2"
              sx={{
                mb: 2,
                color: 'text.secondary',
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              Daniel Alanis
            </Typography>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                color: 'primary.main',
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '4rem' },
              }}
            >
              {t('hero.title')}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                color: 'text.primary',
                fontWeight: 600,
                height: '3.5rem', // Min height to prevent layout shift
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typewriter
                key={language} // Re-render on language change
                options={{
                  strings: [t('hero.subtitle')],
                  autoStart: true,
                  delay: 50,
                  deleteSpeed: 30,
                  loop: true,
                  cursor: '_',
                }}
              />
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{
                mb: 5,
                maxWidth: '700px',
                mx: 'auto',
                color: 'text.secondary',
                fontSize: '1.25rem',
                lineHeight: 1.6,
              }}
            >
              {t('hero.description')}
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                size="large"
                onClick={scrollToContact}
                sx={{
                  px: 5,
                  py: 1.8,
                  fontSize: '1.1rem',
                  borderRadius: '50px',
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
