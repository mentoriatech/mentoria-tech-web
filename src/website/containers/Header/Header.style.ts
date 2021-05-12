import styled from 'shared/styles/styled'
import { css } from '@emotion/react'
import Container from 'shared/components/Container'

export const HeaderStyled = styled('div')(
  ({ theme }) => css`
    position: relative;
    height: 400px;
    width: 100%;
    margin-bottom: ${theme.spacings.zetta};

    @media (min-width: ${theme.breakpoints.mega}px) {
      margin-bottom: calc(${theme.spacings.zetta} * 3);
      height: 600px;
    }

    @media (min-width: ${theme.breakpoints.tera}px) {
      height: 100%;
    }
  `,
)

export const HeaderContent = styled('div')(
  ({ theme }) => css`
    flex-direction: column;
    display: inline-flex;
    z-index: 1;
    width: 100%;
    text-align: center;

    @media (min-width: ${theme.breakpoints.mega}px) {
      width: 50%;
      text-align: left;
    }
  `,
)

export const SubtitleWrapper = styled('div')(
  ({ theme }) => css`
    margin-top: ${theme.spacings.kilo};
    display: none;

    @media (min-width: ${theme.breakpoints.mega}px) {
      display: block;
      width: 80%;
    }
  `,
)

export const HeaderChildren = styled('div')(
  ({ theme }) => css`
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    @media (min-width: ${theme.breakpoints.mega}px) {
      width: 50%;
    }
  `,
)

export const HeaderContainer = styled(Container)(
  ({ theme }) => css`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: ${theme.breakpoints.mega}px) {
      height: 100vh;
      flex-direction: row;
    }
  `,
)
