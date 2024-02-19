import { Story, Meta } from '@storybook/react';
import React from 'react';
import TextArea from './textarea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
} as Meta;

const Template: Story<any> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter your text here',
  rows: 4,
  cols: 40,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled TextArea',
  disabled: true,
  rows: 4,
  cols: 40,
};
