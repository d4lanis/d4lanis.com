import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { skillCategories } from '../data/skills';

const Skills = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <Box id="skills" sx={{ py: 8, backgroundColor: 'background.default' }}>
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
          {t('skills.title')}
        </Typography>

        <Grid
          container
          spacing={3}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                component={motion.div}
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: 'background.paper',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: 'primary.main',
                    textTransform: 'capitalize',
                  }}
                >
                  {t(`skills.${category.category}`)}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      label={skill}
                      sx={{
                        backgroundColor: 'secondary.main',
                        color: 'white',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: 'secondary.dark',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
