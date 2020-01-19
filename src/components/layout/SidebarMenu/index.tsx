import React from 'react'

import Grid, { GridItem } from 'components/simpleUi/Grid'

import { Sidebar, SidebarMenuItem } from './SidebarMenu.motion'

export interface SidebarMenuRelatedProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export type SidebarMenuProps = SidebarMenuRelatedProps

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
      <Grid
        gridTemplateColumns="100%"
        gridTemplateRows="100px 1fr 40px"
        gridTemplateAreas={`
        "top"
        "middle"
        "bottom"
        `}
        height="100%"
        width="100%"
      >
        <GridItem gridRow="top / bottom" alignSelf="center" justifySelf="center" gridColumn="1 / span 1">
          <SidebarMenuItem>Item 1</SidebarMenuItem>
          <SidebarMenuItem>Item 2</SidebarMenuItem>
          <SidebarMenuItem>Item 3</SidebarMenuItem>
          <SidebarMenuItem>Item 4</SidebarMenuItem>
          <SidebarMenuItem>Item 5</SidebarMenuItem>
          <SidebarMenuItem>Item 6</SidebarMenuItem>
        </GridItem>
      <GridItem gridRow="bottom" alignSelf="center" justifySelf="center" gridColumn="1 / span 1" zIndex={1}>
        <button onClick={() => setIsOpen(!isOpen)}>Click</button>
      </GridItem>
    </Grid>
    </Sidebar>
  )
}

export default SidebarMenu
