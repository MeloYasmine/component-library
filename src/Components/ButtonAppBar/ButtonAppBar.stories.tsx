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
    buttonText: {
      description: 'Text that will be displayed inside the button.',
      control: 'text',
    },
    typographyText: {
      description: 'Text that will be displayed inside the bar.',
      control: 'text',
    },
  },
};

export default meta;

const Template: ComponentStory<typeof ButtonAppBar> = (args) => <ButtonAppBar {...args} />;

export const Default = Template.bind({});

Default.args = {
    color: 'primary',
    buttonText: 'button',
    typographyText: 'Title',
};

