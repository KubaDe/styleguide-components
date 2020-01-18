import React from 'react'

import { ScrollBlock, ScrollSpine } from '../../'

import SampleBlock from './SampleBlock'

export const Basic = () => {
  return (
    <ScrollSpine>
      <ScrollBlock height="100vh" maxHeight="3000px" backgroundColor="primary">
        Block 1
      </ScrollBlock>
      <SampleBlock />
      <SampleBlock />
      <SampleBlock />
    </ScrollSpine>
  )
}
