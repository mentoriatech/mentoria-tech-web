import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import Container from 'shared/components/Container'

export const ChatWrapper = styled('div')(({ theme }) => css`
  width: 100%;
  background-color: ${theme.colors.grey.light};
  padding: calc(${theme.spacings.zetta} * 2);
`);

export const ContainerStyled = styled('div')(({ theme }) => css`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`)

export const ChatColumn = styled('div')(({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
`);

export const ChatIcon = styled('img')(({ theme }) => css`
  width: 250px;
`);

export const ChatImage = styled('img')(({ theme }) => css`
  width: 500px;
`);

export const ChatLabel = styled('p')(({ theme }) => css`
  font-size: ${theme.typography.headings.mega.fontSize};
  text-align: center;
`);

