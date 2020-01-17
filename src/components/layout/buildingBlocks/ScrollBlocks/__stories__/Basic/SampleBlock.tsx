import React from 'react'
import { useMachine } from '@xstate/react'

import { ScrollBlockProps } from '../../'
import SampleBlockMachine, { ThresholdEvent, thresholds } from './SampleBlock.machine'
import {
  StyledScrollBlock,
} from './SampleBlock.styled'


const thresholdEventFactory = (intersectionRatio: number): ThresholdEvent => ({
  type: 'THRESHOLD',
  threshold: intersectionRatio,
})

type SampleBlockProps = ScrollBlockProps

const SampleBlock: React.FC<SampleBlockProps> = props => {
  const [current, send] = useMachine(SampleBlockMachine)
  const state: string = String(current.value)

  const onThreshold = (e: IntersectionObserverEntry): void => {
    console.log(e.intersectionRatio, state)
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
