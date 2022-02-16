
import classnames from 'classnames';
import { Component } from 'react';
import AccessibilityNewSvg from '../../../node_modules/uswds/dist/img/usa-icons/accessible_forward.svg';
import BeddingSvg from 'uswds/dist/img/usa-icons/bedding.svg';

interface IconPropsOrig {
    src?: string,
    focusable?: boolean,
    role?: string,
    size?: 3 | 4 | 5 | 6 | 7 | 8 | 9,
    className?: string
}

export type IconProps = IconPropsOrig & JSX.IntrinsicElements['img']

// export const ReactMakeIcon =({
//   component: string,
//   props: Iconprops
// }): JSX.Element  =>{

//     // return <testIcon />
//     // return <div />
//     return <component />
//   }

export class CustomIcon extends Component {

  render() {
    return <img src={AccessibilityNewSvg} />;
  }
}

export class CustomIconProps extends Component<IconPropsOrig> {
  render() {
    const {
      size,
      className,
      focusable = false,
      role = 'img',
      ...iconProps
    } = this.props

    const fixSize = size === undefined ? 4 : size;

    const classes = classnames(
      'usa-icon',
      {
        [`usa-icon--size-${fixSize}`]: fixSize !== undefined,
      },
      className
    )

    const finalProps = {
      className: classes,
      focusable,
      role,
      ...iconProps,
    }
    return <img src={this.props.src} {...finalProps} />;
  }
}

export function ReactMakeIcon(source: string) {
  return (props:IconProps) =>{
    const {
          size,
          className,
          focusable = false,
          role = 'img',
          ...iconProps
        } = props
    
        const fixSize = size === undefined ? 4 : size;

        const classes = classnames(
          'usa-icon',
          {
            [`usa-icon--size-${fixSize}`]: fixSize !== undefined,
          },
          className
        )
    
        const finalProps = {
          className: classes,
          focusable,
          role,
          ...iconProps,
        }
    return <img src = {source} {...finalProps} />;
  }
}

  export const IconAccessibilityNew: React.ComponentType<IconProps> =
  ReactMakeIcon(AccessibilityNewSvg)

  export const IconBeddingSvg: React.ComponentType<IconProps> =
  ReactMakeIcon(BeddingSvg)
  
 