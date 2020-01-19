import React from 'react'
import Box from 'components/simpleUi/Box'

export default {
  title: 'Theme|Sizes',
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
        width={option}
        height={option}
        mt="xs"
        key={option}
      >
      </Box>
    ))}
  </>
)
