import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import MapIcon from '@mui/icons-material/Map';
import TuneIcon from '@mui/icons-material/Tune';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';

interface SearchFieldProps {
    width?: string | number;
    height?: string | number;
}

export const SearchField: React.FC<SearchFieldProps> = ({
    width = '300px',
  }) => {
    return(
        <Paper
          component="form"
          sx={{ p: '10px', display: 'flex', alignItems: 'center', width: width,
          }}
          
        >
          <IconButton sx={{ p: '10px' }} aria-label="map">
            <MapIcon />
          </IconButton>
          <Box  sx={{
          border: "1px solid lightgray",
          borderRadius: 2,
        }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="search Devices"
            inputProps={{ 'aria-label': 'search Devices' }}
            color="secondary"
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="tune">
            <TuneIcon />
          </IconButton>
          </Box>
          <IconButton color="primary" sx={{ p: '10px' }} aria-label="add">
            <AddIcon />
          </IconButton>
        </Paper>
      );;
  }