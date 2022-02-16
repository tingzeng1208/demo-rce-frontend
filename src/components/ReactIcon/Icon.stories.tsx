import React from 'react';
import {ReactMakeIcon, CustomIcon, CustomIconProps, IconAccessibilityNew, IconBeddingSvg} from './Icon';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FaRocket } from 'react-icons/fa';
import {ImNewspaper} from 'react-icons/im';
import { makeUSWDSIcon, IconProps } from '../Icon/Icon';
import AccessibilityNewSvg from '../../../node_modules/uswds/dist/img/usa-icons/accessible_forward.svg';
import BeddingSvg from 'uswds/dist/img/usa-icons/bedding.svg'

export default {
  title: 'Example/Icons/allIcon',
  component: ReactMakeIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 
};


// export const ReactMakeIcon1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// ReactMakeIcon1.args = {
//   Component: 'FaRocket',
//   className: 'App-logo',
// };

// export const IconAccessibilityNew: React.ComponentType<IconProps> =
// ReactMakeIcon(AccessibilityNewSvg)

// const NewSvg = ()=>{
//   return (
//     AccessibilityNewSvg
//   )
// }

// export const testFunc: JSX.IntrinsicElements = FunctionIcon();
// export const AccessibilityNewSvgIcon = () => {
//   return <CustomIcon src={AccessibilityNewSvg} />
// }

export const AccessibilityNewSvgIcon2 = (): React.ReactElement => (
  <IconAccessibilityNew />
)

export const IconBeddingSvg2 = () : React.ReactElement => (
  <IconBeddingSvg/>
)

export const allIcons = (): React.ReactElement =>{
  return <div>
    <FaRocket />
    <ImNewspaper />
    <img src={AccessibilityNewSvg} />
    <CustomIconProps src={AccessibilityNewSvg} />
    <AccessibilityNewSvgIcon2 />
    {/* <CustomIcon /> */}
    {/* <testFunc /> */}
  </div>
}
