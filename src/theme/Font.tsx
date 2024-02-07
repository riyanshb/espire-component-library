import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';
import { theme } from './theme';

interface FontProps {
  fontKey: keyof typeof theme.fonts;
}

const Font: React.FC<FontProps> = ({ fontKey }) => {
  const { fonts } = useContext(ThemeContext);
  return <span style={{ fontFamily: fonts[fontKey] }}>{fontKey}</span>;
};

export default Font;
