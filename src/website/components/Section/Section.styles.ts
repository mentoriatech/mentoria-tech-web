import styled from 'shared/styles/styled'
import { css } from '@emotion/react'
import { SectionTitle } from 'shared/components/Typography'

export const SectionStyled = styled('div')(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: ${theme.spacings.mega} 0 ${theme.spacings.zetta};
  `,
)

export const SectionTitleStyled = styled(SectionTitle)(
  ({ theme, spaceBottom }) => css`
    font-family: ${theme.fontStack.brand};
    font-size: ${theme.typography.headings.mega.fontSize};
    margin-bottom: ${spaceBottom ? theme.spacings.giga : 0};
    text-align: center;

    &:before {
      content: '_';
      color: ${theme.colors.brandPrimary.normal};
    }

    @media (min-width: ${theme.breakpoints.tera}px) {
      text-align: center;
      font-size: ${theme.typography.headings.giga.fontSize};
    }
  `,
)

export const SectionDescription = styled('p')(
  ({ theme }) => css`
    text-align: left;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${theme.spacings.zetta};
    font-size: ${theme.typography.headings.kilo.fontSize};

    @media (min-width: ${theme.breakpoints.mega}px) {
      text-align: center;
      font-size: ${theme.typography.headings.mega.fontSize};
    }
  `,
)

export const SectionContentWrapper = styled('div')(
  ({ direction }) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: space-between;
  `,
)

export const SectionLinkWrapper = styled('div')(
  ({ theme }) => css`
    width: 100%;
    text-align: center;
    margin-bottom: ${theme.spacings.zetta};
  `,
)

export const SectionLinkStyled = styled('a')(
  ({ theme }) => css`
    text-align: center;
    font-size: ${theme.typography.headings.kilo.fontSize};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    &:before {
      content: '{';
      margin-right: ${theme.spacings.mega};
      color: ${theme.colors.brandPrimary.normal};
    }

    &:after {
      content: '}';
      margin-left: ${theme.spacings.mega};
      color: ${theme.colors.brandPrimary.normal};
    }

    @media (min-width: ${theme.breakpoints.mega}px) {
      font-size: ${theme.typography.headings.mega.fontSize};
    }
  `,
)
