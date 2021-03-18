import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const BreadcrumbStyled = styled('div')(({ theme }) => css`
  & ol {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.text};

    &:hover {
      text-decoration: underline;
    }
  }

  li {
    list-style-type: none;
    font-family: ${theme.fontStack.default};
    font-size: ${theme.typography.subHeadings.kilo.fontSize};
    letter-spacing: 1px;

    &:not(:first-of-type) {
      margin-left: ${theme.spacings.byte};
    }

    &:after {
      content: '>';
      margin-left: ${theme.spacings.byte};
      color: ${theme.colors.text};
    }

    &:last-child:after
    {
      content: '';
    }
  }
`);

