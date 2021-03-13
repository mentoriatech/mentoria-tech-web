import styled from 'shared/styles/styled';
import { css } from '@emotion/react';

export const List = styled('ul')(({ theme, direction }) => css`
  margin: 0;
  padding: 0;
  align-items: center;
  display: none;
  width: 100%;
  margin-top: -45px;
  z-index: 1;
  

  @media (max-width: ${theme.breakpoints.giga}px) {
    display: flex;
    flex-direction: column;
    height: 110%;
    position: fixed;
    right: -100%;
    transition: all .5s linear;
    background-color: ${theme.colors.brandSecondary.normal};
    width: 100%;
    padding: 84px 0 0;
  }

  @media ${theme.breakpoints.megaToGiga} {
    width: 300px; 
   }

   @media (min-width: ${theme.breakpoints.giga}px) {
    display: flex;
    flex-direction: ${direction || 'row'};
    margin-top: -10px;
   }

`);

export const ListItem = styled('li')(({ theme }) => css`
  list-style-type: none;
  font-size: ${theme.typography.headings.mega.fontSize};
  text-align: left;
  width: 100%;
  
  @media (max-width: ${theme.breakpoints.giga}px) {
    display: flex;
    padding: 0 0 ${theme.spacings.giga} ${theme.spacings.mega};
  }

  @media (min-width: ${theme.breakpoints.giga}px) {
    font-size: ${theme.typography.text.tera.fontSize};
    margin-bottom: ${theme.spacings.giga};
    
  }
`);

export const NavigationStyled = styled('div')(({ theme }) => css`
  input {
    display: none;
  }

  input:checked + label ~ ul {
    right: 0;
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
    background-color: ${theme.colors.white};
    display: block;
    position: relative;
    transition: all .2s linear;
    margin-bottom: 5px;
    z-index: 2;

    &:after {
      content: '';
      height: 2px;
      width: 25px;
      background-color: ${theme.colors.white};
      display: block;
      position: absolute;
      bottom: -5px;
      transition: all .2s linear;
    }
  
    &:before {
      content: '';
      height: 2px;
      width: 25px;
      background-color: ${theme.colors.white};
      display: block;
      position: absolute;
      top: -5px;
      transition: all .2s linear;

    }
  
    @media (min-width: ${theme.breakpoints.giga}px) {
      display: none;
    }
  }
`);

export const LinkStyled = styled('a')(({ theme, active }) => css`
  text-decoration: none;
  color: ${theme.colors.white};
  cursor: pointer;
  display: grid;
  align-items: center;
  grid-template-columns: 20px 70px;
  
  svg {
    margin-right: ${theme.spacings.bit};
    width: 14px;
    height: 14px;
  }
  
  ${active && `
    display: flex;
    width: fit-content;
    padding: 0 ${theme.spacings.giga} 0 0;
    background-color: rgba(255, 255, 255, .2);
    border-radius: 30px;


    div {
      border-radius: 100%;
      background-color: white;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: ${theme.spacings.kilo};
    }

    svg {
      margin: 0;
      fill: ${theme.colors.brandPrimary.normal};
    }
  `} 

  &:hover {
    color: ${theme.colors.brandPrimary};
  }
`);
