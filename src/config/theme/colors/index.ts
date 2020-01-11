import { tint, shade } from 'polished'
import range from 'lodash/range'
import fromPairs from 'lodash/fromPairs'
import { color } from 'styled-system';

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

const generateColorPalette = (color: string): Palette => ({
  100: tint(.8, color),
  200: tint(.6, color),
  300: tint(.4, color),
  400: tint(.2, color),
  500: color,
  600: shade(.2, color),
  700: shade(.4, color),
  800: shade(.6, color),
  900: shade(.8, color),
  dark: shade(.4, color),
  light: tint(.4, color),
})


export const colors: Colors = {
  primary: '#2EC4B6',
  secondary: '#FF9F1C',
}

colors.primaries = generateColorPalette(colors.primary)
colors.secondaries = generateColorPalette(colors.secondary)
