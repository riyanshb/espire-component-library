import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';
import { theme } from './theme';

interface TextStyleProps {
  textStyleKey: keyof typeof theme.textStyles;
  children?: React.ReactNode; // Define children prop
}

const TextStyle: React.FC<TextStyleProps> = ({ textStyleKey, children }) => {
  const { textStyles } = useContext(ThemeContext);
  const styleValue = textStyles[textStyleKey];

  return <span style={styleValue}>{children}</span>;
};

export default TextStyle;
