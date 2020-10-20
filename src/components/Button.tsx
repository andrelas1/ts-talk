import styled, { css } from 'styled-components'

export const Button = styled.button<{ secondary?: boolean }>(
  ({ secondary, theme: { color, spacing, borderRadii } }) => css`
    padding: ${spacing.s} ${spacing.m};
    border: none;
    border-radius: ${borderRadii.m};
    margin: ${spacing.m};
    color: ${secondary ? color.secondaryButtonColor : color.primaryButtonColor};
    background: ${secondary
      ? color.secondaryButtonBackground
      : color.primaryButtonBackground};
  `
)
