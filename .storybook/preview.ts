// import type { Preview } from '@storybook/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
// import { lightTheme, darkTheme } from '../src/themes.js';

const lightTheme = createTheme({});
const darkTheme = createTheme({});

/* snipped for brevity */

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
