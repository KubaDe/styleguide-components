import React from 'react'

import Heading, { HeadingProps } from './'

const H1: React.FC<HeadingProps> = (props: HeadingProps) => (
  <Heading as="h1" fontSize="h1" {...props} />
)

export default H1
