import React from 'react';
import './appbar.css';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { theme } from '../../theme/theme';

export interface AppBarProps {
  userName: string;
  userEmail: string;
}

const AppBar: React.FC<AppBarProps> = ({ userName, userEmail }) => {
  return (
    <div
      className='appbar'
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <div style={{ display: 'flex' }}>
        <div>
          <img
            style={{ height: '40px', width: '40px', marginTop: '7px' }}
            src={`assets/user_img.jpg`}
            alt='User Avatar'
            className='avatar'
          />
        </div>
        <div>
          <div className='username_email' style={theme.typography.header}>
            {' '}
            {userName}{' '}
          </div>
          <div style={{ fontSize: '12px' }}> {userEmail} </div>
        </div>
      </div>
      <div className='icons'>
        <div className='icon'>
          <NotificationsOutlinedIcon
            style={{ alignItems: 'center', justifyContent: 'center' }}
          ></NotificationsOutlinedIcon>
        </div>
        <div>
          <PowerSettingsNewIcon />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
