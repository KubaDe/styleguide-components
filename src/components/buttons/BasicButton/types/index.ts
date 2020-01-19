import { css, FlattenSimpleInterpolation } from 'styled-components'

import primary from './primary'
import secondary from './secondary'

const typesMap = {
  primary,
  secondary,
}

export interface TypesProps {
  type?: 'primary' | 'secondary'

}

const types = css<TypesProps>`
  ${props => props.type && typesMap[props.type]};
`

export default types
