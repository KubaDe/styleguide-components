import React from 'react'
import Box from '../index'

export default {
  title: 'Simple-UI|Box',
}

export const simpleBox = () => <Box backgroundColor="red">This is Box</Box>

export const halfSizeBox = () => (
  <Box backgroundColor="blue" size="50%">
    This is half size Box
  </Box>
)

const options = [
  'none',
  '3xs',
  '2xs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
]

export const Spacing = () => (
  <>
    {options.map(option => (
      <Box
        backgroundColor="blue"
        px={option}
        py="xs"
        width="200px"
        mt="xs"
        key={option}
      >
        <Box backgroundColor="red">Padding x {option}</Box>
      </Box>
    ))}
  </>
)
