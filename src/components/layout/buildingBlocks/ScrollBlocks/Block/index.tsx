import React, { useState, useCallback } from 'react'
import Observer from '@researchgate/react-intersection-observer'
import { FlexItem, BaseFlexItemProps } from 'components/simpleUi/Flex'
import {ScrollBlock} from "../index";

interface BlockRelatedProps {
  threshold?: number[] | number
  onThreshold?: (e: IntersectionObserverEntry) => void
}

export type BlockProps = BaseFlexItemProps & BlockRelatedProps

const Block: React.FC<BlockProps> = ({
  children,
  threshold = 0,
  onThreshold = () => {},
  ...props
}) => {
  // const [isIntersecting, setIsIntersecting] = useState(false)
  //
  // const handleVisibilityChange = useCallback((e: IntersectionObserverEntry) => {
  //   console.log(e.intersectionRatio)
  //   setIsIntersecting(e.isIntersecting)
  // }, [])

  return (
    <Observer onChange={onThreshold} threshold={threshold}>
      <FlexItem {...props}>{children}</FlexItem>
    </Observer>
  )
}

export default Block
