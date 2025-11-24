import { useState, type FormEvent } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Paper,
} from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from 'emailjs-com';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Get credentials from environment variables
      // Copy .env.example to .env and add your EmailJS credentials
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Email error:', error);
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
    <Box id="contact" sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            textAlign: 'center',
            color: 'primary.main',
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
            fontSize: '1.1rem',
          }}
        >
          {t('contact.subtitle')}
        </Typography>

        <Paper elevation={0} sx={{ p: 4, backgroundColor: 'background.default' }}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label={t('contact.name')}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ mb: 3 }}
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
            />

            {status === 'success' && (
              <Alert severity="success" sx={{ mb: 3 }}>
                {t('contact.success')}
              </Alert>
            )}

            {status === 'error' && (
              <Alert severity="error" sx={{ mb: 3 }}>
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
              sx={{ py: 1.5 }}
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
