import styled from 'shared/styles/styled';
import { css } from '@emotion/react';

export const TitleStyled = styled('h1')(({ theme, color }) => css`
  font-size: ${theme.typography.headings.giga.fontSize};
  color: ${color ? theme.colors[color] : 'inherit'};
  font-weight: 300;
  strong {
    color: #f61067;
  }

  @media screen and (min-width: ${theme.breakpoints.mega}px) {
    font-size: ${theme.typography.headings.zetta.fontSize};
  }  
`);

export const SubstitleStyled = styled('p')(({ theme, color }) => css`
  font-size: ${theme.typography.text.mega.fontSize};
  font-weight: ${theme.fontWeight.regular};
  color: ${color ? theme.colors[color] : 'inherit'};
`);

export const SectionTitleStyled = styled('h3')(({ theme, color }) => css`
  font-size: ${theme.typography.headings.mega.fontSize};
  font-weight: ${theme.fontWeight.regular};

  strong {
    color: ${theme.colors.brandPrimary.normal};
  }
`);
