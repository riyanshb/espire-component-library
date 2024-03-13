import { Story, Meta } from '@storybook/react';
import UserFormDialog from './default_dialog';
import DeleteConfirmationDialog from './alertdialog';
import EmployeeDialog from './employee_form_dialog';

export default {
  title: 'Components/Dialog',
  component: UserFormDialog,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' }, // Change control type to 'text'
  },
} as Meta;

const Template: Story<any> = (args) => <UserFormDialog {...args} />;
const Templatee: Story<any> = (args) => <DeleteConfirmationDialog {...args} />;
const Templateee: Story<any> = (args) => <EmployeeDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  width: '400px',
  height: '400px',
};

export const Alert = Templatee.bind({});
Alert.args = {
  open: true,
  onClose: () => console.log('Cancel clicked'),
  onDelete: () => console.log('Delete clicked'),
};

export const Employeeform = Templateee.bind({});
Employeeform.args = {
  open: true,
  onClose: () => console.log('Close clicked'),
};
