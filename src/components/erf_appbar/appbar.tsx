import React from 'react';
import './appbar.css';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import MailOutline from '@mui/icons-material/MailOutline';
import NotificationsNone from '@mui/icons-material/NotificationAddOutlined';

import {
  IconButton,
  Button,
  InputBase,
  Avatar,
  Typography,
} from '@mui/material';

export interface ERFAppbarProps {
  companyAvatarSrc: string;
  companyName: string;
  searchPlaceholder: string;
  loginButtonText: string;
  userAvatarSrc: string;
}

const ERFAppbar: React.FC<ERFAppbarProps> = ({
  companyAvatarSrc,
  companyName,
  searchPlaceholder,
  loginButtonText,
  userAvatarSrc,
}) => {
  return (
    <div style={{ position: 'static', backgroundColor: 'whitesmoke' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          className='left-element'
          style={{
            display: 'flex',
            marginLeft: '20px',

            alignItems: 'center',
            width: '300px',
            marginBottom: '2px',
          }}
        >
          <Avatar
            alt='Company Avatar'
            src={companyAvatarSrc}
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
            {companyName}
          </Typography>
        </div>

        <div
          className='right-element'
          style={{ display: 'flex', marginRight: '20px' }}
        >
          <div
            className='header__search'
            style={{
              height: '35px',
              backgroundColor: '#EFEEEE',
              marginTop: '10px',
            }}
          >
            <div className='header__searchIcon'>
              <SearchOutlined style={{ color: 'grey', marginTop: '7px' }} />
            </div>
            <InputBase
              placeholder={searchPlaceholder}
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
              {loginButtonText}
            </Button>
            <IconButton color='inherit' aria-label='messages'>
              <MailOutline style={{ color: 'grey', marginLeft: '8px' }} />
            </IconButton>
            <IconButton color='inherit' aria-label='messages'>
              <NotificationsNone style={{ color: 'grey', marginLeft: '8px' }} />
            </IconButton>

            <Avatar
              alt='User Avatar'
              src={userAvatarSrc}
              style={{ marginLeft: '7px', height: '50px', width: '50px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERFAppbar;
