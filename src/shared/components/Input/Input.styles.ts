import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import Button from 'shared/components/Button'

export const InputWrapper = styled('div')(({ theme }) => css`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`);

export const InputStyled = styled('input')(({ theme }) => css`
  font-family: ${theme.fontStack.brand}; 
  background-color: ${theme.colors.grey.normal};
  padding: ${theme.spacings.mega};
  border: none;
  border-radius: 30px;
  font-size: ${theme.typography.text.mega.fontSize};
  outline: 0;
  width: 70%;

  &::placeholder {
    color: ${theme.colors.black};
  }
`);

export const InputButton = styled(Button)(({ theme }) => css`
  margin-left: -40px;
`);
