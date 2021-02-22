import { css } from '@emotion/react'
import styled from 'shared/styles/styled';

import Container from 'shared/components/Container'

export const VideoSectionWrapper = styled('div')(({ theme }) => css`
`);

export const VideoContainer = styled(Container)(({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  
  @media (min-width: ${theme.breakpoints.mega}px) {
    justify-content: space-between;
    flex-direction: row;
  }
`);

export const Iframe = styled('iframe')(({ theme }) => css`
  width: 100%;
  height: 300px;

  @media (min-width:${theme.breakpoints.mega}px) {
    width: 100%;
    height: 600px;
  }
`);

export const VideoFrame = styled('div')(({ theme }) => css`
  width: 100%;
  background-image: url('/woman-small.jpg');
  background-size: cover;
  cursor: pointer;
  height: 300px;
  
  @media (min-width: ${theme.breakpoints.mega}px) {
    background-image: url('/woman-medium.jpg');
    height: 600px;
  }
  
  @media (min-width: ${theme.breakpoints.tera}px) {
    background-image: url('/woman-large.jpg');
  }
`);

export const VideoDisclaimer = styled('p')(({ theme }) => css`
  color: ${theme.colors.white};
  width: 100%;
  text-align: center;
  font-size: ${theme.typography.headings.kilo.fontSize};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

  &:before {
    content: '';
    background-image: url('/play.svg');
    background-repeat: no-repeat;
    background-size: 50px;
    width: 50px;
    height: 50px;
    display: block;
    margin: 0 auto ${theme.spacings.giga} auto;
    cursor: pointer;
  }

  @media (min-width: ${theme.breakpoints.mega}px) {
    width: 300px;
    font-size: ${theme.typography.headings.mega.fontSize};
    text-shadow: none;

    
    &:before {
      background-size: 120px;
      width: 120px;
      height: 120px;
    }
  }
`);

export const VideoDescription = styled('div')(({ theme }) => css`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  font-size: ${theme.typography.subHeadings.mega.fontSize};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  color: ${theme.colors.white};
  padding: 0;
  
  p {
    margin: 0;
  }
  
  @media (min-width: ${theme.breakpoints.mega}px) {
    font-size: ${theme.typography.headings.kilo.fontSize};
    padding-left: 15%;
    width: 400px;
    text-align: left;
  }
`);
