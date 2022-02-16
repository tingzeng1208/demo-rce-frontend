import React from 'react';
import { FaRocketIcon } from './RaRocket';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Example/Icons/FaRocket',
  component: FaRocketIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 
} as ComponentMeta<typeof FaRocketIcon>;

const Template: ComponentStory<typeof FaRocketIcon> = (args) => <FaRocketIcon {...args} />;

export const FaRocket = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FaRocket.args = {
  className: 'App-logo',
};