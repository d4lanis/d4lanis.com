import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import { skillCategories } from '../data/skills';

const Skills = () => {
  const { t } = useLanguage();

  return (
    <Box id="skills" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            textAlign: 'center',
            color: 'primary.main',
          }}
        >
          {t('skills.title')}
        </Typography>

        <Grid container spacing={3}>
          {skillCategories.map((category, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
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
