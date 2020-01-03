import React from 'react'
import Heading, { H1, H2, H3, H4 } from '../index'
import Flex, { FlexItem } from 'components/simpleUi/Flex'

export default {
  title: 'Typography|Heading',
}

export const heading = () => (
  <Flex>
    <FlexItem width="50%">
      <Heading>Heading</Heading>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
    </FlexItem>
    <FlexItem width="50%">
      <Heading fontFamily="secondary">Heading</Heading>
      <H1 fontFamily="secondary">Heading 1</H1>
      <H2 fontFamily="secondary">Heading 2</H2>
      <H3 fontFamily="secondary">Heading 3</H3>
      <H4 fontFamily="secondary">Heading 4</H4>
    </FlexItem>
  </Flex>
)
