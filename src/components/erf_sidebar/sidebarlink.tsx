import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    color: '#ccc',
  },
});

interface SideMenuLinkProps {
  icon: React.ReactNode;
  text: string;
}

const SideMenuLink: React.FC<SideMenuLinkProps> = ({ icon, text }) => {
  const classes = useStyles();

  return (
    <>
      <ListItem button>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, width: '35px' }}>
            <ListItemIcon
              style={{ alignItems: 'center', marginTop: '5px' }}
              className={classes.icon}
            >
              <i>{icon}</i>
            </ListItemIcon>
          </div>
          <div style={{ flex: 1 }}>
            <ListItemText primary={text} />
          </div>
        </div>
      </ListItem>
    </>
  );
};

export default SideMenuLink;
