import styled from 'shared/styles/styled'
import Container from 'shared/components/Container'
import { css } from '@emotion/react'

export const ContainerStyled = styled(Container)(
  ({ theme }) => css`
    display: flex;
    padding: 16px 0;
    width: 90%;
    justify-content: space-between;
    align-items: center;

    @media (min-width: ${theme.breakpoints.mega}) {
      width: 1024px;
    }
  `,
)

export const TopBarStyled = styled('div')(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
  `,
)
