import styled from 'shared/styles/styled';
import { css } from '@emotion/react';

export const TitleStyled = styled('h1')(({ theme }) => css`
  font-size: ${theme.typography.headings.zetta.fontSize};

  strong {
    color: #f61067;
  }
`);

export const SubstitleStyled = styled('p')(({ theme }) => css`
  font-size: 24px;
  font-weight: ${theme.fontWeight.regular}

  strong {
    color: #f61067;
  }

`);
