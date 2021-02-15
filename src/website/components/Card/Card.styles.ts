import { css } from '@emotion/react';
import styled from 'shared/styles/styled'

export const CardStyled = styled('div')(({ theme, direction, align }) => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: ${direction};
  margin: 0 0 ${theme.spacings.zetta};
  padding: 0 0 ${theme.spacings.zetta};
  `);
  
  export const CardContent = styled('div')(({ theme, align }) => css`
  border-bottom: 4px dotted ${theme.colors.brandPrimary.normal};
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
`);

export const CardTitle = styled('h3')(({ theme }) => css`
  font-size: ${theme.typography.headings.mega.fontSize};
  font-weight: ${theme.fontWeight.regular};
  text-align: left;
  margin: 0 0 ${theme.spacings.giga};

  &:before {
    content: '_';
    color: ${theme.colors.brandPrimary.normal};
  }
`);

export const CardSubtitle = styled('div')(({ theme }) => css`
  font-size: ${theme.typography.subHeadings.giga};
`);

export const CardQuote = styled('div')(({ theme }) => css`
`);

export const CardText = styled('div')(({ theme }) => css`
  font-size: ${theme.typography.text.giga.fontSize};
  font-family: ${theme.fontStack.default};
  

`);

export const CardImage = styled('img')(({ theme }) => css`
  width: 350px;
`);
