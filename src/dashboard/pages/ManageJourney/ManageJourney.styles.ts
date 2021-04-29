import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import { PrimaryButton } from 'shared/components/Button'

export const CustomButton = styled(PrimaryButton)(({ theme }) => css`
  margin-top: ${theme.spacings.mega};
`);

export const StepsWrapper = styled('div')(({ theme }) => css`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 32px;
  justify-items: center;
`);

export const IconWrapper = styled('div')(({ theme }) => css`
  width: 300px;
  margin-bottom: ${theme.spacings.giga};
`);
