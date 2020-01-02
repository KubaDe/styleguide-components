import { ElementType } from 'react'
import styled from 'styled-components'

import {
  color,
  ColorProps,
  background,
  BackgroundProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system'

export type BaseBoxProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  BackgroundProps & { as?: ElementType }

const Box = styled.div<BaseBoxProps>`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${background}
`

export default Box
