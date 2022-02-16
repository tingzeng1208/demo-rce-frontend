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
<svg class="usa-icon" aria-hidden="true" focusable="false" role="img">
        <use xlink:href="/assets/img/sprite.svg#accessibility_new"></use>
      </svg>
  )
}

export const allIcons = (): React.ReactElement =>{
  return <div>
    <FaRocket />
    <ImNewspaper />
  </div>
}
