import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Sofia Sans', sans-serif;
  color: #111;
}

a {
  text-decoration: none;
}

body {
    ${({ theme: { colors } }) => ({
      background: colors.primary
    })}
  }
`
