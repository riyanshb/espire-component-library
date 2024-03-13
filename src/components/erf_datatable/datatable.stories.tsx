import { Story, Meta } from '@storybook/react';
import DataTable from './datatable';
import { dummyData } from './sampledata';
import BasicDataTable from './basic_datatable';

export default {
  title: 'Components/DataTable',
  component: DataTable,
} as Meta;

const Template: Story<any> = (args) => <DataTable {...args} />;
const basictable: Story<any> = (args) => <BasicDataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: dummyData,
};
export const BasicTable = basictable.bind({});
BasicTable.args = {};
