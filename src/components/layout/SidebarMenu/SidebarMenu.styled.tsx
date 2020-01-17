import React from 'react'
import styled from 'styled-components'
import css from '@styled-system/css'

import Grid, { BaseGridProps } from 'components/simpleUi/Grid'

export type SidebarWrapperProps = BaseGridProps

export const SidebarWrapper: React.FC<SidebarWrapperProps> = styled(Grid)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  box-sizing: border-box;
  ${css({
    backgroundColor: 'primary',
    width: 'xl',
    borderRight: 'primary',
    borderRightWidth: "normal"
  })}
`

