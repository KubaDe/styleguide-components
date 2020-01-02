import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'config/theme'


const themeDecorator = (storyFn: () => any) =>
    <ThemeProvider theme={theme}>
        {storyFn()}
    </ThemeProvider>;

export default themeDecorator
