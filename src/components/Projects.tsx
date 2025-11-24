import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../data/projects';

const Projects = () => {
  const { language, t } = useLanguage();

  return (
    <Box id="projects" sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            mb: 6,
            textAlign: 'center',
            color: 'primary.main',
          }}
        >
          {t('projects.title')}
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid key={index} size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{ mb: 1.5, fontWeight: 600, color: 'primary.main' }}
                  >
                    {language === 'en' ? project.titleEn : project.titleEs}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: 'text.secondary', fontStyle: 'italic' }}
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

                  <Box component="ul" sx={{ pl: 2, mt: 2 }}>
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
