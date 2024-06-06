import { createGlobalStyle } from 'styled-components'
import { baseTheme } from './theme'

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    
}

html,body {
    height: 100%;
}

a {
    text-decoration: none;
    color: white;

    &:hover {
        color: ${baseTheme.colors.higlight}
    }
}
`
