import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import ErrorIcon from 'svg/error.svg'
import SuccessfulIcon from 'svg/check.svg'
import Card from 'dashboard/components/Card'

export const CustomCard = styled(Card)(
  ({ theme }) => css`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${theme.spacings.giga};
  `,
)

export const CustomErrorIcon = styled(ErrorIcon)(
  ({ theme }) => css`
    fill: ${theme.colors.status.error};
    width: 150px;
    margin-bottom: ${theme.spacings.giga};
  `,
)

export const CustomSuccessfulIcon = styled(SuccessfulIcon)(
  ({ theme }) => css`
    fill: ${theme.colors.status.success};
    width: 150px;
    margin-bottom: ${theme.spacings.giga};
  `,
)

export const ResultTitle = styled('div')(
  ({ theme }) => css`
    margin-bottom: ${theme.spacings.kilo};
    font-size: ${theme.typography.headings.mega.fontSize};
  `,
)

export const ResultMessages = styled('div')(
  ({ theme }) => css`
    margin-bottom: ${theme.spacings.giga};
  `,
)
