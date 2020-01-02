interface FontSizes {
  h1?: string
  h2?: string
  h3?: string
  h4?: string
  [index: number]: number
}

const fontSizes: FontSizes = [12, 14, 16, 24, 32, 48, 64, 96, 128]

const theme = {
  fontSizes,
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    blue: '#07c',
    red: '#e10',
  },
}

// theme.space.big = theme.space[5] + 'px'
// theme.space['2.5'] = '12px'
theme.fontSizes.h1 = theme.space[5] + 'px'
theme.fontSizes.h2 = theme.space[4] + 'px'
theme.fontSizes.h3 = theme.space[3] + 'px'
theme.fontSizes.h4 = theme.space[2] + 'px'

export default theme
