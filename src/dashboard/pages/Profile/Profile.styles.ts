import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const PageGrid = styled('div')(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 450px 450px;
    grid-gap: 32px;
  `,
)
