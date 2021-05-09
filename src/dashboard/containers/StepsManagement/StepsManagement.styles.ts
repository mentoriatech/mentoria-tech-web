import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import Card from 'dashboard/components/Card'
import Anchor from 'svg/anchor.svg'

export const CustomStepsManagement = styled('div')(
  ({ theme }) => css`
    fill: ${theme.colors.grey.normal};
    cursor: pointer;
    width: 100%;
  `,
)

export const ColumnTitle = styled('div')(
  ({ theme }) => css`
    font-size: ${theme.typography.text.kilo.fontSize};
    color: ${theme.colors.grey.dark};
    font-family: ${theme.fontStack.default};
    margin-bottom: ${theme.spacings.mega};
    text-transform: uppercase;
  `,
)

export const CustomCard = styled(Card)(
  ({ theme }) => css`
    margin-bottom: ${theme.spacings.mega};
    width: 100%;
    padding: ${theme.spacings.kilo};
    align-items: center;
    justify-content: space-between;
  `,
)

export const CustomAnchor = styled(Anchor)(
  ({ theme }) => css`
    width: 14px;
    height: 14px;
    fill: ${theme.colors.text};
    margin-left: ${theme.spacings.byte};
  `,
)
