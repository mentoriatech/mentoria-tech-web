import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const Wrapper = styled('div')(({ theme }) => css`
  position: relative;
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${theme.spacings.byte};

  @media (min-width: ${theme.breakpoints.tera}px) {
    width: 70%;
  }

  @media (min-width: ${theme.breakpoints.tera}px) and (max-height: 900px) {
    width: 85%;
    margin-left: 100px;
  }


`);

