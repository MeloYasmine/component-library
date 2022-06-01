import * as React from 'react'
import { ComponentStory, Meta } from '@storybook/react';
import { LetterAvatar } from './LetterAvatar';

const meta: Meta = {
  title: 'Components/LetterAvatar',
  component: LetterAvatar,
  argTypes: {
    variant: {
      description: 'The color the AppBar will have.',
      control: { type: 'radio' },
      options: ['rounded', 'square', 'circular'],
    },
    children: {
      description: 'Element that will be displayed inside the button.',
      control: 'text',
    },
  },
};

export default meta;

const Template: ComponentStory<typeof LetterAvatar> = (args) => <LetterAvatar {...args} />;

export const Default = Template.bind({});

Default.args = {
    variant: 'circular',
    children: 'YM',
};

