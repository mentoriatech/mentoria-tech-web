import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const TopicsStyled = styled('ul')(() => css`
  display: flex;
  flex-direction: column;
  margin-top: 0;
`)

export const Topic = styled('ul')(({ theme }) => css`
  list-style-type: none;
  font-size: ${theme.typography.headings.kilo.fontSize};
  margin-bottom: ${theme.spacings.mega};

  &:before {
    content: '_';
    color: ${theme.colors.brandPrimary.normal};
  }
`)
