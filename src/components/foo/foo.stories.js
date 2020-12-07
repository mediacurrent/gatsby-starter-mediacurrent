import React from 'react';
import Foo from './foo';

import data from './data';

export default {
  title: 'Components/Foo',
  component: Foo,
  argTypes: {
    // Dynamic controls here.
  },
  args: {
    // Props here.
  }
};

const Template = (args) => <Foo  {...args} />;

export const Default = Template.bind({});
