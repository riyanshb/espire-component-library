import React, { useState } from 'react';
import { Box, TextField, Button, Stack, Link } from '@mui/material';

interface LoginProps {
  onSubmit: (formData: { email: string; password: string }) => void;
}

const ERFLogin: React.FC<LoginProps> = ({ onSubmit }) => {
  const [userData, setUserData] = useState<{ email: string; password: string }>(
    {
      email: '',
      password: '',
    },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(userData);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form
          style={{
            width: '35%',
            paddingRight: '200px',
          }}
          onSubmit={handleSubmit}
        >
          <Stack direction='column' spacing={2}>
            <TextField
              required
              id='outlined-required'
              label='Email'
              size='small'
              name='email'
              value={userData.email}
              onChange={handleChange}
            />

            <TextField
              required
              id='outlined-password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
              size='small'
              name='password'
              value={userData.password}
              onChange={handleChange}
            />

            <Button
              variant='contained'
              type='submit'
              style={{ width: '100%', backgroundColor: '#007500' }}
            >
              LOGIN
            </Button>

            <Stack direction='row' spacing={4} justifyContent='center'>
              <Link href='/register'>Register</Link>
              <Link href='/reset-password'>Reset Password</Link>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default ERFLogin;
