import * as React from 'react'
import { ComponentStory, Meta } from '@storybook/react';
import { Button } from './Button';

const meta: Meta = {
  title: 'Buttons/Button',
  component: Button,
  argTypes: {
    children: {
      description: 'Element that will be displayed inside the button.',
      control: 'text',
    },
    onClick: {
      argTypes: { action: 'clicked' },
      description: 'Function to be executed when the button is clicked.',
      control: false,
    },
    color: {
      description: 'The color the button will have.',
      control: { type: 'radio' },
      options: ['primary', 'secondary','success', 'error', 'info', 'warning'],
    },
    variant: {
      description: 'Determines if the button will have solid color',
      options: ['contained', 'outlined', 'text'],
      control: { type: 'radio' },
    },
    disabled: {
      description: 'Allows you to leave the button disabled',
      control: 'boolean',
      options: [false, true],
      defaultValue: false,
    },
    size: {
      description: 'Determine the size of button',
      control: { type: 'select' },
      options: ['small', 'medium', 'large', undefined],
      defaultValue: false,
    },
  },
};

export default meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
    children: 'OK',
    color: 'primary',
    variant: 'contained',
    disabled: false,
    size: undefined,
};

