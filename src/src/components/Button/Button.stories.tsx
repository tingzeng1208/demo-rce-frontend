import React from 'react'
import { Button } from './Button'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: {action: 'clicked'},
    type: {value: 'button'},
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} >Click Me</Button>;

// export default {
//   title: 'Components/Button',
//   component: Button,
//   parameters: {
//     docs: {
//       description: {
//         component: `
// ### USWDS 2.0 Button component

// // Source: https://designsystem.digital.gov/components/button/
// // `,
//       },
//     },
//   },
// }

// export const defaultButton = (): React.ReactElement => (
//   <Button type="button">Click Me</Button>
// )

// export const secondary = (): React.ReactElement => (
//   <Button type="button" secondary>
//     Click Me
//   </Button>
// )

export const defaultButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
defaultButton.args = {
  secondary: false,
  type: 'button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true
};

export const accentCool = (): React.ReactElement => (
  <Button type="button" accentStyle="cool">
    Click Me
  </Button>
)

export const accentWarm = (): React.ReactElement => (
  <Button type="button" accentStyle="warm">
    Click Me
  </Button>
)

export const base = (): React.ReactElement => (
  <Button type="button" base>
    Click Me
  </Button>
)

export const outline = (): React.ReactElement => (
  <Button type="button" outline>
    Click Me
  </Button>
)

export const inverse = (): React.ReactElement => (
  <Button type="button" inverse>
    Click Me
  </Button>
)

export const big = (): React.ReactElement => (
  <Button type="button" size="big">
    Click Me
  </Button>
)

export const unstyled = (): React.ReactElement => (
  <Button type="button" unstyled>
    Click Me
  </Button>
)

export const customClass = (): React.ReactElement => (
  <Button type="button" className="custom-class">
    Click Me
  </Button>
)

export const disabled = (): React.ReactElement => (
  <Button type="button" disabled>
    Click Me
  </Button>
)
