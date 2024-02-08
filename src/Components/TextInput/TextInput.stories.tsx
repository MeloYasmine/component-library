import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { TextInput } from './TextInput'; // Suponha que o componente TextInput esteja no mesmo diretório

const meta: Meta = {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    value: {
      description: 'The value of the input.',
      control: 'text',
    },
    onChange: { action: 'changed', description: 'Function to be executed when the input value changes.' },
    disabled: {
      description: 'Whether the input should be disabled.',
      control: 'boolean',
    },
    size: {
      description: 'The size of the input field.',
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
  },
};

export default meta;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  disabled: false,
  size: 'medium',
};
