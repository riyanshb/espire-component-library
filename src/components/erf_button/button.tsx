import React from 'react';
import './button.css';
import { Button } from '@mui/material';

export interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'error' | 'text' | 'outlined';
  onClick?: () => void;
  disabled?: boolean;
}

const ERFButton: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  onClick,
  disabled,
}) => {
 
  let buttonComponent;
  switch (variant) {
    case 'primary':
      buttonComponent = (<Button variant="contained" color="success"  onClick={() => {
        onClick
      }}>
      {text}
    </Button>)
      break;
      case 'secondary':
        buttonComponent = ( <Button color="secondary"  onClick={() => {
          onClick
        }}> {text}</Button>)
      break;
      case 'error':
        buttonComponent =  (<Button variant="outlined" color="error"  onClick={() => {
          onClick
        }}>
         {text}
      </Button>)
      break;
      case 'text':
        buttonComponent = ( <Button variant="text" onClick={() => {
          onClick
        }}> {text}</Button>)
      break;
      case 'outlined':
        buttonComponent =  ( <Button variant="outlined" disabled onClick={() => {
          onClick
        }}> {text}</Button>)
      break;
  
    default:
      break;
  }
 return buttonComponent;
};

export default ERFButton;
