import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const CardsWrapper = styled('div')(
  () => css`
    overflow: hidden;
    width: 100%;
  `,
)

export const CardsCarrousel = styled('div')(
  ({ theme, size }) => css`
    width: calc(100% * ${size});
    display: flex;

    @media (min-width: ${theme.breakpoints.tera}px) {
      width: 100%;
      flex-direction: column;
    }
  `,
)

export const CardStyled = styled('div')(
  ({ theme, direction }) => css`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${theme.breakpoints.mega}px) {
      margin: 0 0 ${theme.spacings.kilo};
      padding: 0 0 ${theme.spacings.zetta};
      flex-direction: ${direction};
      border: none;
    }

    @media (min-width: ${theme.breakpoints.tera}px) {
      margin: 0 0 ${theme.spacings.zetta};
    }
  `,
)

export const CardContent = styled('div')(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 ${theme.spacings.mega};
    align-items: center;

    &:after {
      content: '';
      display: block;
      height: 70px;
      width: 4px;
      margin-top: ${theme.spacings.mega};
      border-right: 4px dotted ${theme.colors.brandPrimary.normal};
    }

    @media (min-width: ${theme.breakpoints.mega}px) {
      border-bottom: 8px dotted ${theme.colors.black};
      padding: 0 0 ${theme.spacings.zetta};
      align-items: start;
      max-width: 300px;
      order: 2;

      &:after {
        display: none;
      }
    }

    @media (min-width: ${theme.breakpoints.giga}px) {
      max-width: 500px;
    }
  `,
)

export const CardTitle = styled('h3')(
  ({ theme }) => css`
    width: 100%;
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.typography.headings.kilo.fontSize};
    margin: 0 0 ${theme.spacings.kilo};
    text-align: left;

    &:before {
      content: '_';
      color: ${theme.colors.brandPrimary.normal};
    }

    @media (min-width: ${theme.breakpoints.mega}px) {
      margin: 0 0 ${theme.spacings.giga};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.typography.headings.mega.fontSize};
      text-align: center;
    }
  `,
)

export const CardSubtitle = styled('div')(
  ({ theme }) => css`
    text-align: left;
    font-size: ${theme.typography.subHeadings.giga};

    @media (min-width: ${theme.breakpoints.mega}px) {
      text-align: center;
    }
  `,
)

export const CardText = styled('div')(
  ({ theme }) => css`
    font-size: ${theme.typography.text.mega.fontSize};
    font-family: ${theme.fontStack.default};
    text-align: left;

    @media (min-width: ${theme.breakpoints.mega}px) {
      text-align: center;
      font-size: ${theme.typography.text.giga.fontSize};
    }
  `,
)

export const CardImage = styled('img')(
  ({ theme, order }) => css`
    width: 200px;
    margin-bottom: ${theme.spacings.tera};

    @media (min-width: ${theme.breakpoints.kilo}px) {
      width: 250px;
    }

    @media (min-width: ${theme.breakpoints.mega}px) {
      order: ${order};
      margin-bottom: 0;
      width: 300px;
    }

    @media (min-width: ${theme.breakpoints.giga}px) {
      width: 350px;
    }
  `,
)
