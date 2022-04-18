import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '.';

export default {
  title: 'Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: 'minha-vacina-minor',
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Desktop = Template.bind({});

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
};
