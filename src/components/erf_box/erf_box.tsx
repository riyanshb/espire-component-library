import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';

type CustomBoxProps = BoxProps;

const ERFBox: React.FC<CustomBoxProps> = (props) => {
  return <Box {...props} />;
};

export default ERFBox;
