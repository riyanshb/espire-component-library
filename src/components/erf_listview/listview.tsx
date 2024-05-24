import React from 'react';
import './listview.css';
import { SvgIconComponent } from '@mui/icons-material';

export interface ListItemProps {
  icon?: SvgIconComponent;
  text?: string;
  subtext?: string;
  onClick?: () => void;
}

const ERFListItem: React.FC<ListItemProps> = ({
  icon: Icon,
  text,
  subtext,
  onClick,
}) => {
  return (
    <div
      className='list-item'
      style={{ display: 'flex', marginTop: '10px' }}
      onClick={onClick}
    >
      <div
        style={{
          marginLeft: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {Icon && <Icon className='list-item-icon' />}
      </div>
      <div className='list-item-content' style={{ marginLeft: '15px' }}>
        <div className='list-item-text'>{text}</div>
        <div className='list-item-subtext'>{subtext}</div>
      </div>
    </div>
  );
};

export default ERFListItem;
