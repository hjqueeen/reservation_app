'use client';

import { createTheme } from '@mui/material/styles';

// Extend MUI Palette to include tertiary color
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  }

  interface PaletteOptions {
    tertiary?: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
  }
}

// GastroSoftware color palette from Theme.kt
// Light mode colors
const lightColors = {
  primary: '#FF8C00', // Orange color for restaurant theme
  secondary: '#FF6B35',
  tertiary: '#E85D04',
  surface: '#FFFFFF',
  onPrimary: '#FFFFFF',
  onSurface: '#000000',
};

// Dark mode colors
const darkColors = {
  primary: '#BB86FC',
  secondary: '#03DAC6',
  tertiary: '#03DAC6',
};

// Create a Material-UI theme with GastroSoftware colors
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: lightColors.primary,
      light: lightColors.secondary, // Using secondary as light variant
      dark: lightColors.tertiary, // Using tertiary as dark variant
      contrastText: lightColors.onPrimary,
    },
    secondary: {
      main: lightColors.secondary,
      light: '#FF8E6B', // Lighter shade of secondary
      dark: lightColors.tertiary,
      contrastText: lightColors.onPrimary,
    },
    tertiary: {
      main: lightColors.tertiary,
      light: lightColors.secondary,
      dark: '#C44A00', // Darker shade of tertiary
      contrastText: lightColors.onPrimary,
    },
    background: {
      default: '#f5f5f5',
      paper: lightColors.surface,
    },
    text: {
      primary: lightColors.onSurface,
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

// Dark theme variant
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: darkColors.primary,
      light: '#D4A5FF', // Lighter shade
      dark: '#9A6FC9', // Darker shade
      contrastText: '#000000',
    },
    secondary: {
      main: darkColors.secondary,
      light: '#3FE8D8', // Lighter shade
      dark: '#02B8A5', // Darker shade
      contrastText: '#000000',
    },
    tertiary: {
      main: darkColors.tertiary,
      light: '#3FE8D8',
      dark: '#02B8A5',
      contrastText: '#000000',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});
