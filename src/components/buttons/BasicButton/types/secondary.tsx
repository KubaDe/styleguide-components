import { css } from 'styled-components'
import ssCss from '@styled-system/css'

const secondary = css`
  ${ssCss({
    backgroundColor: 'secondary',
  })};
  :active {
    ${ssCss({
      backgroundColor: 'secondaries.300',
    })};
  }

  :focus {
    ${ssCss({
      backgroundColor: 'secondaries.100',
    })};
  }

  :hover {
    ${ssCss({
      backgroundColor: 'secondaries.700',
    })};
  }
`

export default secondary
