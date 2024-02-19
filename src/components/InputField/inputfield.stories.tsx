import { Story, Meta } from '@storybook/react';
import React from 'react';
import InputField from './inputfield';

export default {
  title: 'Components/InputField',
  component: InputField,
} as Meta;

const Template: Story<any> = (args) => <InputField {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  variant: 'standard',
  placeholder: 'Enter your text here',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  placeholder: 'Enter your text here',
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  placeholder: 'Enter your text here',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  placeholder: 'Enter your text here',
};
