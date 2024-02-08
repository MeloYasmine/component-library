import * as React from 'react';
import { Alert } from './Alert';
import { ComponentStory, Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    children: {
      description: 'Content of the alert.',
      control: 'text',
    },
    color: {
      description: 'The color of the alert.',
      control: { type: 'radio' },
      options: ['success', 'error', 'warning', 'info'],
    },
    icon: {
      description: 'The icon to display in the alert.',
      control: 'svg',
    },
    severity: {
      description: 'The severity of the alert.',
      control: { type: 'radio' },
      options: ['success', 'error', 'warning', 'info'],
    },
  },
};

export default meta;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'This is an alert message!',
  color: 'success',
  icon: '',
  severity: 'success',
};
