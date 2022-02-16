
import classnames from 'classnames';

interface IconPropsOrig {
    focusable?: boolean,
    role?: string,
    size?: 3 | 4 | 5 | 6 | 7 | 8 | 9,
    className?: string
}

export type IconProps = IconPropsOrig & JSX.IntrinsicElements['svg']

// export const ReactMakeIcon =({
//   component: string,
//   props: Iconprops
// }): JSX.Element  =>{

//     // return <testIcon />
//     // return <div />
//     return <component />
//   }

export function ReactMakeIcon(Component: string) {
  return (props: IconProps): JSX.Element => {
    const {
      size,
      className,
      focusable = false,
      role = 'img',
      ...iconProps
    } = props

    const classes = classnames(
      'usa-icon',
      {
        [`usa-icon--size-${size}`]: size !== undefined,
      },
      className
    )

    const finalProps = {
      className: classes,
      focusable,
      role,
      ...iconProps,
    }

    // return <testIcon />
    // return <div />
    return <Component {...finalProps} />
  }
}