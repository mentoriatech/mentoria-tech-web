import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const Background = styled('div')(
  () => css`
    position: absolute;
    top: 0;
    left: 0;
    background-image: url('/images/background.svg');
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: 700px;
    width: 100%;
    height: 100%;
    z-index: -2;
  `,
)

export const LoginBackgroundStyled = styled('div')(
  ({ theme }) => css`
    width: 100%;
    background-image: url('/images/sign.svg');
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: 700px;
    height: 100vh;
    display: block;
    // position: absolute;
    z-index: -1;

    @media (min-width: ${theme.breakpoints.mega}px) {
      width: 50%;
    }
  `,
)
