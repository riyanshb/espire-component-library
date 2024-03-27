import React from 'react';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import './erf_toast.css';

export interface ToastMessageProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const ERFToastMessage: React.FC<ToastMessageProps> = ({
  message,
  type,
  onClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={true}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <SnackbarContent
        className={`toast-message ${type}`}
        message={
          <div className='message'>
            <span>{message}</span>
          </div>
        }
        action={
          <IconButton size='small' color='inherit' onClick={onClose}>
            <Close fontSize='small' />
          </IconButton>
        }
      />
    </Snackbar>
  );
};

export default ERFToastMessage;
