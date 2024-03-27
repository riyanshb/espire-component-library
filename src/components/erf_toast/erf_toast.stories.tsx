import { Story, Meta } from '@storybook/react';
import ERFToastMessage, { ToastMessageProps } from './erf_toast';

export default {
  title: 'Components/ToastMessage',
  component: ERFToastMessage,
} as Meta;

const Template: Story<ToastMessageProps> = (args) => (
  <ERFToastMessage {...args} />
);

export const Success = Template.bind({});
Success.args = {
  message: 'Success message',
  type: 'success',
  onClose: () => {},
};

export const Error = Template.bind({});
Error.args = {
  message: 'Error message',
  type: 'error',
  onClose: () => {},
};

export const Info = Template.bind({});
Info.args = {
  message: 'Info message',
  type: 'info',
  onClose: () => {},
};
