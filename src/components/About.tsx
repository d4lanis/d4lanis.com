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
    <Box id="about" sx={{ py: 12, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg" ref={ref}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  color: 'primary.main',
                  fontWeight: 700,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    width: 60,
                    height: 4,
                    backgroundColor: 'secondary.main',
                    borderRadius: 2,
                  },
                }}
              >
                {t('about.title')}
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: '1.25rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                {t('about.intro')}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: 'text.secondary',
                }}
              >
                {t('about.experience')}
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
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
                      gap: 1.5,
                    }}
                  >
                    <CheckCircleIcon color="secondary" sx={{ fontSize: 20 }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Grid
              container
              spacing={3}
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {services.map((service, index) => (
                <Grid size={{ xs: 12 }} key={index}>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ x: 10 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 4,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'secondary.main',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        },
                      }}
                    >
                      <Box 
                        sx={{ 
                          p: 1.5, 
                          borderRadius: 2, 
                          backgroundColor: 'rgba(52, 152, 219, 0.1)',
                          color: 'secondary.main',
                          display: 'flex',
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{ mb: 0.5, fontWeight: 700, fontSize: '1.25rem' }}
                        >
                          {service.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                          {service.description}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
