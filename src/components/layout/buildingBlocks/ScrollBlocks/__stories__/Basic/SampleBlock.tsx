import React from 'react'
import { css } from 'styled-components'
import { primaryBackgroundMetamorphosis } from 'config/presets/transitions'
import { Machine, StateSchema } from 'xstate'
import { useMachine } from '@xstate/react'


import SampleBlockMachine, { Event } from './SampleBlock.machine'
import {
  sampleBlockStylesPropsMap,
    StyledScrollBlock,
} from './SampleBlock.styled'

import { ScrollBlock, ScrollSpine, ScrollBlockProps } from '../../'

const thresholds: number[] = [0.2, 0.5, 0.8]

const thresholdEventFactory = (intersectionRatio: number): Event<number> => ({
  type: 'THRESHOLD',
  payload: intersectionRatio,
})

type SampleBlockProps = ScrollBlockProps

const SampleBlock: React.FC<SampleBlockProps> = (props) => {
  const [current, send] = useMachine(SampleBlockMachine)
  const state: string = String(current.value)

  const onThreshold = (e: IntersectionObserverEntry): void => {
    !current.done && send(thresholdEventFactory(e.intersectionRatio))
  }

  return (
    <StyledScrollBlock
      onThreshold={onThreshold}
      threshold={thresholds}
      height="100vh"
      maxHeight="3000px"
      state={state}
      {...props}
    >
      Block 2
    </StyledScrollBlock>
  )
}

export default SampleBlock
