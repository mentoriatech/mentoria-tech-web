import { css } from '@emotion/react';
import styled from 'shared/styles/styled'

export const Background = styled('div')(({ theme }) => css`
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(61,5,123);
  background: linear-gradient(90deg, rgb(64, 5, 123) 0%, rgb(60, 2, 89) 100%);
  width: 100%;
  height: 100%;
  z-index: -1;
`);

export const Wave = styled('div')(({ theme }) => css`
  display: none;
  position: absolute;
  width: 100%;
  top: 500px;
  height: 40px;
    
  @media (min-width: ${theme.breakpoints.mega}px) {
    display: block;
    top: 599px;
  }
  
  @media (min-width: ${theme.breakpoints.tera}px) and (min-height: 505px) {
    top: 610px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 100%;
    height: 300px;
    background: rgb(61,5,123);
    background: linear-gradient(90deg, rgb(64, 5, 123) 19%, rgb(60, 2, 89) 140%);
    left: -25%;
    top: -240px;
  }
`);

export const Girl = styled('img')(({ theme }) => css`
position: absolute;
z-index: 1;
display: none;

@media (min-width: ${theme.breakpoints.mega}px) {
  display: block;
  width: 150px;
  right: 350px;
  bottom: -90px;
}

@media (min-width: ${theme.breakpoints.giga}px) {
  width: 200px;
  display: block;
  right: 400px;
  bottom: -90px;
}

@media (min-width: ${theme.breakpoints.tera}px) {
  right: 550px;
}

@media (min-width: 1470px) {
  width: 250px;
  right: 600px;
}
`);

export const Path = styled('img')(({ theme }) => css`
  width: 110%;
  position: absolute;
  right: 0;
  bottom: -45px;
  
  @media (min-width: 375px) {
    bottom: -50px;
  }
  
  @media (min-width: ${theme.breakpoints.mega}px) {
    bottom: -97px;
    width: 500px;
  }

  @media (min-width: ${theme.breakpoints.giga}px) {
    width: 600px;
  }

  @media (min-width: ${theme.breakpoints.tera}px) {
    width: 800px;
    bottom: -103px;
  }

  @media (min-width: 1470px) {
    width: 920px;
  } 
`);
