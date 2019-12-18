import React from 'react'
import styled from 'styled-components'
import {
  flex,
  FlexboxProps,
  FlexProps,
  JustifySelfProps,
  AlignSelfProps,
  OrderProps,
} from 'styled-system'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

export type BaseFlexProps = BaseBoxProps & FlexboxProps

const Flex: React.FC<BaseFlexProps> = styled(Box).attrs({
  display: 'flex',
})<BaseFlexProps>`
  ${flex}
`

export type BaseFlexItemProps = BaseBoxProps &
  FlexProps &
  JustifySelfProps &
  AlignSelfProps &
  OrderProps

export const FlexItem: React.FC<BaseFlexItemProps> = styled(Box)<
  BaseFlexItemProps
>`
  ${flex}
`

export default Flex
