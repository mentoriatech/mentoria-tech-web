import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import Container from 'shared/components/Container'

export const LoginWrapper = styled('div')(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    margin-top: ${theme.spacings.giga};

    @media (min-width: ${theme.breakpoints.mega}px) {
      width: 300px;
    }
  `,
)

export const PageWrapper = styled(Container)(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    @media (min-width: ${theme.breakpoints.mega}px) {
      flex-direction: row;
    }
  `,
)
