import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from '.';

export default {
  title: 'Form/TextField',
  component: TextField,
  argTypes: {
    label: {
      description: 'Label text',
      type: 'string',
    },
    error: {
      type: 'string',
      description: 'Informs if the field has error',
    },
    placeholder: {
      type: 'string',
      description: 'Placeholder text',
    },
    value: {
      type: 'string',
      description: 'Input HTML value',
    },
    name: {
      type: 'string',
      description: 'Input HTML name',
    },
    disabled: {
      type: 'boolean',
      description: 'Informs if the field is disabled',
    },
    readOnly: {
      type: 'boolean',
      description: 'Informs if the field is readOnly',
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => (
  <div style={{ maxWidth: '300px' }}>
    <TextField {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  name: 'name',
  placeholder: 'Type your name',
};
