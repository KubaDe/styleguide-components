import React from 'react'
import styled from 'styled-components'
import css, { CSSObject } from '@styled-system/css'

import { primaryBackgroundMetamorphosis } from 'config/presets/transitions'

import { ScrollBlock, ScrollBlockProps } from '../../'

interface SampleBlockStylesPropsMap {
  [id: string]: CSSObject
}

export const sampleBlockStylesPropsMap: SampleBlockStylesPropsMap = {
  '0': {
    backgroundColor: 'primaries.100',
  },
  '1': {
    backgroundColor: 'primaries.500',
  },
  '2': {
    backgroundColor: 'primaries.900',
  },
  '3': {
    backgroundColor: 'secondary',
  },
}

interface SampleBlockRelatedProps {
  readonly state: string
}

type StyledScrollBlock = ScrollBlockProps & SampleBlockRelatedProps

export const StyledScrollBlock: React.FC<StyledScrollBlock> = styled(
  ScrollBlock,
)<SampleBlockRelatedProps>`
  ${props =>
    sampleBlockStylesPropsMap[props.state] &&
    css(sampleBlockStylesPropsMap[props.state])};
  ${primaryBackgroundMetamorphosis};
  scroll-snap-align: start;
`
