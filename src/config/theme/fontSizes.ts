export interface FontSizes {
  h1?: string
  h2?: string
  h3?: string
  h4?: string
  [index: number]: string
}

export const fontSizes: FontSizes = [
  '12px',
  '14px',
  '16px',
  '24px',
  '32px',
  '48px',
  '64px',
  '96px',
  '128px',
]

fontSizes.h1 = fontSizes[5]
fontSizes.h2 = fontSizes[4]
fontSizes.h3 = fontSizes[3]
fontSizes.h4 = fontSizes[2]
