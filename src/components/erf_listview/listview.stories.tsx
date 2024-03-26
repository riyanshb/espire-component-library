import { Story, Meta } from '@storybook/react';
import ListItem, { ListItemProps } from './listview';

export default {
  title: 'Components/ListItem',
  component: ListItem,
} as Meta;

const Template: Story<{ items: ListItemProps[] }> = ({ items }) => (
  <>
    {items.map((item, index) => (
      <ListItem key={index} {...item} />
    ))}
  </>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      icon: 'path/to/icon1.png',
      text: 'Rivanshu',
      subtext: 'rivanshu jain   ',
      onClick: () => alert('Clicked List Item 1!'),
    },
    {
      icon: 'path/to/icon2.png',
      text: 'Rivanshu',
      subtext: 'rivanshu jain   ',
      onClick: () => alert('Clicked List Item 2!'),
    },
    {
      icon: 'path/to/icon3.png',
      text: 'Rivanshu',
      subtext: 'rivanshu jain   ',
      onClick: () => alert('Clicked List Item 3!'),
    },
    {
      icon: 'path/to/icon4.png',
      text: 'Rivanshu',
      subtext: 'rivanshu jain   ',
      onClick: () => alert('Clicked List Item 4!'),
    },
    {
      icon: 'path/to/icon5.png',
      text: 'Rivanshu',
      subtext: 'rivanshu jain   ',
      onClick: () => alert('Clicked List Item 5!'),
    },
  ],
};
