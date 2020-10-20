import { DefaultTheme } from 'styled-components'

// this enables module augmentation - basically declaration merging
// whithout this, we could create a type and export to every place (but there are better ways)
// TODO: do we need the declare module?
// Test this by adding properties to DefaultTheme in the node_modules
declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark'
    spacing: typeof spacing
    color: typeof color
    typography: typeof typography
    borderRadii: typeof borderRadii
  }
}

const baseColors = {
  white: '#FFFFFF ',
  black: '#202020',
  blue: {
    light: '#EBF7F8',
    dark: '#34595F',
  },
  green: {
    light: '#F8FDEE',
    dark: '#77835E',
  },
}

const spaceUnit = 1

const spacing = {
  xxs: `${0.25 * spaceUnit}em`,
  xs: `${0.5 * spaceUnit}em`,
  s: `${spaceUnit}em`,
  m: `${1.25 * spaceUnit}em`,
  l: `${2 * spaceUnit}em`,
  xl: `${3.25 * spaceUnit}em`,
  xxl: `${5.25 * spaceUnit}em`,
}

const borderRadii = {
  s: '4px',
  m: '8px',
  round: '50%',
}

const color = {
  white: baseColors.white,
  black: baseColors.black,
  text: baseColors.black,
  screenBackground: baseColors.white,
  primaryButtonBackground: baseColors.black,
  primaryButtonColor: baseColors.white,
  secondaryButtonBackground: baseColors.green.light,
  secondaryButtonColor: baseColors.black,
}

const typography = {
  fontSize: {
    body: '1.125rem',
    bodyS: '1rem',
    bodyXS: '0.9rem',
    bodyXXS: '0.72rem',
    heading1: '2.74rem',
    heading2: '2.19rem',
    heading3: '1.75rem',
    heading4: '1.4rem',
  },
  fontWeight: {
    black: '900',
    bold: '700',
    medium: '500',
    regular: '400',
  },
}

export const lightTheme: DefaultTheme = {
  color,
  borderRadii,
  name: 'light',
  spacing,
  typography,
}

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  color: {
    ...lightTheme.color,
    text: baseColors.white,
    screenBackground: baseColors.black,
    primaryButtonBackground: baseColors.blue.light,
    primaryButtonColor: baseColors.black,
    secondaryButtonBackground: baseColors.green.light,
    secondaryButtonColor: baseColors.black,
  },
  name: 'dark',
}
