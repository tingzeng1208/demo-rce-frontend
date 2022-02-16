import React from 'react';
import {ReactMakeIcon, CustomIcon, CustomIconProps, IconAccessibilityNew, IconBeddingSvg} from './Icon';
import { FaRocket } from 'react-icons/fa';
import {ImNewspaper} from 'react-icons/im';
import AccessibilityNewSvg from '../../../node_modules/uswds/dist/img/usa-icons/accessible_forward.svg';
import CodeBraketSvg from '../../assets/code-brackets.svg';

export default {
  title: 'ReactIcon/Icons/allIcon',
  component: ReactMakeIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 
};



export const FaRocketIcon = (): React.ReactElement => (
  <FaRocket />
)
export const NewPaperIcon = (): React.ReactElement => (
  <ImNewspaper />
)

export const AccessibilityIcon = (): React.ReactElement => (
  <IconAccessibilityNew />
)

export const BeddingIcon = () : React.ReactElement => (
  <IconBeddingSvg/>
)

export const CodeBracketIcon = (): React.ReactElement =>(
  <CustomIconProps src={CodeBraketSvg} />
)

export const allIcons = (): React.ReactElement =>{
  return <div>
    <FaRocket />
    <ImNewspaper />
    <AccessibilityIcon />
    <BeddingIcon />
    <img src={CodeBraketSvg} />
    <CodeBracketIcon />
  </div>
}
