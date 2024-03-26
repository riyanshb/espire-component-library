import type { Meta, Story } from '@storybook/react';
import ERFTopAppbar, { ERFTopAppbarProps } from './topAppbar';

export default {
  title: 'Components/ERFTopAppbar',
  component: ERFTopAppbar,
} as const;

// Define the Template function
const Template: Story<ERFTopAppbarProps> = (args) => <ERFTopAppbar {...args} />;

// Define the story
export const Example: Story<ERFTopAppbarProps> = Template.bind({});
// Example.args = {
//   companyAvatarSrc: 'assets/companylogo.JPG',
//   companyName: 'Espire Infolabs',
//   searchPlaceholder: 'Search here...',
//   loginButtonText: 'Login',
//   userAvatarSrc: 'assets/user_img.jpg',
// };
