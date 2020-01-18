import React, { Children } from 'react'
import 'intersection-observer'
import { StyledBox, StyledBoxProps } from './Spine.styled'

export type SpineProps = StyledBoxProps

const Spine: React.FC<SpineProps> = ({ children, ...props }) => {
  return (
    <StyledBox {...props}>
      {Children.map(children, child => {
        return child
      })}
    </StyledBox>
  )
}

export default Spine
