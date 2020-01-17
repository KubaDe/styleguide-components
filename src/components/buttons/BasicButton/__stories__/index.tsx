import React from 'react'
import Button from '../index'
import Flex from 'components/simpleUi/Flex'
import { H2 } from 'components/typography/Heading'

export default {
  title: 'Buttons',
}

const props = {
  m: 'sm',
}

export const Basic = () => (
  <>
    <H2>Button sizes</H2>
    <Flex>
      <Button size="small" {...props}>
        "small" button
      </Button>
      <Button {...props}>"normal" button</Button>
      <Button size="large" {...props}>
        "large" button
      </Button>
    </Flex>
    <H2>Button types</H2>
    <Flex>
      <Button type="primary" {...props}>
        "primary" button
      </Button>
      <Button type="secondary" {...props}>
        "secondary" button
      </Button>
    </Flex>
    <H2>Outline</H2>
    <Flex>
      <Button outline {...props}>
        "outline" button
      </Button>
      <Button {...props}>"button</Button>
    </Flex>
  </>
)
