import styled from 'shared/styles/styled'
import { css } from '@emotion/react'

export const Container = styled('div')(
  ({ theme }) => css`
    margin: 0 auto;
    width: 90%;

    @media (min-width: ${theme.breakpoints.kilo}px) {
      width: 70%;
    }

    @media (min-width: ${theme.breakpoints.mega}px) {
      width: 1024px;
    }
  `,
)
