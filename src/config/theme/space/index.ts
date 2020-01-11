export interface Index {
  none?: number
  '3xs'?: string
  '2xs'?: string
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  '2xl'?: string
  '3xl'?: string
  [index: number]: number
}

export const space: Index = [0, 4, 8, 16, 24, 32, 40, 64, 128, 256]

space['none'] = space[0]
space['3xs'] = space[1] + 'px'
space['2xs'] = space[2] + 'px'
space['xs'] = space[3] + 'px'
space['sm'] = space[4] + 'px'
space['md'] = space[5] + 'px'
space['lg'] = space[6] + 'px'
space['xl'] = space[7] + 'px'
space['2xl'] = space[8] + 'px'
space['3xl'] = space[9] + 'px'
