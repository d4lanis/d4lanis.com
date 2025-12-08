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

  // Only feature the top 3 projects as requested
  const featuredProjects = projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Box id="projects" sx={{ py: 12, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg" ref={ref}>
        <Typography
          component={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          variant="h2"
          sx={{
            mb: 2,
            textAlign: 'center',
            color: 'primary.main',
            fontWeight: 700,
          }}
        >
          {t('projects.title')}
        </Typography>

        <Typography
          component={motion.p}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variant="body1"
          sx={{
            mb: 8,
            textAlign: 'center',
            maxWidth: '600px',
            mx: 'auto',
            fontSize: '1.1rem',
            color: 'text.secondary',
          }}
        >
          {language === 'en' 
            ? "Here are a few projects that demonstrate how I solve real-world problems." 
            : "Aquí hay algunos proyectos que demuestran cómo resuelvo problemas del mundo real."}
        </Typography>

        <Grid
          container
          spacing={6}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {featuredProjects.map((project, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                style={{ height: '100%' }}
              >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <CardMedia
                  sx={{
                    height: 200,
                    background: (theme) =>
                      theme.palette.mode === 'light'
                        ? 'linear-gradient(135deg, #2D5485 0%, #5579A8 100%)' // Deeper Blue gradient
                        : 'linear-gradient(135deg, #1E3A5F 0%, #2D5485 100%)', // Darker Deep Blue gradient
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <CodeIcon
                    sx={{
                      fontSize: 80,
                      color: 'rgba(255,255,255,0.8)',
                    }}
                  />
                </CardMedia>

                <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="h5"
                    sx={{ mb: 1, fontWeight: 700, color: 'primary.main', fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {language === 'en' ? project.titleEn : project.titleEs}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{ 
                      mb: 2, 
                      color: 'text.secondary', 
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                      fontWeight: 500,
                    }}
                  >
                    {language === 'en' ? project.descriptionEn : project.descriptionEs}
                  </Typography>

                  <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'background.default',
                          color: 'text.secondary',
                          border: '1px solid',
                          borderColor: 'divider',
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Box>

                  <Box component="ul" sx={{ pl: 2, m: 0, mb: 3, flexGrow: 1 }}>
                    {(language === 'en' ? project.highlights.en : project.highlights.es).map(
                      (highlight, hIndex) => (
                        <Typography
                          key={hIndex}
                          component="li"
                          variant="body2"
                          sx={{ mb: 0.5, color: 'text.secondary', fontSize: '0.9rem' }}
                        >
                          {highlight}
                        </Typography>
                      )
                    )}
                  </Box>

                  {project.link && (
                    <Button
                      variant="text"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<LaunchIcon />}
                      sx={{
                        alignSelf: 'flex-start',
                        color: 'primary.main',
                        fontWeight: 600,
                        p: 0,
                        '&:hover': {
                          backgroundColor: 'transparent',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {language === 'en' ? 'View Project' : 'Ver Proyecto'}
                    </Button>
                  )}
                </CardContent>
              </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
