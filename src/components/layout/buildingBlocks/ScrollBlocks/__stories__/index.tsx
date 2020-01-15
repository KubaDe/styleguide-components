import React from 'react'
import { Machine, StateSchema } from 'xstate'
import { useMachine } from '@xstate/react'

import { ScrollBlock, ScrollSpine, ScrollBlockProps } from '../'

export default {
  title: 'layout|buildingBlocks.ScrollBox',
}

const thresholds: number[] = [0.2, 0.5, 0.8]

interface Event<T> {
  type: string
  payload: T
}

const checkThreshold = (
  ctx: {},
  event: Event<number>,
  options: any,
): boolean => {
  if (options && options?.cond?.threshold) {
    const threshold = options.cond.threshold
    return event.payload >= threshold
  }
  return false
}

const thresholdEventFactory = (intersectionRatio: number): Event<number> => ({
  type: 'THRESHOLD',
  payload: intersectionRatio,
})

interface States {
  [key: number]: StateSchema
}

interface BlockMachineStateSchema {
  states: {
    0: {}
    1: {}
    2: {}
    3: {}
  }
}

const BlockMachine = Machine<any, BlockMachineStateSchema, any>(
  {
    id: 'block-1',
    initial: '0',
    states: {
      '0': {
        on: {
          THRESHOLD: {
            target: '1',
            cond: { type: 'checkThreshold', threshold: thresholds[0] },
          },
        },
      },
      '1': {
        on: {
          THRESHOLD: {
            target: '2',
            cond: { type: 'checkThreshold', threshold: thresholds[1] },
          },
        },
      },
      '2': {
        on: {
          THRESHOLD: {
            target: '3',
            cond: { type: 'checkThreshold', threshold: thresholds[2] },
          },
        },
      },
      '3': {
        type: 'final',
      },
    },
  },
  {
    guards: {
      checkThreshold,
    },
  },
)

interface StylesPropsMap {
  [id: number]: Omit<ScrollBlockProps, 'threshold' | 'onThreshold'>
}

const stylesPropsMap: StylesPropsMap = {
  0: {
    backgroundColor: 'primary',
  },
  1: {
    backgroundColor: 'primary',
  },
  2: {
    backgroundColor: 'secondary ',
  },
  3: {
    backgroundColor: 'secondary ',
  },
}

export const Basic = () => {
  const [current, send] = useMachine(BlockMachine)

  console.log(current.value)
  const onThreshold = (e: IntersectionObserverEntry): void => {
    !current.done && send(thresholdEventFactory(e.intersectionRatio))
  }

  return (
    <ScrollSpine>
      <ScrollBlock
        threshold={0}
        onThreshold={() => {}}
        height="100vh"
        maxHeight="3000px"
        backgroundColor="primary"
      >
        Block 1
      </ScrollBlock>
      <ScrollBlock
        height="100vh"
        maxHeight="3000px"
        onThreshold={onThreshold}
        threshold={thresholds}
      >
        Block 2
      </ScrollBlock>
    </ScrollSpine>
  )
}
