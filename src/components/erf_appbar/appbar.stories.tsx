import type { Meta, Story } from '@storybook/react';
import ERFAppbar, { ERFAppbarProps } from './appbar';

export default {
  title: 'Components/ERFAppbar',
  component: ERFAppbar,
} as const;

// Define the Template function
const Template: Story<ERFAppbarProps> = (args) => <ERFAppbar {...args} />;

// Define the story
export const Example: Story<ERFAppbarProps> = Template.bind({});
Example.args = {
  companyAvatarSrc: 'assets/companylogo.JPG',
  companyName: 'Espire Infolabs',
  searchPlaceholder: 'Search here...',
  loginButtonText: 'Login',
  userAvatarSrc: 'assets/user_img.jpg',
};
