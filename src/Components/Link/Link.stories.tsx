import * as React from 'react';
import { Link } from './Link';
import { ComponentStory, Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    children: {
      description: 'Element that will be displayed inside the link.',
      control: 'text',
    },
    href: {
      description: 'The URL where the link should point to.',
      control: 'text',
    },
    color: {
      description: 'The color of the link.',
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'inherit', 'textPrimary', 'textSecondary'],
    },
    onClick: {
      argTypes: { action: 'clicked' },
      description: 'Function to be executed when the link is clicked.',
      control: false,
    },
  },
};

export default meta;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = {
    children: 'Link',
    href: '#',
    color: 'primary',
};
