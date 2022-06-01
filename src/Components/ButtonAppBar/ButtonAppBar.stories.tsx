import * as React from 'react'
import { ComponentStory, Meta } from '@storybook/react';
import { ButtonAppBar } from './ButtonAppBar';

const meta: Meta = {
  title: 'Components/ButtonAppBar',
  component: ButtonAppBar,
  argTypes: {
    color: {
      description: 'The color the AppBar will have.',
      control: { type: 'radio' },
      options: ['primary', 'secondary','success', 'error', 'info', 'warning'],
    },
  },
};

export default meta;

const Template: ComponentStory<typeof ButtonAppBar> = (args) => <ButtonAppBar {...args} />;

export const Default = Template.bind({});

Default.args = {
    color: 'primary',
};

