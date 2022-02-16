import React from 'react';
import { FaRocket } from 'react-icons/fa';
import classnames from 'classnames';

interface IconPropsOrig {
    focusable?: boolean
    role?: string
    size?: 3 | 4 | 5 | 6 | 7 | 8 | 9
    className?: string
}

export type IconProps = IconPropsOrig & JSX.IntrinsicElements['svg']

// export function makeSVGIcon(Component: string) {
//   return (props: IconProps): JSX.Element => {
//     const {
//       size,
//       className,
//       focusable = false,
//       role = 'img',
//       ...iconProps
//     } = props

//     const classes = classnames(
//       'usa-icon',
//       {
//         [`usa-icon--size-${size}`]: size !== undefined,
//       },
//       className
//     )

//     const finalProps = {
//       className: classes,
//       focusable,
//       role,
//       ...iconProps,
//     }

//     // return <testIcon />
//     // return <div />
//     return <Component {...finalProps} />
//   }
// }

export const FaRocketIcon = ({
  size,
  className,
  ...props}: IconPropsOrig) => {
  return <FaRocket className={className} size={size}/>;
} 