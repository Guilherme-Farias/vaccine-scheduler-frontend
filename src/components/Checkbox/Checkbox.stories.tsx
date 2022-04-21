import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from '.';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      type: 'string',
      description: 'Checkbox text',
    },
    fillColor: {
      description: 'Change the input color',
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'tertiary',
          'green',
          'red',
          'yellow',
          'blue',
        ],
      },
    },
    disabled: {
      description: 'Change the state of the button',
      control: {
        type: 'boolean',
      },
    },
    checked: {
      type: 'boolean',
      description: 'Report status',
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => (
  <div style={{ display: 'grid', gap: '10px' }}>
    <Checkbox {...args} name="category_1" label="Action" />
    <Checkbox {...args} name="category_2" label="Adventure" />
    <Checkbox {...args} name="category_3" label="Strategy" />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
