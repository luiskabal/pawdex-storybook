import { createTheme } from '@mui/material/styles';

// Pet-themed (current default) - soft pastels
export const petTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFB6C1', // Light pink
      light: '#FFE4E1',
      dark: '#FF69B4',
      contrastText: '#333333',
    },
    secondary: {
      main: '#98FB98', // Mint green
      light: '#F0FFF0',
      dark: '#90EE90',
      contrastText: '#333333',
    },
    tertiary: {
      main: '#E6E6FA', // Lavender
      light: '#F8F8FF',
      dark: '#DDA0DD',
      contrastText: '#333333',
    },
    warning: {
      main: '#FFFFE0', // Light yellow
      light: '#FFFACD',
      dark: '#FFD700',
      contrastText: '#333333',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      color: '#333333',
    },
    h2: {
      fontWeight: 600,
      color: '#333333',
    },
    h3: {
      fontWeight: 500,
      color: '#333333',
    },
  },
  shape: {
    borderRadius: 12,
  },
});

// Professional theme - corporate blues and grays
export const professionalTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Professional blue
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#757575', // Professional gray
      light: '#9e9e9e',
      dark: '#424242',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      color: '#212121',
    },
    h2: {
      fontWeight: 500,
      color: '#212121',
    },
    h3: {
      fontWeight: 400,
      color: '#212121',
    },
  },
  shape: {
    borderRadius: 4,
  },
});

// Dark theme - modern dark mode
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc', // Purple accent
      light: '#d7b3ff',
      dark: '#985eff',
      contrastText: '#000000',
    },
    secondary: {
      main: '#03dac6', // Teal accent
      light: '#66fff9',
      dark: '#00a896',
      contrastText: '#000000',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      color: '#ffffff',
    },
    h2: {
      fontWeight: 600,
      color: '#ffffff',
    },
    h3: {
      fontWeight: 500,
      color: '#ffffff',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

// Nature theme - earth tones and greens
export const natureTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4caf50', // Forest green
      light: '#81c784',
      dark: '#388e3c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8d6e63', // Earth brown
      light: '#a1887f',
      dark: '#5d4037',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f1f8e9',
      paper: '#ffffff',
    },
    text: {
      primary: '#2e7d32',
      secondary: '#558b2f',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      color: '#2e7d32',
    },
    h2: {
      fontWeight: 600,
      color: '#2e7d32',
    },
    h3: {
      fontWeight: 500,
      color: '#2e7d32',
    },
  },
  shape: {
    borderRadius: 16,
  },
});

// Ocean theme - blues and teals
export const oceanTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0277bd', // Ocean blue
      light: '#58a5f0',
      dark: '#004c8c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00acc1', // Cyan
      light: '#5ddef4',
      dark: '#007c91',
      contrastText: '#ffffff',
    },
    background: {
      default: '#e0f2f1',
      paper: '#ffffff',
    },
    text: {
      primary: '#006064',
      secondary: '#00838f',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      color: '#006064',
    },
    h2: {
      fontWeight: 600,
      color: '#006064',
    },
    h3: {
      fontWeight: 500,
      color: '#006064',
    },
  },
  shape: {
    borderRadius: 20,
  },
});

// Export all themes with their display names
export const themes = {
  pet: { theme: petTheme, name: 'Pet Theme (Default)' },
  professional: { theme: professionalTheme, name: 'Professional' },
  dark: { theme: darkTheme, name: 'Dark Mode' },
  nature: { theme: natureTheme, name: 'Nature' },
  ocean: { theme: oceanTheme, name: 'Ocean' },
};

export type ThemeKey = keyof typeof themes;