import ERFBottomMenuBar from './bottom_menubar';
import { Home, Settings, Notifications } from '@mui/icons-material';

export default {
  title: 'Components/ERFBottomMenuBar',
  component: ERFBottomMenuBar,
  argTypes: {
    iconWidth: { control: 'text' },
    iconHeight: { control: 'text' },
    textWidth: { control: 'text' },
    textHeight: { control: 'text' },
  },
};

interface StoryArgs {
  iconWidth: string;
  iconHeight: string;
  textWidth: string;
  textHeight: string;
}

const Template = (args: StoryArgs) => (
  <ERFBottomMenuBar
    {...args}
    items={[
      { icon: Home, text: 'Home', link: '/home' },
      { icon: Settings, text: 'Settings', link: '/settings' },
      { icon: Notifications, text: 'Notifications', link: '/notifications' },
    ]}
  />
);

export const Default = Template.bind({}) as any;
Default.args = {
  iconWidth: '24px',
  iconHeight: '24px',
  textWidth: 'auto',
  textHeight: '16px',
};
