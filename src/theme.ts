import { createTheme, type PaletteMode } from '@mui/material/styles';

export const getTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: {
      // Deeper blues for both modes, adjusted for contrast in dark mode
      main: mode === 'light' ? '#2D5485' : '#5579A8',
      light: mode === 'light' ? '#5579A8' : '#8CB3D9',
      dark: mode === 'light' ? '#1E3A5F' : '#2D5485',
    },
    secondary: {
      // Charcoal accents or complementary
      main: mode === 'light' ? '#333333' : '#E0E0E0',
      light: mode === 'light' ? '#555555' : '#FFFFFF',
      dark: mode === 'light' ? '#1A1A1A' : '#CCCCCC',
    },
    background: {
      // Off-white / Dark gray
      default: mode === 'light' ? '#f0f2f5' : '#121212',
      paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
    },
    text: {
      // Charcoal gray vs off-white text
      primary: mode === 'light' ? '#333333' : '#F0F0F0',
      secondary: mode === 'light' ? '#5A6B7C' : '#A0A0A0',
    },
  },
  typography: {
    // Space Grotesk for titles, Source Sans 3 for body (falling back to Inter/Sans)
    fontFamily: '"Source Sans 3", "Inter", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Space Grotesk", "Inter", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          fontSize: '1rem',
          fontFamily: '"Space Grotesk", "Inter", sans-serif',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});
