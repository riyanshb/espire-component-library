// Sidebar.tsx
import React from 'react';
import './sidebar.css';

export type Orientation = 'vertical' | 'horizontal';

export type SidebarItem = {
  icon?: string;
  text?: string;
  subtext?: string;
  onClick?: () => void;
};

export interface SidebarProps {
  items: SidebarItem[];
  orientation: Orientation;
}

const Sidebar: React.FC<SidebarProps> = ({ items, orientation }) => {
  const isVertical = orientation === 'vertical';

  return (
    <div className={`sidebar ${isVertical ? 'vertical' : 'horizontal'}`}>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={item.onClick}>
            {item.icon && <span className='icon'>{item.icon}</span>}
            {item.text && <span className='text'>{item.text}</span>}
            {item.subtext && <span className='subtext'>{item.subtext}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
