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
    <Box backgroundColor="secondary" width="100%" height="100px" />
    <Flex>
      {range(100, 1000, 100).map(shade => (
        <FlexItem
          backgroundColor={`secondaries.${shade}`}
          height="100px"
          width="11.1%"
          key={shade}
        />
      ))}
    </Flex>
  </>
)
