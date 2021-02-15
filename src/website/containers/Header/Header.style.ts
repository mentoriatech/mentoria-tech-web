import styled from 'shared/styles/styled';
import { css } from '@emotion/react';

type StyledProps = {
  theme: any;
}

export const HeaderStyled = styled('div')(({ theme }) => css`
  position: relative;
  height: 500px;
  width: 100%;
  margin-bottom: calc(${theme.spacings.zetta} * 3);
  
  @media (min-width: ${theme.breakpoints.mega}px) {
    height: 600px;
  }
  
  @media (min-width: ${theme.breakpoints.tera}px) {
    height: 850px;
  }

  @media (min-width: ${theme.breakpoints.tera}px) and (min-height: 505px) {
    height: 620px;
  }
`);

export const HeaderContent = styled('div')(() => css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75%;
  z-index: 3;
`);

export const SubtitleWrapper = styled('div')(({ theme }) => css`
  margin-top: ${theme.spacings.kilo};
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tera}px) {
    width: 50%;
  }
`)
