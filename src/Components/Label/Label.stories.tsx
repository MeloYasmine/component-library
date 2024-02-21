import * as React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { Label } from './Label';

const meta: Meta = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    children: {
      description: 'Text or element that will be displayed inside the label.',
      control: 'text',
    },
    color: {
      description: 'The color the label will have.',
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
  },
};

export default meta;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Label',
  color: 'primary',
};
