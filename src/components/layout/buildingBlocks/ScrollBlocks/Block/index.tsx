import React from 'react'
import Observer from '@researchgate/react-intersection-observer'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'

interface BlockRelatedProps {
  threshold?: number[] | number
  onThreshold?: (e: IntersectionObserverEntry) => void
}

export type BlockProps = BaseBoxProps & BlockRelatedProps

const Block: React.FC<BlockProps> = ({
  children,
  threshold = 0,
  onThreshold = () => {},
  ...props
}) => {
  return (
    <Observer onChange={onThreshold} threshold={threshold}>
      <Box {...props}>{children}</Box>
    </Observer>
  )
}

export default Block
