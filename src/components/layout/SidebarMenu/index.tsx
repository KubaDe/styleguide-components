import React from 'react'

import { SidebarWrapper } from './SidebarMenu.styled'

export interface SidebarMenuRelatedProps {
  isOpen?: boolean
  setIsOpen: (isOpen: boolean) => void
}

export type SidebarMenuProps = SidebarMenuRelatedProps

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  children,
  isOpen,
}) => {
  return <SidebarWrapper>{children}</SidebarWrapper>
}

export default SidebarMenu
