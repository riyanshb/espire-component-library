import React from 'react';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import MailOutline from '@mui/icons-material/MailOutline';
import NotificationsNone from '@mui/icons-material/MailOutline';

import AccessTimeRoundedIcon from '@mui/icons-material/MailOutline';

import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  InputBase,
  Avatar,
  Typography,
} from '@mui/material';
// import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import MapIcon from "@mui/icons-material/Map";

export interface ERFTopAppbarProps {
    companyAvatarSrc: string;
    companyName: string;
    searchPlaceholder: string;
    loginButtonText: string;
    userAvatarSrc: string;
  }
  
  const ERFTopAppbar: React.FC<ERFTopAppbarProps> = ({
    
  }) => {
    return (
      <AppBar
          position="static"
          style={{ backgroundColor: "#fafafa", width: "100%", display: "flex" }}
        >
          <Toolbar style={{ display: "flex" }}>
              <IconButton
                size="large"
                edge="start"
                sx={{ flex: 1 }}
              >
                <MapIcon />
              </IconButton>

              <InputBase
                placeholder="Search Devices"
                inputProps={{ "aria-label": "search" }}
                style={{
                  border: "1px solid #cccccc",
                  borderRadius: "4px",
                  flex: 3,
                  height: "40px",
                  paddingLeft: "8px",
                }}
              />

              <IconButton
                size="large"
                // sx={{ flex: 1 }}
              >
                <AddIcon />
              </IconButton>
          </Toolbar>
        </AppBar>
    );
  };

  export default ERFTopAppbar;