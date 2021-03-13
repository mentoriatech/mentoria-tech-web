import styled from 'shared/styles/styled'
import { css } from '@emotion/react'
import Container from 'shared/components/Container'

export const HeaderStyled = styled('div')(({ theme }) => css`
  position: relative;
  height: 400px;
  width: 100%;
  margin-bottom: ${theme.spacings.zetta};
  
  @media (min-width: ${theme.breakpoints.mega}px) {
    margin-bottom: calc(${theme.spacings.zetta} * 3);
    height: 600px;
  }
  
  @media (min-width: ${theme.breakpoints.tera}px) {
    height: 950px;
  }
`);

export const HeaderContent = styled('div')(({ direction }) => css`
  flex-direction: column;
  display: inline-flex;
  z-index: 3;
  width: 50%;
`);

export const SubtitleWrapper = styled('div')(({ theme }) => css`
  margin-top: ${theme.spacings.kilo};
  width: 80%;
`)

export const HeaderChildren = styled('div')(({ theme }) => css`
  width: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;

`);

export const HeaderContainer = styled(Container)(({ theme }) => css`
  display: flex;
  height: 85%;
  justify-content: center;
  align-items: center;
`);
