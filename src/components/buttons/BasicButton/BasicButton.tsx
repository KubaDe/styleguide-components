import React from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import css from '@styled-system/css'

import Flex, { BaseFlexProps } from 'components/simpleUi/Flex'

import types, { TypesProps } from './types'

interface ButtonRelatedProps {
  outline?: boolean
}

const sizeVariant = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: 'h5',
      height: 'md',
      px: 'md',
    },
    normal: {
      fontSize: 'h3',
      height: 'lg',
      px: 'lg',
    },
    large: {
      fontSize: 'h1',
      height: 'xl',
      px: 'xl',
    },
  },
})

interface SizeVariantsProps {
  size?: 'small' | 'normal' | 'large'
}

export type BasicButtonProps = BaseFlexProps &
  ButtonRelatedProps &
  SizeVariantsProps &
  TypesProps

const BasicButton: React.FC<BasicButtonProps> = styled(Flex).attrs({
  as: 'button',
  flexWrap: 'nowrap',
})<BasicButtonProps>`
  ${types};
  ${sizeVariant};
  cursor: pointer;
  white-space: nowrap;
  ${props =>
    props.outline &&
    css({
      backgroundColor: 'rgba(255, 255, 255, 0)',
      borderColor: 'current-color',
      border: 'primary',
    })}
`

BasicButton.defaultProps = {
  size: 'normal',
  outline: false,
  type: 'primary',
}

export default BasicButton
