import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, type PaletteMode } from '@mui/material/styles';
import { getTheme } from '../theme';

interface ThemeContextType {
  mode: PaletteMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getSystemTheme = (): PaletteMode => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

const getInitialTheme = (): PaletteMode => {
  // Check localStorage first
  const stored = localStorage.getItem('theme-mode');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  // Fall back to system preference
  return getSystemTheme();
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>(getInitialTheme);

  // Listen to system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't set a preference
      const stored = localStorage.getItem('theme-mode');
      if (!stored) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Persist theme preference
  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeProvider');
  }
  return context;
};
