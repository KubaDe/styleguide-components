import styled from 'styled-components'
import { grid, GridProps, gridArea, GridAreaProps } from 'styled-system'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

export type BaseGridProps = BaseBoxProps & GridProps

const Grid = styled(Box).attrs({
  display: 'grid',
})<BaseGridProps>`
  ${grid}
`

export type BaseGridItemProps = BaseBoxProps & GridAreaProps

export const GridItem = styled(Box)<BaseGridItemProps>`
  ${gridArea}
`

export default Grid
