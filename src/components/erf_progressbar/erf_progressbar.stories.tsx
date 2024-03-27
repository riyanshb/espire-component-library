import { Story, Meta } from '@storybook/react';
import ERFProgressBar, { ProgressBarProps } from './erf_progressbar';

export default {
  title: 'Components/ProgressBar',
  component: ERFProgressBar,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['circular', 'linear', 'circularPercentage'],
      },
    },
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
      },
    },
  },
} as Meta;

const Template: Story<ProgressBarProps> = (args) => (
  <ERFProgressBar {...args} />
);

export const Circular = Template.bind({});
Circular.args = {
  type: 'circular',
  value: 50,
};

export const Linear = Template.bind({});
Linear.args = {
  type: 'linear',
  value: 50,
};

export const CircularPercentage = Template.bind({});
CircularPercentage.args = {
  type: 'circularPercentage',
  value: 50,
};
