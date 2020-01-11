import React from 'react'
import Box from 'components/simpleUi/Box'

export default {
  title: 'Theme|Spacing',
}


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

export const SpacingAlias = () => (
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
        <Box backgroundColor="red">Padding x "{option}"</Box>
      </Box>
    ))}
  </>
)
