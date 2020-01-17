import { css } from 'styled-components'
import ssCss from '@styled-system/css'

const primary = css`
  ${ssCss({
    backgroundColor: 'primary',
  })};
  :active {
    ${ssCss({
      backgroundColor: 'primaries.300',
    })};
  }

  :focus {
    ${ssCss({
      backgroundColor: 'primaries.100',
    })};
  }

  :hover {
    ${ssCss({
      backgroundColor: 'primaries.700',
    })};
  }
`

export default primary
