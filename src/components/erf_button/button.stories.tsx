import { Story, Meta } from '@storybook/react';
import Button from '../erf_button/button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

interface ButtonStoryProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'error' | 'text' | 'outlined';
}

const Template: Story<ButtonStoryProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  variant: 'secondary',
};

export const Error = Template.bind({});
Error.args = {
  text: 'Error Button',
  variant: 'error',
};

export const Text = Template.bind({});
Text.args = {
  text: 'Text Button',
  variant: 'text',
};

export const Outlined = Template.bind({});
Outlined.args = {
  text: 'Outlined Button',
  variant: 'outlined',
};
