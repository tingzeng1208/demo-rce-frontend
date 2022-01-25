import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ViewBox } from './ViewBox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Composite/ViewBox',
  component: ViewBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: {action: 'clicked'},
    backgroundColor: { control: 'color' },
    Address: {value: '123 main st'}
    
  },
} as ComponentMeta<typeof ViewBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ViewBox> = (args) => <ViewBox {...args} />;

export const DefaultViewBox = Template.bind({});