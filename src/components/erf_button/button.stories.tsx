import { Story, Meta } from '@storybook/react';
import ERFButton from '../erf_button/button';

export default {
  title: 'Components/Button',
  component: ERFButton,
} as Meta;

interface ButtonStoryProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'error' | 'text' | 'outlined';
  onClick: Function;
  buttonId: string;
}

const Template: Story<ButtonStoryProps> = (args) => <ERFButton {...args} />;

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
