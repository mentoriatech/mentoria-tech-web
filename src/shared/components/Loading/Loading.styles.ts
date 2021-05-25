import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const Spinner = styled('div')(
  ({ theme }) => css`
    display: inline-block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    background: #fed;
    animation: loading 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    @keyframes loading {
      0%,
      100% {
        animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
      }
      0% {
        transform: rotateY(0deg);
      }
      50% {
        transform: rotateY(1800deg);
        animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
      }
      100% {
        transform: rotateY(3600deg);
      }
    }
  `,
)

export const Wrapper = styled('div')(
  ({ theme }) => css`
    display: inline-block;
    transform: translateZ(1px);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `,
)

export const Label = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.fontStack.brand};
    color: ${theme.colors.brandSecondary.normal};
    text-decoration: blink;
    -webkit-animation-name: blinker;
    -webkit-animation-duration: 0.6s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-direction: alternate;

    @-webkit-keyframes blinker {
      from {
        opacity: 1;
      }
      to {
        opacity: 0.3;
      }
    }
  `,
)
