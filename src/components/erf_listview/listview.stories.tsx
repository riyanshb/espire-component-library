import React from 'react';
import ERFListItem from './listview';
import PhoneIcon from '@mui/icons-material/Phone';

export default {
  title: 'Components/ERFListItem',
  component: ERFListItem,
  argTypes: {
    text: { control: 'text' },
    subtext: { control: 'text' },
  },
};

interface StoryArgs {
  text?: string;
  subtext?: string;
  onClick?: () => void;
}

const Template: React.FC<StoryArgs> = (args: StoryArgs) => (
  <ERFListItem {...args} icon={PhoneIcon} />
);

Template.defaultProps = {
  text: 'Phone',
  subtext: 'This is a phone icon',
  onClick: () => {},
};

export const Default = Template.bind({});
