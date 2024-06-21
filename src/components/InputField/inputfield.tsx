import React from 'react';
import './inputfield.css';
import {
  TextField
} from '@mui/material';

interface InputFieldProps {
  variant?: 'standard' | 'outlined' | 'filled' | 'error' | 'password' ;
  placeholder?: string;
  setValue: Function;
  textId: string;
}

const InputField: React.FC<InputFieldProps> = ({
  variant = 'standard',
  placeholder,
  setValue,
  textId,
}) => {
  if (variant === 'standard') {
    return <TextField id="standard-basic" label={placeholder} variant={variant}  size="small" onChange={e=>{setValue(e, textId)}}/>
  } else if (variant === 'outlined') {
    return <TextField id="outlined-basic" label={placeholder} variant={variant}  size="small" onChange={e=>{setValue(e, textId)}}/>
  } else if (variant === 'filled') {
    return <TextField id="filled-basic" label={placeholder} variant={variant}  size="small" onChange={e=>{setValue(e, textId)}}/>
  } else if (variant === 'error') {
    return  <TextField
    error
    id="outlined-error"
    label="Error"
    defaultValue="Hello World"
    size="small"
    onChange={e=>{setValue(e, textId)}}
  />
  } else if (variant === 'password') {
    return   <TextField
    required
    id="outlined-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
    size="small"
    name="password"
    onChange={e=>{setValue(e, textId)}}
  />
  }
};

export default InputField;
