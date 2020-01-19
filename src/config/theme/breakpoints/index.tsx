export interface Breakpoints {
  [key: number]: string
  _?: string
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  '2xl'?: string
}

export const breakpoints: Breakpoints = [
  '0',
  '280px',
  '480px',
  '736px',
  '980px',
  '1280px',
  '1690px',
]

breakpoints._ = breakpoints[0]
breakpoints.xs = breakpoints[1]
breakpoints.sm = breakpoints[2]
breakpoints.md = breakpoints[3]
breakpoints.lg = breakpoints[4]
breakpoints.xl = breakpoints[5]
breakpoints['2xl'] = breakpoints[6]
