import React from 'react'
import Box from 'components/simpleUi/Box'
import { H4 } from 'components/typography/Heading'
import { borderWidths } from '../'

export default {
  title: 'Theme|Borders',
}

const props = {
  width: '100px',
  height: '100px',
  m: 'sm',
  backgroundColor: 'primaries.200',
}

export const BorderWidthAlias = () => (
  <>
    <H4>Primary</H4>
      {Object.keys(borderWidths).map(key =>
          <Box {...props} border='primary' borderWidth={key} key={key}>
            {key}
          </Box>
      )}
  </>
)
