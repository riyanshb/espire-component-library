// ThemeContext.ts
import React from 'react';

interface Colors {
  [key: string]: string;
}

export interface Theme {
  fonts: {
    primary: string;
    secondary: string;
  };
  colors: Colors;
  textStyles: {
    [key: string]: {
      fontSize: string;
      fontWeight?: string;
      color: string;
    };
  };
}

export const ThemeContext = React.createContext<Theme>({} as Theme);
