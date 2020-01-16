import React, { ElementType } from 'react'
import styled, { FlattenSimpleInterpolation } from 'styled-components'

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
  boxShadow,
  BoxShadowProps,
} from 'styled-system'

export type BaseBoxProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  BackgroundProps &
  BoxShadowProps & { as?: ElementType, css?: FlattenSimpleInterpolation }

const Box: React.FC<BaseBoxProps> = styled.div<BaseBoxProps>`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${background}
  ${boxShadow}
`

export default Box
