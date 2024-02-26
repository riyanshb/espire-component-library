import { Story, Meta } from '@storybook/react';
import AppBar, { AppBarProps } from './appbar';

export default {
  title: 'Components/AppBar',
  component: AppBar,
} as Meta;

const Template: Story<AppBarProps> = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  userName: 'Rivanshu',
  userEmail: 'rivashu@espire.com',
};
