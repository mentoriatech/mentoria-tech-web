import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const MainWrapper = styled('div')(({ theme, direction }) => css`
  background-color: ${theme.colors.grey.light};
  width: 100%;
  height: 100%;
  padding: ${theme.spacings.giga} 0;
  display: flex;
  justify-content: center;
`);
