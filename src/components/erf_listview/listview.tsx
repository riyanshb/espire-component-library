import React from 'react';
import './listview.css';

export interface ListItemProps {
  icon?: string;
  text?: string;
  subtext?: string;
  onClick?: () => void;
}

const ERFListItem: React.FC<ListItemProps> = ({
  icon,
  text,
  subtext,
  onClick,
}) => {
  return (
    <div className='list-item' style={{ display: 'flex' }} onClick={onClick}>
      <div style={{ marginLeft: '15px' }}>
        <img src={icon} alt='icon' className='list-item-icon' />
      </div>
      <div className='list-item-content' style={{ marginLeft: '15px' }}>
        <div className='list-item-text'>{text}</div>
        <div className='list-item-subtext'>{subtext}</div>
      </div>
    </div>
  );
};

export default ERFListItem;
