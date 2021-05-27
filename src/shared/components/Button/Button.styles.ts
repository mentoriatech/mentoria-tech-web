import styled from 'shared/styles/styled'
import { css } from '@emotion/react'

const variants = (theme) => ({
  primary: `
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.brandPrimary.normal};
    }
  `,
  secondary: `
    background-color: ${theme.colors.grey.normal};
    color: ${theme.colors.brandSecondary.dark};

    &:hover {
      background-color: ${theme.colors.grey.light};
    }
  `,
  tertiary: `
    background-color: ${theme.colors.brandSecondary.normal};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.brandSecondary.dark};
    }
  `,
})

const sizes = (theme) => ({
  small: `
    padding: ${theme.spacings.bit} ${theme.spacings.kilo};
    font-size: ${theme.typography.text.kilo.fontSize};
    border-radius: calc(${theme.borderRadius.giga} + 3px);

  `,
  normal: `
    padding: ${theme.spacings.bit} ${theme.spacings.giga};
    font-size: ${theme.typography.text.giga.fontSize};
    font-weight: ${theme.fontWeight.bold};
    border-radius: ${theme.borderRadius.tera};
    
    `,
  big: `
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.typography.text.giga.fontSize};
    border-radius: ${theme.borderRadius.tera};
    padding: ${theme.spacings.mega} ${theme.spacings.giga};
  `,
})

export const PrimaryButton = styled('button')(
  ({ theme, variant, size, icon }) => css`
    ${variants(theme)[variant]}
    ${sizes(theme)[size]}
    height: fit-content;
    border: none;
    font-family: ${theme.fontStack.default};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.17s linear;

    ${icon &&
    `&:before {
    content: '';
    background-image: url(${icon});
    background-size: contain;
    display: block;
    width: 10px;
    height: 10px;
    margin-right: ${theme.spacings.bit};
  }`}

    &:focus {
      outline: 0;
    }

    &:disabled {
      background-color: ${theme.colors.grey.light};
    }
  `,
)
