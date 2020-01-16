import { primaryBackgroundMetamorphosis } from 'config/presets/transitions'
import { Machine, StateSchema } from 'xstate'
import { useMachine } from '@xstate/react'

import { ScrollBlock, ScrollSpine, ScrollBlockProps } from '../../'


export const thresholds: number[] = [0.2, 0.5, 0.8]

export interface Event<T> {
    type: string
    payload: T
}



const checkThreshold = (
    ctx: {},
    event: Event<number>,
    options: any,
): boolean => {
    if (options && options.cond.threshold) {
        const threshold = options.cond.threshold
        return event.payload >= threshold
    }
    return false
}



interface BlockMachineStateSchema {
    states: {
        '0': {}
        '1': {}
        '2': {}
        '3': {}
    }
}

const SampleBlockMachine = Machine<{}, BlockMachineStateSchema, any>(
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
