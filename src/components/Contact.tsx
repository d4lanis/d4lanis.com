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
import { saveContactForm } from '../lib/appwrite';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phoneNumber: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Save contact form data to Appwrite database
      await saveContactForm({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        phoneNumber: formData.phoneNumber || undefined,
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '', phoneNumber: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label={t('contact.name')}
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.phoneNumber}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
              required
              sx={{ mb: 3 }}
              InputProps={{
                sx: { borderRadius: 2 }
              }}
            />

            {status === 'success' && (
              <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
                {t('contact.success')}
              </Alert>
            )}

            {status === 'error' && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                {t('contact.error')}
              </Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={status === 'sending'}
              endIcon={<SendIcon />}
              sx={{ py: 1.5, borderRadius: 2, fontSize: '1.1rem' }}
            >
              {status === 'sending' ? t('contact.sending') : t('contact.send')}
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
