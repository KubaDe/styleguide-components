import styled from 'styled-components'
import css from '@styled-system/css'
import { ScrollBlock, ScrollBlockProps } from '../../'
import React from 'react'

interface SampleBlockStylesPropsMap {
  [id: string]: Omit<ScrollBlockProps, 'threshold' | 'onThreshold'>
}

export const sampleBlockStylesPropsMap: SampleBlockStylesPropsMap = {
  '0': {
    backgroundColor: 'primary',
  },
  '1': {
    backgroundColor: 'primary',
  },
  '2': {
    backgroundColor: 'secondary',
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
  ${props => sampleBlockStylesPropsMap[props.state] && css(sampleBlockStylesPropsMap[props.state])}
  
  
`
