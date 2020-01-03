import { tint } from 'polished'
import range from 'lodash/range'
import fromPairs from 'lodash/fromPairs'

const colorRange: number[] = range(100, 1000, 100)

interface Palette {
  [index: number]: string
  light?: string
  dark?: string
}

export interface Colors {
  primary: string
  primaries?: Palette
  secondary: string
  secondaries?: Palette
}

export const colors: Colors = {
  primary: '#2EC4B6',
  secondary: '#FF9F1C',
}

colors.primaries = {
  ...fromPairs(
    colorRange.map(step => [step, tint(step / 1000, colors.primary)]),
  ),
}

console.log(colors, colorRange)
