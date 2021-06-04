import styled from 'shared/styles/styled'
import { css } from '@emotion/react'
import Container from 'shared/components/Container'

export const HeaderStyled = styled('div')(
  ({ theme }) => css`
    position: relative;
    height: 80%;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${theme.colors.white};

    @media (min-width: ${theme.breakpoints.mega}px) {
      padding: 0;
      height: 600px;
    }

    @media (min-width: ${theme.breakpoints.tera}px) {
      margin-bottom: 0;
      height: 80%;
    }
  `,
)
export const HeaderBackground = styled('div')(
  ({ theme }) => css`
    width: 100%;
    // height: 360px;
    padding: calc(${theme.spacings.zetta} * 2) 0;
    position: relative;
    top: 0;
    margin: auto 0;
    background-color: ${theme.colors.black};

    &:before {
      content: '';
      height: 24px;
      background-color: black;
      width: 100%;
      position: absolute;
      display: block;
      border-top: 8px solid ${theme.colors.white};
      border-bottom: 8px solid ${theme.colors.brandPrimary.normal};
      top: 8px;
    }

    &:after {
      content: '';
      height: 24px;
      background-color: black;
      width: 100%;
      position: absolute;
      display: block;
      border-bottom: 8px solid ${theme.colors.white};
      border-top: 8px solid ${theme.colors.brandSecondary.normal};
      // top: 302px;
      bottom: 8px;
    }
  `,
)

export const HeaderContent = styled('div')(
  ({ theme }) => css`
    flex-direction: column;
    display: inline-flex;
    z-index: 1;
    width: 100%;
    text-align: left;

    @media (min-width: ${theme.breakpoints.mega}px) {
      width: 50%;
    }
  `,
)

export const SubtitleWrapper = styled('div')(
  ({ theme }) => css`
    margin-top: ${theme.spacings.kilo};

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
    height: 80%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (min-width: ${theme.breakpoints.mega}px) {
      height: 100%;
      flex-direction: row;
    }
  `,
)
