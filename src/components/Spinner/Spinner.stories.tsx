import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Spinner from '.';

export default {
  title: 'Spinner',
  component: Spinner,
  argTypes: {
    color: {
      description: 'Change the color',
      defaultValue: 'gray-400',
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Spinner>;

const Template1: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

const Template2: ComponentStory<typeof Spinner> = args => (
  <div>
    <Spinner {...args} color="white" />
    <Spinner {...args} color="gray-50" />
    <Spinner {...args} color="gray-100" />
    <Spinner {...args} color="gray-200" />
    <Spinner {...args} color="gray-300" />
    <Spinner {...args} color="gray-400" />
    <Spinner {...args} color="gray-500" />
    <Spinner {...args} color="gray-600" />
    <Spinner {...args} color="gray-700" />
    <Spinner {...args} color="gray-800" />
    <Spinner {...args} color="gray-900" />
    <Spinner {...args} color="black" />
    <Spinner {...args} color="primary" />
    <Spinner {...args} color="secondary" />
    <Spinner {...args} color="tertiary" />
    <Spinner {...args} color="red" />
    <Spinner {...args} color="green" />
    <Spinner {...args} color="blue" />
    <Spinner {...args} color="yellow" />
  </div>
);

export const Default = Template1.bind({});
Default.args = {};

export const TableOfVariants = Template2.bind({});
TableOfVariants.args = {};
