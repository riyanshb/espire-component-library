import { SearchField } from "./SearchField"
import { Story, Meta } from '@storybook/react';


export default {
    title: 'Components/SearchField',
    component: SearchField,
    argTypes: {
        width: { control: 'text' },
        height: { control: 'text' }, // Change control type to 'text'
      },
    } as Meta;

  const Template: Story<any> = args => <SearchField {...args} />;

  export const SearchFieldStory = Template.bind({});
  SearchFieldStory.args = {
    width: '400px',
    height: '400px',
  };