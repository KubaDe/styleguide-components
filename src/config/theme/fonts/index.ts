import { css } from 'styled-components'
export interface Index {
  primary?: string
  secondary?: string
}

export const fonts: Index = {
  primary: `'Raleway', sans-serif`,
  secondary: `'Stoke', serif`,
}

export const fontsImportCss = css`
  @import url('https://fonts.googleapis.com/css?family=Raleway|Stoke&display=swap');
  body {
    font-family: 'Raleway', sans-serif;
  }
`
