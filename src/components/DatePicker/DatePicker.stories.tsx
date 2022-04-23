import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from '.';

export default {
  title: 'Form/DatePicker',
  component: DatePicker,
  argTypes: {
    label: {
      description: 'Label text',
      type: 'string',
    },
    error: {
      type: 'string',
      description: 'Informs if the field has error',
    },
    disabled: {
      type: 'boolean',
      description: 'Informs if the field is disabled',
    },
    readOnly: {
      type: 'boolean',
      description: 'Informs if the field is readOnly',
    },
    style: {
      description: 'React CSS Properties',
      control: { type: '' },
    },
  },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = args => (
  <div
    style={{
      display: 'grid',
      justifyContent: 'center',
      alignContent: 'center',
    }}
  >
    <h1>For better documentation go to:</h1>
    <ul>
      <li>
        <a
          href="https://www.npmjs.com/package/react-datepicker"
          target="_blank"
          rel="noreferrer"
        >
          React DatePicker npmjs
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Hacker0x01/react-datepicker"
          target="_blank"
          rel="noreferrer"
        >
          React DatePicker Github
        </a>
      </li>
      <li>
        <a href="https://reactdatepicker.com/" target="_blank" rel="noreferrer">
          React DatePicker Page
        </a>
      </li>
    </ul>
    <DatePicker {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Select the date',
  error: '',
  placeholderText: 'dd/mm/aaaa',
  onChange: () => console.log('onChange'),
};
