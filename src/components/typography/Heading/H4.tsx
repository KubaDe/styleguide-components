import React from 'react'

import Heading, { HeadingProps } from './'

const H4: React.FC<HeadingProps> = (props: HeadingProps) => (
  <Heading as="h4" fontSize="h4" {...props} />
)

export default H4
