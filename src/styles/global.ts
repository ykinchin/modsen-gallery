import { createGlobalStyle } from 'styled-components'
import { baseTheme } from './theme'

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend+Deca:wght@100..900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html,body {
    height: 100%;
}

body{
    font-family: ${baseTheme.fonts.secondary};
}

a {
    text-decoration: none;
    color: white;

    &:hover {
        color: ${baseTheme.colors.higlight}
    }
}

input {
    /* width: 100%;
    height: 100%;
    padding: 16px;
    border-radius: 16px;
    background: rgba(57, 57, 57, 0.05);
    border: none; */

    width: 100%;
    padding: 16px;
    border-radius: 16px;
    background: rgba(57, 57, 57, 0.05);
    border: none;
    outline: none;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 0;
  padding: 0;
}
`
