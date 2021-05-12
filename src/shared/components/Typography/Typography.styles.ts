import styled from 'shared/styles/styled'
import { css } from '@emotion/react'

export const TitleStyled = styled('h1')(
  ({ theme }) => css`
    display: inline-block;
    margin: 0;
    font-size: ${theme.typography.headings.giga.fontSize};
    font-weight: 300;

    &:after {
      content: '_';
      color: ${theme.colors.brandPrimary.normal};
    }

    strong {
      color: #f61067;
    }

    @media screen and (min-width: ${theme.breakpoints.mega}px) {
      font-size: ${theme.typography.headings.zetta.fontSize};
    }
  `,
)

export const SubtitleStyled = styled('p')(
  ({ theme }) => css`
    font-size: ${theme.typography.text.mega.fontSize};
    font-weight: ${theme.fontWeight.regular};
    display: inline-block;
  `,
)

export const SectionTitleStyled = styled('h3')(
  ({ theme }) => css`
    font-size: ${theme.typography.headings.mega.fontSize};
    font-weight: ${theme.fontWeight.regular};

    strong {
      color: ${theme.colors.brandPrimary.normal};
    }
  `,
)

export const CustomLink = styled('a')(
  ({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.brandPrimary.dark};

    &:hover {
      text-decoration: underline;
    }
  `,
)
