import React, { Children } from 'react'
import 'intersection-observer'
import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

export type SpineProps = BaseFlexProps

const Spine: React.FC<SpineProps> = ({ children, ...props }) => {
  return (
    <Flex {...props} flexDirection="column">
      {Children.map(children, child => {
        return child
      })}
    </Flex>
  )
}

export default Spine
