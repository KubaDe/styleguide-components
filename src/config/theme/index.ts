import { createGlobalStyle } from 'styled-components'

import { fonts, fontsImportCss } from './fonts'
import { fontSizes } from './fontSizes'
import { space } from './space'
import { colors } from './colors'
import { shadows } from './shadows'

/**
 *
   Theme Key	    CSS Properties
   space	        margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left, grid-gap, grid-column-gap, grid-row-gap
   fontSizes	    font-size
   colors	        color, background-color, border-color
   fonts	        font-family
   fontWeights	    font-weight
   lineHeights	    line-height
   letterSpacings	letter-spacing
   sizes	        width, height, min-width, max-width, min-height, max-height
   borders	        border, border-top, border-right, border-bottom, border-left
   borderWidths	    border-width
   borderStyles	    border-style
   radii	        border-radius
   shadows	        box-shadow, text-shadow
   zIndices	        z-index
   transitions	    transition
 */

const index = {
  fontSizes,
  space,
  fonts,
  colors,
  shadows,
}

export const GlobalStyles = createGlobalStyle`
  ${fontsImportCss};
  body {
    margin: 0;
  }
`

export default index
