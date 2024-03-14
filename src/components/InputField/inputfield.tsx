import React from 'react';
import './inputfield.css';

interface InputFieldProps {
  variant?: 'standard' | 'outlined' | 'filled' | 'error';
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  variant = 'standard',
  placeholder,
}) => {
  let inputClass = 'input-field';
  if (variant === 'standard') {
    inputClass += ' standard';
  } else if (variant === 'outlined') {
    inputClass += ' outlined';
  } else if (variant === 'filled') {
    inputClass += ' filled';
  } else if (variant === 'error') {
    inputClass += ' error';
  }

  return <input className={inputClass} type='text' placeholder={placeholder} />;
};

export default InputField;
