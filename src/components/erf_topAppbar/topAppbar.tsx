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
    <AppBar
      position='static'
      style={{ backgroundColor: '#fafafa', width: '100%', display: 'flex' }}
    >
      <Toolbar style={{ display: 'flex' }}>
        <IconButton size='large' edge='start' sx={{ flex: 1 }}>
          <MapIcon />
        </IconButton>

        <InputBase
          placeholder='Search Devices'
          inputProps={{ 'aria-label': 'search' }}
          style={{
            border: '1px solid #cccccc',
            borderRadius: '4px',
            flex: 3,
            height: '40px',
            paddingLeft: '8px',
          }}
        />

        <IconButton size='large'>
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default ERFTopAppbar;
