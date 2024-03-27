import React from 'react';
import { CircularProgress, LinearProgress, Typography } from '@mui/material';
import './erf_progressbar.css';

export interface ProgressBarProps {
  type: 'circular' | 'linear' | 'circularPercentage';
  value: number;
}

const ERFProgressBar: React.FC<ProgressBarProps> = ({ type, value }) => {
  switch (type) {
    case 'circular':
      return <CircularProgress variant='determinate' value={value} />;
    case 'linear':
      return <LinearProgress variant='determinate' value={value} />;
    case 'circularPercentage':
      return (
        <div className='circular-percentage'>
          <CircularProgress variant='determinate' value={value} />
          <Typography
            variant='body2'
            className='percentage-text'
          >{`${Math.round(value)}%`}</Typography>
        </div>
      );
    default:
      return null;
  }
};

export default ERFProgressBar;
