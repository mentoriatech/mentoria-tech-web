import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import Container from 'shared/components/Container'

export const FooterContainer = styled(Container)(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    padding: ${theme.spacings.mega} 0;

    @media (min-width: ${theme.breakpoints.mega}px) {
      align-items: center;
      flex-direction: row;
    }
  `,
)

export const FooterContent = styled('footer')(
  ({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.black};
    padding: ${theme.spacings.mega} 0;

    @media (min-width: ${theme.breakpoints.mega}px) {
      padding: ${theme.spacings.exa} 0;
    }
  `,
)

export const FooterBottom = styled('div')(
  ({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.grey.dark};
    padding: ${theme.spacings.byte};
  `,
)

export const FooterDescription = styled('div')(
  ({ theme }) => css`
    color: ${theme.colors.black};
    width: 50%;

    @media (min-width: ${theme.breakpoints.mega}px) {
      width: unset;
      margin-right: ${theme.spacings.tera};
    }
  `,
)

export const FooterText = styled('p')(
  ({ theme }) => css`
    font-size: ${theme.typography.text.kilo.fontSize};
    color: #858496;
    margin: 0;
  `,
)

export const FooterNavigation = styled('ul')(
  ({ theme, changeDirection }) => css`
  padding: 0;
  font-size: ${theme.typography.text.kilo.fontSize};
  display: flex;
  flex-direction: ${changeDirection ? 'column' : 'row'};
  margin: 0 0 0 ${theme.spacings.kilo};
  
  @media (min-width: ${theme.breakpoints.mega}px) {
    margin: ${theme.spacings.byte} 0 0;
  }

  &:last-child {
    width: 100%;
    flex-basis: 100%;

    @media (min-width: ${theme.breakpoints.mega}px) {
      width: unset;
      flex-basis: unset;
    }
  }

  &:not(:last-child) {
    flex: 1;
    width: 50%;

    @media (min-width: ${theme.breakpoints.mega}px) {
      flex: unset;
      width: unset;
      flex-direction: row;
    }
  }

  li {
    list-style-type: none;
    cursor: pointer;
    margin: 0 0 ${theme.spacings.byte} 0;

    img {
      width: 25px;
    }
  }

  li:not(:last-child) {
    @media (min-width: ${theme.breakpoints.mega}px) {
      margin: 0 ${theme.spacings.giga} 0 0;
    }
  }

  li:not(:first-child) {
    a {
      margin: 0;
    }
    
    img {
      margin-left: ${theme.spacings.mega};
    }
  })
`,
)

export const FooterLink = styled('a')(
  ({ theme }) => css`
    color: #c2c1ca;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `,
)
