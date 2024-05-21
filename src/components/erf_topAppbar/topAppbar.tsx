import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MapIcon from '@mui/icons-material/Map';

export interface ERFTopAppbarProps {
  companyAvatarSrc: string;
  companyName: string;
  searchPlaceholder: string;
  loginButtonText: string;
  userAvatarSrc: string;
}

const ERFTopAppbar: React.FC<ERFTopAppbarProps> = ({}) => {
  return (
    <>
      <AppBar
        position='static'
        style={{
          backgroundColor: '#fafafa',
          width: '100%',
          display: 'flex',
          boxShadow: 'none',
        }}
      >
        <Toolbar style={{ display: 'flex' }}>
          <IconButton
            size='large'
            edge='start'
            style={{ flex: 1, marginRight: '10px' }}
          >
            <MapIcon />
          </IconButton>

          <InputBase
            placeholder='Search Devices'
            inputProps={{ 'aria-label': 'search' }}
            style={{
              border: '1px solid #cccccc',
              borderRadius: '4px',
              flex: '50',
              height: '40px',
              paddingLeft: '8px',
            }}
          />
          <IconButton size='large' style={{ flex: 1, marginLeft: '10px' }}>
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ERFTopAppbar;
