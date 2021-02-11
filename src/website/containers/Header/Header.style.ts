import styled from 'shared/styles/styled';
import { css } from '@emotion/react';

type StyledProps = {
  theme: any;
}

export const HeaderStyled = styled('div')(({ theme }) => css`
  background-image: url('/banner.svg');
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: ${theme.breakpoints.mega}px) {
    background-position-y: -80px;
  }

  @media screen and (min-width: ${theme.breakpoints.tera}px) {
    background-size: cover;
    background-position-y: -70px;
  }
`);

export const HeaderContent = styled('div')(() => css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75%;
`);

export const SubtitleWrapper = styled('div')(({ theme }) => css`
  margin-top: ${theme.spacings.kilo};
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tera}px) {
    width: 50%;
  }
`)
