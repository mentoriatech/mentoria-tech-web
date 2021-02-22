import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import Container from 'shared/components/Container'

export const ContainerStyled = styled(Container)(({ theme }) => css`
  display: flex;
  flex-direction: column;

  & > div {
    flex-basis: 80%;
  }

  @media (min-width: ${theme.breakpoints.mega}px) {
    flex-direction: row;

    &:first-of-type {
      width: 40%;
    }

  }
`)
