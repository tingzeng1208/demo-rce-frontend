import React from 'react';
import {ReactMakeIcon} from './Icon';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FaRocket } from 'react-icons/fa';
import {ImNewspaper} from 'react-icons/im';
import { makeUSWDSIcon, IconProps } from '../Icon/Icon';
import AccessibilityNewSvg from '../../../node_modules/uswds/dist/img/usa-icons/accessible_forward.svg';




export default {
  title: 'Example/Icons/allIcon',
  component: ReactMakeIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 
} as ComponentMeta<typeof ReactMakeIcon>;

const Template: ComponentStory<typeof ReactMakeIcon> = (args) => <ReactMakeIcon {...args} />;
const IconAccessibilityNew: React.ComponentType<IconProps> =
  makeUSWDSIcon(AccessibilityNewSvg)

export const ReactMakeIcon1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ReactMakeIcon1.args = {
  Component: 'FaRocket',
  className: 'App-logo',
};

const NewSvg = ()=>{
  return (
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
  )
}

export const allIcons = (): React.ReactElement =>{
  return <div>
    <FaRocket />
    <ImNewspaper />
    <NewSvg />
  </div>
}
