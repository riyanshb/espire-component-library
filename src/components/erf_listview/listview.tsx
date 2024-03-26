import React from 'react';
import './listview.css';

export interface ListItemProps {
  icon: string;
  text: string;
  subtext: string;
  onClick: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
  icon,
  text,
  subtext,
  onClick,
}) => {
  return (
    <div className='list-item' onClick={onClick}>
      <img src={icon} alt='icon' className='list-item-icon' />
      <div className='list-item-content'>
        <div className='list-item-text'>{text}</div>
        <div className='list-item-subtext'>{subtext}</div>
      </div>
    </div>
  );
};

export default ListItem;
