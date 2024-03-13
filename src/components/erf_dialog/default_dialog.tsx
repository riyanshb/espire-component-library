import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  width?: string | number;
  height?: string | number;
}

const UserFormDialog: React.FC<DialogProps> = ({
  open,
  onClose,
  width = '400px',
  height = 'auto',
}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSave = () => {
    console.log('User Name:', userName);
    console.log('User Email:', userEmail);
    console.log('Password:', password);
    resetForm();
    handleClose();
  };

  const resetForm = () => {
    setUserName('');
    setUserEmail('');
    setPassword('');
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={false}
      fullWidth
      style={{
        width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '300px',
        }}
      >
        <div>
          <DialogTitle>User Form</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              label='User Name'
              type='text'
              fullWidth
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              margin='dense'
              label='Email'
              type='email'
              fullWidth
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <TextField
              margin='dense'
              label='Password'
              type='password'
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='secondary'>
              Cancel
            </Button>
            <Button onClick={handleSave} color='primary'>
              Save
            </Button>
          </DialogActions>
        </div>
      </div>
    </Dialog>
  );
};

export default UserFormDialog;
