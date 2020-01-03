import React from 'react'
import range from 'lodash/range'
import Flex, { FlexItem } from 'components/simpleUi/Flex'
import Box from 'components/simpleUi/Box'
import { H4 } from 'components/typography/Heading'

export default {
  title: 'Theme|Colors',
}

export const Colors = () => (
  <>
    <H4>Primary</H4>
    <Box backgroundColor="primary" width="100%" height="100px" />
    <Flex>
      {range(100, 1000, 100).map(shade => (
        <FlexItem
          backgroundColor={`primaries.${shade}`}
          height="100px"
          width="11.1%"
          key={shade}
        />
      ))}
    </Flex>
    <H4>Secondary</H4>
    <Box backgroundColor="secondary" width="100px" height="100px" />
    {/*<Flex>*/}
    {/*  {options.map(option => (*/}
    {/*    <Box*/}
    {/*      backgroundColor="blue"*/}
    {/*      px={option}*/}
    {/*      py="xs"*/}
    {/*      width="200px"*/}
    {/*      mt="xs"*/}
    {/*      key={option}*/}
    {/*    >*/}
    {/*      <Box backgroundColor="red">Padding x {option}</Box>*/}
    {/*    </Box>*/}
    {/*  ))}*/}
    {/*</Flex>*/}
  </>
)
