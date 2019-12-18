import React from 'react'
import Flex, { FlexItem } from '../index'
import Box from 'components/simpleUi/Box'

export default {
  title: 'Simple-UI|Flex',
}

export const simpleFlex = () => (
  <Flex height="100px">
    <FlexItem background="green" height="100%" flex="1 1 auto" />
    <Box background="blue" height="100%" width="20px" />
    <Box background="red" height="100%" width="30%" />
  </Flex>
)
