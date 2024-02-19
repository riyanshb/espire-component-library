// GridComponent.stories.tsx
import { Story, Meta } from '@storybook/react';
import GridComponent from '../erf_grid/erf_grid';

export default {
  title: 'Components/GridComponent',
  component: GridComponent,
} as Meta;

interface User {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
}

interface Props {
  users: User[];
}

const defaultUsers: User[] = [
  {
    id: 1,
    name: 'Rivanshu Jain',
    email: 'rivanshu@espire.com',
    avatarUrl: '.././assets/truckk1.webp',
  },
  {
    id: 2,
    name: 'Deebendu Kumar',
    email: 'deebendu.kumar@espire.com',
    avatarUrl: 'https://example.com/avatar2.png',
  },
  {
    id: 1,
    name: 'Rivanshu Jain',
    email: 'rivanshu@espire.com',
    avatarUrl: 'https://example.com/avatar1.png',
  },
  {
    id: 2,
    name: 'Deebendu Kumar',
    email: 'deebendu.kumar@espire.com',
    avatarUrl: 'https://example.com/avatar2.png',
  },
  {
    id: 1,
    name: 'Rivanshu Jain',
    email: 'rivanshu@espire.com',
    avatarUrl: 'https://example.com/avatar1.png',
  },
  {
    id: 2,
    name: 'Deebendu Kumar',
    email: 'deebendu.kumar@espire.com',
    avatarUrl: 'https://example.com/avatar2.png',
  },
  {
    id: 1,
    name: 'Rivanshu Jain',
    email: 'rivanshu@espire.com',
    avatarUrl: 'https://example.com/avatar1.png',
  },
  {
    id: 2,
    name: 'Deebendu Kumar',
    email: 'deebendu.kumar@espire.com',
    avatarUrl: 'https://example.com/avatar2.png',
  },
];

const Template: Story<Props> = (args) => <GridComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  users: defaultUsers,
};
