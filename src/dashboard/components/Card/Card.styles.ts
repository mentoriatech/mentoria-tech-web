import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const CardStyled = styled('div')(({ theme, direction }) => css`
  padding: ${theme.spacings.mega};
  position: relative;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, .1);
  display: flex;
  flex-direction: ${direction || 'row'};
  width: 100%;
  overflow: hidden;

  &:not(:first-child) {
    margin-top: ${theme.spacings.kilo};
  }
`);

export const CardTitle = styled('div')(({ theme }) => css`
  font-size: ${theme.typography.text.kilo.fontSize};
  color: ${theme.colors.grey.dark};
  font-family: ${theme.fontStack.default};
  margin-bottom: ${theme.spacings.mega};
  text-transform: uppercase;
`);
