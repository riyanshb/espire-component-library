import type { Story } from '@storybook/react';
import ERFAppbar, { ERFAppbarProps } from './appbar';

export default {
  title: 'Components/ERFAppbar',
  component: ERFAppbar,
} as const;

const Template: Story<ERFAppbarProps> = (args) => <ERFAppbar {...args} />;

export const CustomAppbar: Story<ERFAppbarProps> = Template.bind({});
CustomAppbar.args = {
  companyAvatarSrc: 'assets/companylogo.JPG',
  companyName: 'Espire Infolabs',
  searchPlaceholder: 'Search here...',
  loginButtonText: 'Login',
  userAvatarSrc: 'assets/user_img.jpg',
};
