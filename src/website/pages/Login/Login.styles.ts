import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const LoginWrapper = styled('div')(
  ({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.giga};

    @media (min-width: ${theme.breakpoints.mega}px) {
      width: 300px;
    }
  `,
)
