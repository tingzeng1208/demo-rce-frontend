import React from 'react';
import {ReactMakeIcon} from './Icon';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FaRocket } from 'react-icons/fa';
import {ImNewspaper} from 'react-icons/im';

export default {
  title: 'Example/Icons/allIcon',
  component: ReactMakeIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 
} as ComponentMeta<typeof ReactMakeIcon>;

const Template: ComponentStory<typeof ReactMakeIcon> = (args) => <ReactMakeIcon {...args} />;

export const ReactMakeIcon1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ReactMakeIcon1.args = {
  Component: 'FaRocket',
  className: 'App-logo',
};

export const allIcons = (): React.ReactElement =>{
  return <div>
    <FaRocket />
    <ImNewspaper />
  </div>
}
