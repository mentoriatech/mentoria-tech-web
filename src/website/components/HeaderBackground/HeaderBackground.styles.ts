import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const Background = styled('div')(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('/images/background.svg');
    background-repeat: no-repeat;
    height: 100%;
    z-index: -2;

    @media (min-width: ${theme.breakpoints.mega}px) {
      background-size: 700px;
      background-position: 100% 50%;
      width: 100%;
    }
  `,
)

export const LoginBackgroundStyled = styled('div')(
  ({ theme }) => css`
    width: 100%;
    height: 300px;
    background-image: url('/images/sign.svg');
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: 100%;
    display: block;
    margin-top: ${theme.spacings.zetta};
    // position: absolute;
    z-index: -1;

    @media (min-width: ${theme.breakpoints.mega}px) {
      margin-top: 0;
      height: 100vh;
      background-size: 700px;
      width: 50%;
    }
  `,
)
