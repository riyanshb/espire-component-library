
import { LoginDialogue } from "./LoginForm"
import { Story, Meta } from '@storybook/react';


export default {
    title: 'Components/LoginForm',
    component: LoginDialogue,
    argTypes: {
        width: { control: 'text' },
        height: { control: 'text' }, // Change control type to 'text'
      },
    } as Meta;

  const Template: Story<any> = args => <LoginDialogue {...args} />;

  export const DefaultLoginDialogue = Template.bind({});
  DefaultLoginDialogue.args = {
    width: '400px',
    height: '400px',
  };



