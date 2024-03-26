import { Story, Meta } from '@storybook/react';
import BottomMenuBar, { BottomMenuBarProps } from './bottom_menubar';

export default {
  title: 'Components/BottomMenuBar',
  component: BottomMenuBar,
} as Meta;

const Template: Story<BottomMenuBarProps> = (args) => (
  <BottomMenuBar {...args} />
);

export const FiveValues = Template.bind({});
FiveValues.args = {
  items: [
    { icon: 'icon1.png', text: 'Value 1' },
    { icon: 'icon2.png', text: 'Value 2' },
    { icon: 'icon3.png', text: 'Value 3' },
    { icon: 'icon4.png', text: 'Value 4' },
    { icon: 'icon5.png', text: 'Value 5' },
  ],
  iconWidth: '30px',
  iconHeight: '30px',
  textWidth: 'auto',
  textHeight: 'auto',
};
