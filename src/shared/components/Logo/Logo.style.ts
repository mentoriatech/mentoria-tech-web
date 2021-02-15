import styled from 'shared/styles/styled';
import { css } from '@emotion/react';

const sizes = {
  small: '200px',
  medium: '250px',
  large: '300px',
}

export const LogoWrapper = styled('div')(({ theme, size }) => css`
  width: ${size ? sizes[size] : sizes.medium};
  z-index: 1;

  @media screen and (min-width: ${theme.breakpoints.mega}px) {
    width: ${size ? sizes[size] : sizes.medium};
  }
`);

export const Logo = styled('img')(() => css`
  width: 100%;
`);
