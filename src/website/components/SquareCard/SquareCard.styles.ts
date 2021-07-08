import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const Card = styled('div')(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
)

export const CardTitle = styled('div')(
  ({ theme, color, order }) => css`
    // order: ${order};
    display: flex;
    align-items: center;
    // justify-content: center;
    font-size: ${theme.typography.headings.giga.fontSize};
    color: ${theme.colors.black};

    &:before {
      content: '{';
      color: ${theme.colors.brandPrimary.normal};
      margin-right: ${theme.spacings.kilo};
      display: block;
    }

    &:after {
      content: ' }';
      color: ${theme.colors.brandPrimary.normal};
      margin-left: ${theme.spacings.kilo};
      display: block;
    }

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  `,
)

export const CardContent = styled('div')(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.giga};
  `,
)
