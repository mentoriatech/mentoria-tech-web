import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const Card = styled('div')(({ theme, direction }) => css`
  padding: ${theme.spacings.mega};
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, .1);
  display: flex;
  flex-direction: ${direction || 'row'};
  width: 100%;
`);
