import { Story, Meta } from '@storybook/react';
import Grid, { GridProps } from './erf_grid';

export default {
  title: 'Components/Grid',
  component: Grid,
} as Meta;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

export const BasicGrid = Template.bind({});
BasicGrid.args = {
  rows: 3,
  columns: 4,
  cardsPerRow: 3,
};
