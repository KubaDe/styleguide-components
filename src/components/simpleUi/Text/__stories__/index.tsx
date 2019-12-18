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
