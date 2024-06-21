import React from 'react';
import './button.css';
import { Button } from '@mui/material';

export interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'error' | 'text' | 'outlined';
  onClick: Function;
  buttonId: string;
}

const ERFButton: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  onClick,
  buttonId = '',
}) => {
  let buttonComponent;
  switch (variant) {
    case 'primary':
      buttonComponent = (
        <Button
          variant='contained'
          color='success'
          onClick={() => {
            onClick(buttonId);
          }}
        >
          {text}
        </Button>
      );
      break;
    case 'secondary':
      buttonComponent = (
        <Button
          color='secondary'
          onClick={() => {
            onClick(buttonId);
          }}
        >
          {' '}
          {text}
        </Button>
      );
      break;
    case 'error':
      buttonComponent = (
        <Button
          variant='outlined'
          color='error'
          onClick={() => {
            onClick(buttonId);
          }}
        >
          {text}
        </Button>
      );
      break;
    case 'text':
      buttonComponent = (
        <Button
          variant='text'
          onClick={() => {
            onClick(buttonId);
          }}
        >
          {text}
        </Button>
      );
      break;
    case 'outlined':
      buttonComponent = (
        <Button
          variant='outlined'
          disabled
          onClick={() => {
            onClick(buttonId);
          }}
        >
          {text}
        </Button>
      );
      break;

    default:
      break;
  }
  return buttonComponent;
};

export default ERFButton;
