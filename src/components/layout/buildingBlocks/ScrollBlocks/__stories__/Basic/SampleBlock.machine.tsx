import { Machine } from 'xstate'

export const thresholds: number[] = [0.2, 0.5, 0.8]

export interface ThresholdEvent {
  type: string
  threshold: number
}

type SampleBlockMachineEvent = ThresholdEvent

interface SampleBlockMachineStateSchema {
  states: {
    '0': {}
    '1': {}
    '2': {}
    '3': {}
  }
}

const checkThreshold = (
  ctx: {},
  event: ThresholdEvent,
  options: any,
): boolean => {
  if (options && options.cond.threshold) {
    const threshold = options.cond.threshold
    console.log(event.threshold, threshold)
    return event.threshold >= threshold
  }
  return false
}

const SampleBlockMachine = Machine<
  {},
  SampleBlockMachineStateSchema,
  SampleBlockMachineEvent
>(
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

export default SampleBlockMachine
