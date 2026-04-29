import { useState, type FormEvent } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Paper,
  IconButton,
  Stack,
  Tooltip,
} from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '../contexts/LanguageContext';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm('xeenjqzb');
  const [showSuccess, setShowSuccess] = useState(false);

  if (state.succeeded && !showSuccess) {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setShowSuccess(false);
    await handleSubmit(e);
  };

  return (
    <Box id="contact" sx={{ py: 12, backgroundColor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            textAlign: 'center',
            color: 'primary.main',
            fontWeight: 700,
          }}
        >
          {t('contact.title')}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            textAlign: 'center',
            color: 'text.secondary',
            fontSize: '1.2rem',
          }}
        >
          {t('contact.subtitle')}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 6 }}
        >
          <Tooltip title="LinkedIn">
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/daniel-alanis-hdz/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              size="large"
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': { backgroundColor: 'action.hover', borderColor: 'primary.main' }
              }}
            >
              <LinkedInIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub">
            <IconButton
              component="a"
              href="https://github.com/D4lanis"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              size="large"
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': { backgroundColor: 'action.hover', borderColor: 'primary.main' }
              }}
            >
              <GitHubIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Email Me">
            <IconButton
              component="a"
              href="mailto:daniel.alanis.hdz@gmail.com"
              color="primary"
              size="large"
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': { backgroundColor: 'action.hover', borderColor: 'primary.main' }
              }}
            >
              <EmailIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
        </Stack>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            backgroundColor: 'background.paper',
            borderRadius: 4,
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
          }}
        >
          <form onSubmit={handleFormSubmit}>
            <TextField
              fullWidth
              label={t('contact.name')}
              name="name"
              required
              sx={{ mb: 3 }}
              InputProps={{
                sx: { borderRadius: 2 }
              }}
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <TextField
              fullWidth
              label={t('contact.email')}
              name="email"
              type="email"
              required
              sx={{ mb: 3 }}
              InputProps={{
                sx: { borderRadius: 2 }
              }}
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <TextField
              fullWidth
              label={t('contact.phone')}
              name="phoneNumber"
              type="tel"
              placeholder="+1 (555) 000-0000"
              helperText={t('contact.phoneOptional')}
              sx={{ mb: 3 }}
              InputProps={{
                sx: { borderRadius: 2 }
              }}
            />
            <ValidationError prefix="Phone Number" field="phoneNumber" errors={state.errors} />

            <TextField
              fullWidth
              label={t('contact.message')}
              name="message"
              multiline
              rows={6}
              required
              sx={{ mb: 3 }}
              InputProps={{
                sx: { borderRadius: 2 }
              }}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            {showSuccess && (
              <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
                {t('contact.success')}
              </Alert>
            )}

            {state.errors && Object.keys(state.errors).length > 0 && !showSuccess && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                {t('contact.error')}
              </Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={state.submitting}
              endIcon={<SendIcon />}
              sx={{ py: 1.5, borderRadius: 2, fontSize: '1.1rem' }}
            >
              {state.submitting ? t('contact.sending') : t('contact.send')}
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;