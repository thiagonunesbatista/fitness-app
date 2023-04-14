import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './GlobalStyles'

import { Router } from './Router'

import { Navbar } from './components/Navbar'
import { ContentContainer } from './components/ContentContainer'

import { theme } from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <ContentContainer>
        <Router />
      </ContentContainer>
    </ThemeProvider>
  </React.StrictMode>
)
