import React from 'react'
import { useTheme } from 'styled-components'
import useDarkMode from 'use-dark-mode'

import { Button } from './Button'

export const ThemeToggle = () => {
  const darkMode = useDarkMode(false)
  const { name } = useTheme()
  return (
    <Button onClick={darkMode.toggle}>
      Theme: {name}
    </Button>
  )
}
