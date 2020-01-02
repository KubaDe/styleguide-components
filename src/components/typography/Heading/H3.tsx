import React from 'react'

import Heading, { HeadingProps } from './'

const H2: React.FC<HeadingProps> = (props: HeadingProps) => (
  <Heading as="h3" fontSize="h3" {...props} />
)

export default H2
