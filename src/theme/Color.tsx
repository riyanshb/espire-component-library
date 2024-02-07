import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';
import { theme } from './theme';

interface ColorProps {
  colorKey: keyof typeof theme.colors;
  children?: React.ReactNode; // Define children prop
}

const Color: React.FC<ColorProps> = ({ colorKey, children }) => {
  const { colors } = useContext(ThemeContext);
  const colorValue = colors[colorKey];

  return <span style={{ color: colorValue }}>{children}</span>;
};

export default Color;
