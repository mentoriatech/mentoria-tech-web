import styled from 'shared/styles/styled';
import { css } from '@emotion/react';

export const LogoWrapper = styled('div')(({ theme }) => css`
  width: 200px;

  @media screen and (min-width: ${theme.breakpoints.mega}px) {
    width: 300px;
  }
`);

export const Logo = styled('img')(() => css`
  width: 100%;
`);
