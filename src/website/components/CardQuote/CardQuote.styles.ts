import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const CardQuoteWrapper = styled('div')(({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  
  @media (min-width: ${theme.breakpoints.giga}px) {
    margin: 0 0 ${theme.spacings.zetta};
    flex-direction: row;
  }
`);

export const CardQuoteItem = styled('div')(({ theme }) => css`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacings.exa};
  
  @media (min-width: ${theme.breakpoints.giga}px) {
    margin-bottom: 0;
  }
`);

export const CardQuoteImage = styled('img')(({ theme }) => css`
`);

export const CardQuoteTitle = styled('div')(({ theme }) => css`
  font-size: ${theme.typography.headings.mega.fontSize};
  text-align: center;
  margin: ${theme.spacings.kilo} 0 0;

  &:before {
    content: '_';
    color: ${theme.colors.brandPrimary.normal};
  }
`);

export const CardQuoteSubtitle = styled('div')(({ theme }) => css`
  text-align: center;
  `);
  
export const CardBlockQuote = styled('div')(({ theme }) => css`
  margin: ${theme.spacings.kilo} auto 0 auto;
  text-align: center;
  background-color: ${theme.colors.brandPrimary.light};
  border-radius: 12px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: calc(100% - ${theme.spacings.mega});

  &:before {
    content: '';
    width: 0; 
    height: 0; 
    border-top: 0px solid transparent;
    border-bottom: 15px solid transparent; 
    border-right: 15px solid ${theme.colors.brandPrimary.light};
    position: absolute;
    left: -15px;
  }
`);
