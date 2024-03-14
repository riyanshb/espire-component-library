import React from 'react';
import './button.css';

interface ButtonProps {
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
  const buttonClasses = `button ${variant}`;
  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default ERFButton;
