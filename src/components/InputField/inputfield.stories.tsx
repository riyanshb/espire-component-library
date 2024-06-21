import { Story, Meta } from '@storybook/react';
import InputField from './inputfield';

export default {
  title: 'Components/InputField',
  component: InputField,
} as Meta;

interface InputFieldProps {
  placeholder: string;
  variant?: 'standard' | 'outlined' | 'filled' | 'error' | 'password' ;
  setValue: Function;
  textId: string;
}

const Template: Story<InputFieldProps> = (args) => <InputField {...args} />;

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

export const Password = Template.bind({});
Error.args = {
  variant: 'password',
  placeholder: 'Enter your text here',
};

