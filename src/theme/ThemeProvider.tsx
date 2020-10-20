import React from 'react'
import useDarkMode from 'use-dark-mode'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './'

export const ThemeProvider: React.FC = ({ children }) => {
  const { value } = useDarkMode(false)
  const theme = value ? darkTheme : lightTheme

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}
