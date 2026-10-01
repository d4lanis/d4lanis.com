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
import { useLanguage } from '../contexts/LanguageContext';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const SITE_SLUG = 'd4lanis';
const RAW_LEAD_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT || '';
const LEAD_ENDPOINT = /\?[^\s]*site=/.test(RAW_LEAD_ENDPOINT)
  ? RAW_LEAD_ENDPOINT
  : `${RAW_LEAD_ENDPOINT.split('?')[0]}?site=${SITE_SLUG}`;
const FORM_ID = 'd4lanis-contact';

const Contact = () => {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      phoneNumber: String(data.get('phoneNumber') ?? ''),
      message: String(data.get('message') ?? ''),
      form_id: FORM_ID,
    };

    setSubmitting(true);
    setSuccess(false);
    setError(false);
    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
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

            {success && (
              <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
                {t('contact.success')}
              </Alert>
            )}

            {error && !success && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                {t('contact.error')}
              </Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={submitting}
              endIcon={<SendIcon />}
              sx={{ py: 1.5, borderRadius: 2, fontSize: '1.1rem' }}
            >
              {submitting ? t('contact.sending') : t('contact.send')}
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;