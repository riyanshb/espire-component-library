import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideMenuLink from './sidebarlink';
import DashboardIcon from '@material-ui/icons/Dashboard';

import SettingsIcon from '@material-ui/icons/Settings';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
const useStyles = makeStyles({
  root: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#fff',
    color: '#333',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
  },
  companyLogo: {
    width: '50px',
    height: 'auto',
    marginBottom: '10px',
    marginLeft: '8px',
  },
  companyName: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
});

const SideMenuBar: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div className={`${classes.root} ${open ? 'open' : 'closed'}`}>
      <div className={classes.header}>
        <img
          src={`assets/companylogo.JPG`}
          alt='Company Logo'
          className={classes.companyLogo}
        />
      </div>

      <SideMenuLink icon={<DashboardIcon />} text='Dashboard' />
      <SideMenuLink icon={<CategoryRoundedIcon />} text='Product' />
      <SideMenuLink icon={<SummarizeRoundedIcon />} text='Reporting' />
      <SideMenuLink icon={<ShoppingCartRoundedIcon />} text='Order' />
      <SideMenuLink icon={<SettingsIcon />} text='Settings' />
    </div>
  );
};

export default SideMenuBar;
