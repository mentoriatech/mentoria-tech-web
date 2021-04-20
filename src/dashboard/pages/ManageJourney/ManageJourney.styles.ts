import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import { PrimaryButton } from 'shared/components/Button'

export const CustomButton = styled(PrimaryButton)(({ theme }) => css`
  margin-top: ${theme.spacings.mega};
`);

export const IconWrapper = styled('div')(({ theme }) => css`
  width: 300px;
  margin-bottom: ${theme.spacings.giga};
`);
