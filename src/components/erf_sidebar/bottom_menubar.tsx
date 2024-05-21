import React from 'react';
import './bottom_menubar.css';

export interface BottomMenuBarItem {
  icon: React.ElementType;
  text: string;
  link: string;
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
      <div className='bottom-menu-bar' style={{ display: 'flex' }}>
        {items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className='menu-bar-item'
            style={{
              width: menuBarItemWidth,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <div className='icon-container'>
              <item.icon
                style={{ width: iconWidth, height: iconHeight, color: 'grey' }}
              />
            </div>
            <div
              className='text'
              style={{
                width: textWidth,
                height: textHeight,
                color: 'grey',
                textDecoration: 'none',
              }}
            >
              {item.text}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ERFBottomMenuBar;
