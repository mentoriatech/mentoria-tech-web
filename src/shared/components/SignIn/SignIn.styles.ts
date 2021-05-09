import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import { PrimaryButton } from 'shared/components/Button'

export const LoginButton = styled(PrimaryButton)(
  ({ theme }) => css`
    cursor: pointer;
    border: none;
    padding: ${theme.spacings.kilo};
    margin-bottom: ${theme.spacings.kilo};
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      max-width: 25px;
      margin-right: ${theme.spacings.byte};
    }
  `,
)

export const LoginWrapper = styled('div')(
  () => css`
    justify-content: center;
    display: flex;
    flex-direction: column;
  `,
)
