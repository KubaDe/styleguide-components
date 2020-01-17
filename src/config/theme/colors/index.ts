import { tint, shade } from 'polished'

interface Palette {
  [index: number]: string
  light?: string
  dark?: string
}

export interface Colors {
  primary: string
  primaries: Palette
  secondary: string
  secondaries: Palette
  black: string
  white: string
  gray: string
  grayScale: Palette
}

const generateColorPalette = (color: string): Palette => ({
  '100': tint(0.8, color),
  '200': tint(0.6, color),
  '300': tint(0.4, color),
  '400': tint(0.2, color),
  '500': color,
  '600': shade(0.2, color),
  '700': shade(0.4, color),
  '800': shade(0.6, color),
  '900': shade(0.8, color),
  dark: shade(0.4, color),
  light: tint(0.4, color),
})

const primaryColors = {
  primary: '#2EC4B6',
  secondary: '#FF9F1C',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#7f7f7f',
}

export const colors: Colors = {
  ...primaryColors,
  primaries: generateColorPalette(primaryColors.primary),
  secondaries: generateColorPalette(primaryColors.secondary),
  grayScale: generateColorPalette(primaryColors.gray),
}




