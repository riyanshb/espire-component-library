import React from 'react';
import './bottom_menubar.css';

export interface BottomMenuBarItem {
  icon: string;
  text: string;
}

export interface BottomMenuBarProps {
  items: BottomMenuBarItem[];
  iconWidth: string;
  iconHeight: string;
  textWidth: string;
  textHeight: string;
}

const ERFBottomMenuBar: React.FC<BottomMenuBarProps> = ({
  items,
  iconWidth,
  iconHeight,
  textWidth,
  textHeight,
}) => {
  const menuBarItemWidth = `${100 / items.length}%`;

  return (
    <div>
      <div
        className='bottom-container'
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className='menu-bar-item'
            style={{ width: menuBarItemWidth, display: 'flex' }}
          >
            <div className='icon-container'>
              <img
                src={item.icon}
                alt='icon'
                style={{ width: iconWidth, height: iconHeight }}
              />
            </div>
            <div
              className='text'
              style={{ width: textWidth, height: textHeight }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ERFBottomMenuBar;
