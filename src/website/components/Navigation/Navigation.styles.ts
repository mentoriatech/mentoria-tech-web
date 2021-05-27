import styled from 'shared/styles/styled'
import { css } from '@emotion/react'

export const List = styled('ul')(
  ({ theme }) => css`
    margin: 0;
    padding: 0;
    align-items: center;
    display: flex;
    width: 100%;
    margin-top: -45px;
    z-index: 2;

    @media (max-width: ${theme.breakpoints.giga}px) {
      flex-direction: column;
      height: 110%;
      position: fixed;
      right: -100%;
      transition: all 0.5s linear;
      background-color: ${theme.colors.white};
      box-shadow: -1px 0px 4px rgba(0, 0, 0, 0.1);
      width: 100%;
      padding: 84px 0 0;
    }

    @media ${theme.breakpoints.megaToGiga} {
      width: 300px;
    }

    @media (min-width: ${theme.breakpoints.giga}px) {
      display: flex;
      margin-top: -10px;
    }
  `,
)

export const ListItem = styled('li')(
  ({ theme }) => css`
    list-style-type: none;
    font-size: ${theme.typography.headings.mega.fontSize};
    text-align: left;
    width: 100%;

    @media (max-width: ${theme.breakpoints.giga}px) {
      display: flex;
      padding: 0 0 ${theme.spacings.giga} ${theme.spacings.mega};
    }

    @media (min-width: ${theme.breakpoints.giga}px) {
      font-size: ${theme.typography.headings.kilo.fontSize};
      margin-left: ${theme.spacings.giga};
    }
  `,
)

export const NavigationStyled = styled('div')(
  ({ theme }) => css`
    input {
      display: none;
    }

    input:checked + label ~ ul {
      right: 0;
      width: 90%;
    }

    input:checked + label {
      transform: rotate(45deg);
      width: 20px;

      &:before {
        background-color: transparent;
      }

      &:after {
        transform: rotate(-90deg);
        width: 20px;
        top: 0;
      }
    }

    label {
      height: 2px;
      width: 25px;
      background-color: ${theme.colors.black};
      display: block;
      position: relative;
      transition: all 0.2s linear;
      margin-bottom: 5px;
      z-index: 3;

      &:after {
        content: '';
        height: 2px;
        width: 25px;
        background-color: ${theme.colors.black};
        display: block;
        position: absolute;
        bottom: -5px;
        transition: all 0.2s linear;
      }

      &:before {
        content: '';
        height: 2px;
        width: 25px;
        background-color: ${theme.colors.black};
        display: block;
        position: absolute;
        top: -5px;
        transition: all 0.2s linear;
      }

      @media (min-width: ${theme.breakpoints.giga}px) {
        display: none;
      }
    }
  `,
)

export const LinkStyled = styled('a')(
  ({ theme, background }) => css`
    text-decoration: none;
    color: ${theme.colors.black};
    cursor: pointer;
    display: flex;
    align-items: center;

    ${background &&
    `
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
      padding: ${theme.spacings.bit} ${theme.spacings.mega};
      border-radius: 20px;;
    `}

    img,
    div {
      margin-right: ${theme.spacings.byte};
    }

    &:hover {
      color: ${theme.colors.brandPrimary};
      text-decoration: underline;
    }
  `,
)
