import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import Container from 'shared/components/Container'

export const LoginWrapper = styled('div')(
  ({ theme }) => css`
    width: 50%;
    height: 100%;
    margin-top: ${theme.spacings.giga};

    @media (min-width: ${theme.breakpoints.mega}px) {
      width: 300px;
    }
  `,
)

export const PageWrapper = styled(Container)(
  () => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
)
