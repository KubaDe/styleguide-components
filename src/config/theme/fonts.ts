import { css } from 'styled-components'
export interface Fonts {
  primary?: string
  secondary?: string
}

export const fonts: Fonts = {
  primary: `'Raleway', sans-serif`,
  secondary: `'Stoke', serif`,
}

export const fontsImportCss = css`
  @import url('https://fonts.googleapis.com/css?family=Raleway|Stoke&display=swap');
  body {
    font-family: 'Raleway', sans-serif;
  }
`
