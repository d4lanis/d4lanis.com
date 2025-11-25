import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BuildIcon from '@mui/icons-material/Build';
import BugReportIcon from '@mui/icons-material/BugReport';
import SpeedIcon from '@mui/icons-material/Speed';

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const services = [
    {
      icon: <BuildIcon sx={{ fontSize: 40 }} />,
      title: t('whatido.build.title'),
      description: t('whatido.build.desc'),
    },
    {
      icon: <BugReportIcon sx={{ fontSize: 40 }} />,
      title: t('whatido.fix.title'),
      description: t('whatido.fix.desc'),
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: t('whatido.optimize.title'),
      description: t('whatido.optimize.desc'),
    },
  ];

  return (
    <Box id="about" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg" ref={ref}>
        <Typography
          component={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          variant="h2"
          sx={{
            mb: 4,
            textAlign: 'center',
            color: 'primary.main',
          }}
        >
          {t('about.title')}
        </Typography>

        <Typography
          component={motion.p}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variant="body1"
          sx={{
            mb: 3,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: 'text.secondary',
          }}
        >
          {t('about.intro')}
        </Typography>

        <Box sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
          {[
            t('about.point1'),
            t('about.point2'),
            t('about.point3'),
            t('about.point4'),
          ].map((point, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 1.5,
              }}
            >
              <CheckCircleIcon color="secondary" />
              <Typography variant="body1">{point}</Typography>
            </Box>
          ))}
        </Box>

        <Typography
          component={motion.p}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variant="body1"
          sx={{
            mb: 6,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: 'text.secondary',
          }}
        >
          {t('about.experience')}
        </Typography>

        <Typography
          component={motion.h3}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          variant="h3"
          sx={{
            mb: 4,
            textAlign: 'center',
            color: 'primary.main',
          }}
        >
          {t('whatido.title')}
        </Typography>

        <Grid
          container
          spacing={4}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <Box sx={{ color: 'secondary.main', mb: 2 }}>
                  {service.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {service.description}
                </Typography>
              </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
