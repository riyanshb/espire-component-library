import { Story, Meta } from '@storybook/react';
import DataTable from './datatable';
import { dummyData } from './sampledata';
import BasicDataTable from './basic_datatable';
import ParameterisedDataTable from './parameterised_datatable/parameterised_datatabel';

const columns = [
  { id: 'avatar', label: 'Name', avatar: true },
  { id: 'age', label: 'Age' },
  { id: 'country', label: 'Country' },
  { id: 'age', label: 'Age' },
  { id: 'country', label: 'Country' },
  { id: 'age', label: 'Age' },
  { id: 'country', label: 'Country' },
  { id: 'age', label: 'Age' },
  { id: 'country', label: 'Country' },
];

const data = [
  {
    avatar: '/assets/user_img.jpg',
    name: 'Rivanshu Jain',
    age: 27,
    country: 'India',
  },
  {
    avatar: '/assets/user_img.jpg',
    name: 'Deebendu Kumar',
    age: 45,
    country: 'India',
  },
  {
    avatar: '/assets/user_img.jpg',
    name: 'Lavi Jain',
    age: 25,
    country: 'India',
  },
];
export default {
  title: 'Components/DataTable',
  component: DataTable,
} as Meta;

const Template: Story<any> = (args) => <DataTable {...args} />;
const basictable: Story<any> = (args) => <BasicDataTable {...args} />;
const parameteriseddatatable: Story<any> = (args) => (
  <ParameterisedDataTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: dummyData,
};
export const BasicTable = basictable.bind({});
BasicTable.args = {};

export const Paramterised = parameteriseddatatable.bind({});
Paramterised.args = {
  columns,
  data,
  showCheckboxColumn: false,
  showActionColumn: false,
};
