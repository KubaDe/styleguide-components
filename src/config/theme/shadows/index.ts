
interface Palette {
  [index: number]: string
}

export interface Shadows {
  primary: string
  primaries?: Palette
}

const primaryShadowColor: string = 'rgba(0,0,0,0.75)'

export const shadows: Shadows = {
  primary: `4px 4px 0 0px ${primaryShadowColor}`,
}

shadows.primaries = {
  100: `1px 1px 0 0px ${primaryShadowColor}`,
  200: `1px 1px 0 0px ${primaryShadowColor}`,
  300: `2px 2px 0 0px ${primaryShadowColor}`,
  400: `2px 2px 0 0px ${primaryShadowColor}`,
  500: `4px 4px 0 0px ${primaryShadowColor}`,
  600: `6px 6px 0 0px ${primaryShadowColor}`,
  700: `6px 6px 0 0px ${primaryShadowColor}`,
  800: `9px 9px 0 0px ${primaryShadowColor}`,
  900: `9px 9px 0 0px ${primaryShadowColor}`,
}
