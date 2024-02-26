import { Story, Meta } from '@storybook/react';
import Sidebar, { SidebarProps } from './sidebar';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;
const companyLogo = 'assets/truckk1.webp';
export const Default = Template.bind({});
Default.args = {
  companyLogo: companyLogo,
  toggleSidebar: () => {},
};
