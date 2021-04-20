import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const ModalBackground = styled('div')(({ theme }) => css`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 10;
`);

