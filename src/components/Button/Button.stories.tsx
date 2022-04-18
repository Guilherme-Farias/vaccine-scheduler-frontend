/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: { required: true },
      description: 'Button child',
    },
    variant: {
      description: 'Chose the button variant',
      defaultValue: 'fill',
      control: {
        type: 'select',
      },
    },
    size: {
      description: 'Adjust the size',
      defaultValue: 'medium',
      control: {
        type: 'select',
      },
    },
    fullWidth: {
      description: 'Change the width to occupy 100% of the container',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: 'Change the state of the button',
      control: {
        type: 'boolean',
      },
    },
    color: {
      description: 'Change the color',
      defaultValue: 'primary',
      control: {
        type: 'select',
      },
    },
    fontColor: {
      description: 'Change the color',
      defaultValue: 'white',
      control: {
        type: 'select',
      },
    },
  },
} as unknown as ComponentMeta<typeof Button>;

const Template1: ComponentStory<typeof Button> = args => <Button {...args} />;

const Template2: ComponentStory<typeof Button> = args => (
  <table style={{ fontFamily: 'sans-serif' }} cellSpacing={0} cellPadding={0}>
    <tr>
      <th
        style={{
          textAlign: 'center',
          padding: '16px',
          borderBottom: '1px solid darkgray',
          borderRight: '1px solid darkgray',
        }}
      />
      <th
        style={{
          textAlign: 'center',
          padding: '16px',
          borderBottom: '1px solid darkgray',
        }}
      >
        Fill
      </th>
      <th
        style={{
          textAlign: 'center',
          padding: '16px',
          borderBottom: '1px solid darkgray',
        }}
      >
        Outline
      </th>
      <th
        style={{
          textAlign: 'center',
          padding: '16px',
          borderBottom: '1px solid darkgray',
        }}
      >
        Ghost
      </th>
    </tr>
    <tr>
      <td
        style={{
          textAlign: 'center',
          padding: '16px',
          borderRight: '1px solid darkgray',
        }}
      >
        Small
      </td>
      <td style={{ textAlign: 'center', padding: '16px' }}>
        <Button {...args} size="small" variant="fill">
          Button
        </Button>
      </td>
      <td style={{ textAlign: 'center', padding: '16px' }}>
        <Button {...args} size="small" variant="outline">
          Button
        </Button>
      </td>
      <td style={{ textAlign: 'center', padding: '16px' }}>
        <Button {...args} size="small" variant="ghost">
          Button
        </Button>
      </td>
    </tr>
    <tr>
      <td
        style={{
          textAlign: 'center',
          padding: '16px',
          borderRight: '1px solid darkgray',
        }}
      >
        Medium
      </td>
      <td style={{ textAlign: 'center', padding: '16px' }}>
        <Button {...args} size="medium" variant="fill">
          Button
        </Button>
      </td>
      <td style={{ textAlign: 'center', padding: '16px' }}>
        <Button {...args} {...args} size="medium" variant="outline">
          Button
        </Button>
      </td>
      <td style={{ textAlign: 'center', padding: '16px' }}>
        <Button {...args} size="medium" variant="ghost">
          Button
        </Button>
      </td>
    </tr>
    <tr>
      <td
        style={{
          textAlign: 'center',
          padding: '16px',
          borderRight: '1px solid darkgray',
        }}
      >
        Large
      </td>
      <td style={{ textAlign: 'center', padding: '16px' }}>
        <Button {...args} size="large" variant="fill">
          Button
        </Button>
      </td>
      <td style={{ textAlign: 'center', padding: '16px' }}>
        <Button {...args} size="large" variant="outline">
          Button
        </Button>
      </td>
      <td style={{ textAlign: 'center', padding: '16px' }}>
        <Button {...args} size="large" variant="ghost">
          Button
        </Button>
      </td>
    </tr>
  </table>
);

const Template3: ComponentStory<typeof Button> = args => (
  <div
    style={{ display: 'grid', gap: '10px', gridTemplateColumns: '1fr 1fr 1fr' }}
  >
    <Button {...args} color="primary">
      Primary
    </Button>
    <Button {...args} color="secondary">
      Secondary
    </Button>
    <Button {...args} color="tertiary">
      Tertiary
    </Button>
    <Button {...args} color="green">
      Success
    </Button>
    <Button {...args} color="red">
      Danger
    </Button>
    <Button {...args} color="blue">
      Focus
    </Button>
    <Button {...args} color="yellow">
      Warning
    </Button>
  </div>
);

export const Default = Template1.bind({});
Default.args = {
  children: 'Button',
};

export const TableOfVariants = Template2.bind({});
TableOfVariants.args = {
  children: 'Button',
};

export const TableOfColors = Template3.bind({});
TableOfColors.args = {
  children: 'Button',
};
