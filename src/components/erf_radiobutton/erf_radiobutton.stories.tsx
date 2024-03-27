import { Story, Meta } from '@storybook/react';
import ERFRadioButton, { RadioButtonProps } from './erf_radiobutton';

export default {
  title: 'Components/RadioButton',
  component: ERFRadioButton,
} as Meta;

const Template: Story<RadioButtonProps> = (args) => (
  <ERFRadioButton {...args} />
);

export const VerticalLayout = Template.bind({});
VerticalLayout.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selectedOption: 'Option 1',
  onSelect: (option: string) => console.log(option),
  isVertical: true,
};

export const HorizontalLayout = Template.bind({});
HorizontalLayout.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selectedOption: 'Option 1',
  onSelect: (option: string) => console.log(option),
  isVertical: false,
};
