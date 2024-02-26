import React, { useState } from 'react';
import './sidebar.css';
import { Dashboard, Settings, Folder, Build, List } from '@material-ui/icons'; // Import Material-UI icons

export interface SidebarProps {
  companyLogo: string;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ companyLogo, toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [expanded, setExpanded] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    toggleSidebar();
  };

  const toggleExpand = (index: number) => {
    const newExpandedState = [...expanded];
    newExpandedState[index] = !newExpandedState[index];
    setExpanded(newExpandedState);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div style={{ marginRight: '80px' }}>
        <img
          src={companyLogo}
          alt='Company Logo'
          style={{ height: '50px', width: '50px' }}
        />
      </div>
      <ul className='menu'>
        <li>
          <Dashboard className='icon' />
          <span>Dashboard</span>
        </li>
        <li>
          <Build className='icon' onClick={() => toggleExpand(0)} />
          <span>Components</span>
        </li>
        <li>
          <Folder className='icon' />
          <span>Documents</span>
        </li>
        <li>
          <Settings className='icon' />
          <span>Settings</span>
        </li>
        <li>
          <List className='icon' />
          <span>Logs</span>
        </li>
      </ul>
      <div className='toggle-btn' onClick={toggleOpen}>
        <div className='toggle-icon'>{isOpen ? '<' : '>'}</div>
      </div>
    </div>
  );
};

export default Sidebar;
