import { Story, Meta } from '@storybook/react';
import Button from '../erf_button/button';
import React from 'react';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<any> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'Secondary Button',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  children: 'Error Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  type: 'outlined',
  children: 'Outlined Button',
};

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  children: 'Text Button',
};
