import * as React from 'react'
import { ComponentStory, Meta } from '@storybook/react';
import { ImageAvatar } from './ImageAvatar';


const meta: Meta = {
  title: 'Components/ImageAvatar',
  component: ImageAvatar,
  argTypes: {
    variant: {
      description: 'The color the AppBar will have.',
      control: { type: 'radio' },
      options: ['rounded', 'square', 'circular'],
    },
    alt: {
       description: 'The alt text for the image',
       control: { type: 'text' },
    },
    src: {
         description: 'The source of the image',
         control: { type: 'text' },
    },
  },
};

export default meta;

const Template: ComponentStory<typeof ImageAvatar> = (args) => <ImageAvatar {...args} />;

export const Default = Template.bind({});

Default.args = {
    variant: 'circular',
    alt: 'Avatar',
    src: 'https://picsum.photos/200/300',
};

