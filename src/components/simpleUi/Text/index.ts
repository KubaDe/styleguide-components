import styled from 'styled-components'
import { typography, TypographyProps } from 'styled-system'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'

export type BaseTextProps = BaseBoxProps & TypographyProps

const Text = styled(Box)<BaseTextProps>`
  ${typography}
`

export default Text
