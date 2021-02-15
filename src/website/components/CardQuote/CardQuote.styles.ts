import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const CardQuoteWrapper = styled('div')(({ theme }) => css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 ${theme.spacings.zetta};
`);

export const CardQuoteItem = styled('div')(({ theme }) => css`

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
  margin: ${theme.spacings.giga} 0 0;
  text-align: center;
  background-color: ${theme.colors.brandPrimary.light};
  border-radius: 12px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:before {
    content: '';
    width: 0; 
    height: 0; 
    border-top: 15px solid transparent;
    border-bottom: 0px solid transparent; 
    border-right: 15px solid ${theme.colors.brandPrimary.light};
    position: absolute;
    left: -15px;
  }
`);
