import React from 'react';
import './TextArea.css';

interface TextAreaProps {
  placeholder?: string;
  rows?: number;
  cols?: number;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  rows,
  cols,
  disabled,
  onChange,
}) => {
  return (
    <textarea
      className='textarea'
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default TextArea;
