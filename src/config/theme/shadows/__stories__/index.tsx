import React from 'react'
import Flex, { FlexItem } from 'components/simpleUi/Flex'
import { H4 } from 'components/typography/Heading'

export default {
  title: 'Theme|Shadows',
}

const props = {
  width: '50px',
  height: '50px',
  m: 'sm',
  backgroundColor: 'primaries.200',
}


export const ShadowAlias = () => (
  <>
    <H4>Primary</H4>
    <Flex>
      <FlexItem {...props} boxShadow="primaries.100">
        100
      </FlexItem>
      <FlexItem {...props} boxShadow="primaries.200">
        200
      </FlexItem>
      <FlexItem {...props} boxShadow="primaries.300">
        300
      </FlexItem>
      <FlexItem {...props} boxShadow="primaries.400">
        400
      </FlexItem>
      <FlexItem {...props} boxShadow="primaries.500">
        500
      </FlexItem>
      <FlexItem {...props} boxShadow="primaries.600">
        600
      </FlexItem>
      <FlexItem {...props} boxShadow="primaries.700">
        700
      </FlexItem>
      <FlexItem {...props} boxShadow="primaries.800">
        800
      </FlexItem>
      <FlexItem {...props} boxShadow="primaries.900">
        900
      </FlexItem>
    </Flex>
  </>
)
