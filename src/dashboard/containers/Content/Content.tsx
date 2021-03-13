import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const ContentHeader = styled('div')(({ theme }) => css`

`);

export const ContentBody = styled('div')(({ theme }) => css`
    display: grid;
    grid-template-columns: 30% 50%;
    grid-gap: 10px; 
    width: 100%;
    padding: ${theme.spacings.mega} 0;
  }
`);

export const Content = styled('div')(({ theme }) => css`
  background-color: ${theme.colors.white};
  box-shadow: 2px 1px 2px rgba(0, 0, 0, .1);
  height: 100%;
  width: 100%;
  padding: 50px ${theme.spacings.giga} ${theme.spacings.mega} 180px;
  min-height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-sizing: border-box;
  z-index: 1;
  position: relative;
  
  @media (min-width: ${theme.breakpoints.mega}px) {
    height: 100%;
    min-height: 100%;
    max-width: 100%;
  }
  
  @media (min-width: ${theme.breakpoints.giga}px) {
    border-top-right-radius: unset;
    border-radius: 15px;
`);

export const ContentBar = styled(Content)(({ theme }) => css`
    width: 400px;
`)

