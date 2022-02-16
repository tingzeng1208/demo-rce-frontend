import React from 'react';
import {ReactMakeIcon, CustomIcon, CustomIconProps, IconAccessibilityNew, IconBeddingSvg} from './Icon';
import { FaRocket } from 'react-icons/fa';
import {ImNewspaper} from 'react-icons/im';
import AccessibilityNewSvg from '../../../node_modules/uswds/dist/img/usa-icons/accessible_forward.svg';
import CodeBraketSvg from '../../assets/code-brackets.svg';
import ColorsSvg from '../../assets/colors.svg';
import CommentsSvg from '../../assets/comments.svg';
import DirectionSvg from '../../assets/direction.svg';
import FlowSvg from '../../assets/flow.svg';
import PluginSvg from '../../assets/plugin.svg';
import RepoSvg from '../../assets/repo.svg';
import StackaltSvg from '../../assets/stackalt.svg';


export default {
  title: 'ReactIcon/Icons/allIcon',
  component: ReactMakeIcon
 
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

export const ColorIcon = ()=>(
  <CustomIconProps src={ColorsSvg} />
)

const ColorIconSvg = ReactMakeIcon(ColorsSvg);
export const ColorIcon2 = ()=>(
  <ColorIconSvg />
)

export const CommentsIcon = ()=>(
  <CustomIconProps src={CommentsSvg} />
)

export const DirectionIcon = ()=>(
  <CustomIconProps src={DirectionSvg} />
)

export const FlowIcon = ()=>(
  <CustomIconProps src={FlowSvg} />
)

export const PluginIcon = ()=>(
  <CustomIconProps src={PluginSvg} />
)

export const RepoIcon = ()=>(
  <CustomIconProps src={RepoSvg} />
)

export const StackaltIcon = ()=>(
  <CustomIconProps src={StackaltSvg} />
)

export const allIcons = (): React.ReactElement =>{
  return <div>
    <FaRocket />
    <ImNewspaper />
    <AccessibilityIcon />
    <BeddingIcon />
    <img src={CodeBraketSvg} />
    <CodeBracketIcon />
    <ColorIcon2 />
    <CommentsIcon />
    <DirectionIcon />
    <FlowIcon />
    <PluginIcon />
    <RepoIcon />
    <StackaltIcon />
  </div>
}
