import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#254c91',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },

    secondary: {
      main: '#ba68c8',
      light: '#42a5f5',
      dark: '#7b1fa2',
    },
  },
  typography: {
    fontFamily: 'Raleway',
    h1: {
      fontSize: '2.5rem',
    },
    header: {
      fontSize: '16px',
      fontWeight: '18',
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
    },
  },
});
