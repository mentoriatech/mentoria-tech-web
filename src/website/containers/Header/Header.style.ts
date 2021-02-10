import styled from 'shared/styles/styled';
import { css } from '@emotion/react';

type StyledProps = {
  theme: any;
}

export const HeaderStyled = styled('div')(({ theme }) => css`
  background-image: url('/banner.png');
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: top right;

  @media screen and (min-width: ${theme.breakpoints.tera}px) {
    background-size: 950px;
    background-position: top right;
  }
`);

export const HeaderContent = styled('div')(() => css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
`);

export const SubtitleWrapper = styled('div')(({ theme }) => css`
  margin-top: ${theme.spacings.peta};
  width: 50%;
`)
