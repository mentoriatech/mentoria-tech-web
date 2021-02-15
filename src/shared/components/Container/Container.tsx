import styled from 'shared/styles/styled';
import { css } from '@emotion/react';

export const Container = styled('div')(({ theme }) => css`
  margin: 0 auto;
  width: 90%;

  @media (min-width: ${theme.breakpoints.mega}px) {
    width: 85%;
  }

  @media (min-width: ${theme.breakpoints.tera}px) {
    width: 1024px;
  }

  @media (min-width: 1420px) {
    width: 1024px;
  }
`);
