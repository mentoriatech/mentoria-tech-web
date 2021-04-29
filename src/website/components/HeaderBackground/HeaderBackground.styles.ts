import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import Container from 'shared/components/Container'

export const Background = styled('div')(({ theme }) => css`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('/images/background.svg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  z-index: -2;
`);

export const LoginBackgroundStyled = styled('div')(({ theme }) => css`
  width: 50%;
  background: rgb(187,0,72);
  background: linear-gradient(180deg, #690FA0 0%, #FF6584 100%);
  height: 100vh;
  display: block;
  position: absolute;
  z-index: -1;
`);
