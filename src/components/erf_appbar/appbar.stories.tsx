import type { Story } from '@storybook/react';
import ERFAppbar, { ERFAppbarProps } from './appbar';

export default {
  title: 'Components/ERFAppbar',
  component: ERFAppbar,
} as const;

const Template: Story<ERFAppbarProps> = (args) => <ERFAppbar {...args} />;

export const Example: Story<ERFAppbarProps> = Template.bind({});
Example.args = {
  companyAvatarSrc: 'assets/companylogo.JPG',
  companyName: 'Espire Infolabs',
  searchPlaceholder: 'Search here...',
  loginButtonText: 'Login',
  userAvatarSrc: 'assets/user_img.jpg',
};
