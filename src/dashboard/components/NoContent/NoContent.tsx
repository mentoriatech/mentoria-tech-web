import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

export const NoContent = styled('div')(({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 5% 20%;
  color: ${theme.colors.grey.dark};
  text-align: center;
`);
