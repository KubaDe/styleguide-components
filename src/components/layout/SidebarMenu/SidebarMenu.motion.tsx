import React from 'react'
import { motion, AnimationProps, Variants, MotionProps } from 'framer-motion'

import theme from 'config/theme'

import {
  SidebarWrapper,
  SidebarWrapperProps,
  MenuItem,
  MenuItemProps,
} from './SidebarMenu.styled'

interface SidebarRelatedProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

type SidebarProps = AnimationProps &
  MotionProps &
  SidebarWrapperProps &
  SidebarRelatedProps

type MotionSidebarWrapperProps = SidebarProps

const MotionSidebarWrapper: React.FC<MotionSidebarWrapperProps> = motion.custom(
  SidebarWrapper,
)

const sidebarVariants: Variants = {
  open: {
    width: theme.sizes['3xl'],
    backgroundColor: 'rgba(255, 255, 255, 1)',
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.05,
    },
  },
  closed: {
    width: theme.sizes.xl,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    transition: {
      when: 'afterChildren',
    },
  },
}

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { isOpen } = props
  return (
    <MotionSidebarWrapper
      animate={isOpen ? 'open' : 'closed'}
      initial="closed"
      variants={sidebarVariants}
      {...props}
    />
  )
}

const sidebarMenuItemsVariants: Variants = {
  open: { opacity: 1, y: 10 },
  closed: { opacity: 0, y: 0 },
}

interface SidebarMenuItemRelatedProps {}

type SidebarMenuItemProps = AnimationProps & SidebarMenuItemRelatedProps

const MotionMenuItem: React.FC<SidebarMenuItemProps> = motion.custom(MenuItem)

export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = (
  props: SidebarMenuItemProps,
) => {
  return <MotionMenuItem variants={sidebarMenuItemsVariants} {...props} />
}
