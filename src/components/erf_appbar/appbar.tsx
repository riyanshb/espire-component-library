import React from 'react';
import './appbar.css';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  InputBase,
  Avatar,
  Typography,
} from '@mui/material';
import {
  SearchOutlined,
  MailOutline,
  NotificationsNone,
} from '@mui/icons-material';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const ERFAppbar: React.FC = () => {
  return (
    <AppBar
      position='static'
      style={{ backgroundColor: 'whitesmoke', height: '62px' }}
    >
      <Toolbar>
        <div
          style={{
            display: 'flex',
            marginRight: '40px',
            alignItems: 'center',
            width: '400px',
            marginBottom: '2px',
          }}
        >
          <Avatar
            alt='Company Avatar'
            src='assets/companylogo.JPG'
            style={{ height: '50px', width: '50px' }}
          />
          <Typography
            variant='h6'
            color='inherit'
            className='company__name'
            style={{
              fontSize: '18px',
              color: '#323131',
              marginLeft: '15px',
              fontWeight: '400',
            }}
          >
            Espire Infolabs
          </Typography>
        </div>

        <div
          className='header__search'
          style={{
            marginLeft: '550px',
            height: '35px',
            backgroundColor: '#EFEEEE',
          }}
        >
          <div className='header__searchIcon' style={{ color: 'red' }}>
            <SearchOutlined style={{ color: 'grey', marginTop: '7px' }} />
          </div>
          <InputBase
            placeholder='Search here...'
            classes={{
              root: 'header__inputRoot',
              input: 'header__inputInput',
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <div
          className='header__right'
          style={{ marginLeft: '10px', color: 'red' }}
        >
          <Button
            variant='contained'
            style={{
              borderRadius: '50px',
              fontSize: '12px',
              fontWeight: 'normal',
            }}
          >
            Login
          </Button>
          <IconButton color='inherit' aria-label='messages'>
            <MailOutline style={{ color: 'grey', marginLeft: '8px' }} />
          </IconButton>
          <IconButton color='inherit' aria-label='notifications'>
            <NotificationsNone style={{ color: 'grey' }} />
          </IconButton>
          <IconButton color='inherit' aria-label='notifications'>
            <AccessTimeRoundedIcon style={{ color: 'grey' }} />
          </IconButton>
          <Avatar
            alt='User Avatar'
            src='assets/user_img.jpg'
            style={{ marginLeft: '7px', height: '50px', width: '50px' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default ERFAppbar;
