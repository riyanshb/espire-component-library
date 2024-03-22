import { Story } from '@storybook/react';
import Sidebar, { SidebarProps } from './sidebar';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as const;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const VerticalSidebar = Template.bind({});
VerticalSidebar.args = {
  items: [
    { icon: '🏠', text: 'Home', onClick: () => console.log('Home clicked') },
    { icon: '📁', text: 'Files', onClick: () => console.log('Files clicked') },
    {
      icon: '🔍',
      text: 'Search',
      onClick: () => console.log('Search clicked'),
    },
  ],
  orientation: 'vertical',
};

export const HorizontalSidebar = Template.bind({});
HorizontalSidebar.args = {
  items: [
    { icon: '🏠', text: 'Home', onClick: () => console.log('Home clicked') },
    { icon: '📁', text: 'Files', onClick: () => console.log('Files clicked') },
    {
      icon: '🔍',
      text: 'Search',
      onClick: () => console.log('Search clicked'),
    },
  ],
  orientation: 'horizontal',
};
