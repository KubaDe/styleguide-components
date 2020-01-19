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

export const sizes: Index = [0, 4, 8, 16, 24, 32, 40, 64, 128, 256]

sizes['none'] = sizes[0]
sizes['3xs'] = sizes[1] + 'px'
sizes['2xs'] = sizes[2] + 'px'
sizes['xs'] = sizes[3] + 'px'
sizes['sm'] = sizes[4] + 'px'
sizes['md'] = sizes[5] + 'px'
sizes['lg'] = sizes[6] + 'px'
sizes['xl'] = sizes[7] + 'px'
sizes['2xl'] = sizes[8] + 'px'
sizes['3xl'] = sizes[9] + 'px'
