import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme, { GlobalStyles } from 'config/theme'


const themeDecorator = (storyFn: () => any) =>
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        {storyFn()}
    </ThemeProvider>;

export default themeDecorator
