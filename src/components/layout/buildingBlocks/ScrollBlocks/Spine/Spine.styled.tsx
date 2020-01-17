import React from 'react'
import styled from 'styled-components'

import Box, { BaseBoxProps } from 'components/simpleUi/Box'

export type StyledBoxProps = BaseBoxProps

export const StyledBox: React.FC<StyledBoxProps> = styled(Box)`
   height: 100vh;
   width: 100vw;
   scroll-snap-type: y proximity;
   overflow-x: hidden;
   overflow-y: scroll;
`

