import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import VisuallyHidden from '.';

export default {
  title: 'VisuallyHidden',
  component: VisuallyHidden,
  argTypes: {
    children: {
      type: { required: true },
      description:
        'This text will only be displayed for screen readers. However, if you are not in a production environment, when you click the Alt key, you can see the text value.',
    },
  },
} as ComponentMeta<typeof VisuallyHidden>;

const Template: ComponentStory<typeof VisuallyHidden> = args => (
  <div>
    <p>
      Why should you use visually hidden?{' '}
      <a
        href="https://gomakethings.com/revisting-aria-label-versus-a-visually-hidden-class/"
        target="_blank"
        rel="noreferrer"
      >
        <code>aria-label</code> vs <code>Visually Hidden</code>
      </a>
    </p>
    <p>
      Press the Alt key to see what the screen reader sees (only works if you
      are not in a production environment)
    </p>
    <br />
    <VisuallyHidden {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Hidden message',
};
