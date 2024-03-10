import { Story, Meta } from '@storybook/react/';
import SideMenuBar from './sidebar';

export default {
  title: 'Components/SideSSSBar',
  component: SideMenuBar,
} as Meta;

const Template: Story = (args) => <SideMenuBar {...args} />;

export const Default = Template.bind({});
