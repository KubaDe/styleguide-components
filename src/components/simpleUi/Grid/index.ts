import React from 'react'
import styled from 'styled-components'

import {
  grid,
  GridProps,
  gridArea,
  GridAreaProps,
  alignSelf,
  AlignSelfProps,
  justifySelf,
  JustifySelfProps,
  gridColumn,
  GridColumnProps,
  gridRow,
  GridRowProps,
  zIndex,
  ZIndexProps,
} from 'styled-system'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'

export type BaseGridProps = BaseBoxProps & GridProps

const Grid: React.FC<BaseGridProps> = styled(Box).attrs({
  display: 'grid',
})<BaseGridProps>`
  ${grid}
`

export type BaseGridItemProps = BaseBoxProps &
  GridAreaProps &
  AlignSelfProps &
  JustifySelfProps &
  GridColumnProps &
  GridRowProps &
  ZIndexProps

export const GridItem: React.FC<BaseGridItemProps> = styled(Box)<
  BaseGridItemProps
>`
  ${gridArea}
  ${alignSelf}
  ${justifySelf}
  ${gridRow}
  ${gridColumn}
  ${zIndex}
`

export default Grid
