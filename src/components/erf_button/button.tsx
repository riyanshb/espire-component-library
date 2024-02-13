import React, { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  type: 'primary' | 'secondary' | 'error' | 'outlined' | 'text';
  onClick?: () => void;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  let buttonClass = 'button';
  let typeClass = '';

  if (type === 'primary') {
    typeClass = 'primary';
  } else if (type === 'secondary') {
    typeClass = 'secondary';
  } else if (type === 'error') {
    typeClass = 'error';
  } else if (type === 'outlined') {
    typeClass = 'outlined';
  } else if (type === 'text') {
    typeClass = 'text';
  }

  return (
    <button className={`${buttonClass} ${typeClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
