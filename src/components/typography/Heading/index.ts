import styled from 'styled-components'
import Box, { BaseBoxProps } from 'components/simpleUi/Box'

import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'

export type HeadingProps = BaseBoxProps

const Heading = styled(Box).attrs({ as: 'h1' })<HeadingProps>``

export { H1, H2, H3, H4 }
export default Heading
