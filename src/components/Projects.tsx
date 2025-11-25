import { Box, Container, Typography, Grid, Card, CardContent, Chip, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../data/projects';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const { language, t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <Box id="projects" sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg" ref={ref}>
        <Typography
          component={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          variant="h2"
          sx={{
            mb: 6,
            textAlign: 'center',
            color: 'primary.main',
          }}
        >
          {t('projects.title')}
        </Typography>

        <Grid
          container
          spacing={3}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <Card
                component={motion.div}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 12px 32px rgba(0,0,0,0.15)' }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}
              >
                {/* Project Image Placeholder */}
                <CardMedia
                  sx={{
                    height: 180,
                    background: (theme) =>
                      theme.palette.mode === 'light'
                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        : 'linear-gradient(135deg, #434343 0%, #000000 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <CodeIcon
                    sx={{
                      fontSize: 64,
                      color: 'white',
                      zIndex: 1,
                      opacity: 0.9,
                    }}
                  />
                </CardMedia>

                <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="h5"
                    sx={{ mb: 1.5, fontWeight: 600, color: 'primary.main' }}
                  >
                    {language === 'en' ? project.titleEn : project.titleEs}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: 'text.secondary', fontStyle: 'italic', lineHeight: 1.6 }}
                  >
                    {language === 'en' ? project.descriptionEn : project.descriptionEs}
                  </Typography>

                  <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.tech.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'secondary.light',
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>

                  <Box component="ul" sx={{ pl: 2, mt: 2, mb: 2 }}>
                    {(language === 'en' ? project.highlights.en : project.highlights.es).map(
                      (highlight, hIndex) => (
                        <Typography
                          key={hIndex}
                          component="li"
                          variant="body2"
                          sx={{ mb: 0.5, color: 'text.secondary' }}
                        >
                          {highlight}
                        </Typography>
                      )
                    )}
                  </Box>

                  {project.link && (
                    <Button
                      variant="outlined"
                      size="small"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<LaunchIcon />}
                      sx={{
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          borderColor: 'primary.dark',
                          backgroundColor: 'primary.main',
                          color: 'white',
                        },
                      }}
                    >
                      {language === 'en' ? 'Visit Website' : 'Visitar Sitio'}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
