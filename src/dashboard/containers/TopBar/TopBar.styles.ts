import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import SignOutIcon from 'svg/exit'

export const CustomSignOutIcon = styled(SignOutIcon)(({ theme }) => css`
  fill: ${theme.colors.grey.normal};
  cursor: pointer;
`);

export const CustomTopBar = styled('div')(({ theme }) => css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.brandSupport.normal};
  padding-bottom: ${theme.spacings.mega};
  margin-bottom: ${theme.spacings.mega};
`);

export const Title = styled('div')(({ theme, icon }) => css`
  color: ${theme.colors.text};
  font-size: ${theme.typography.headings.mega.fontSize};
  margin: 0 0 ${theme.spacings.bit};
  font-family: ${theme.fontStack.brand};
  display: flex;

  svg {
    margin-top: 2px;
    margin-right: ${theme.spacings.kilo};
    width: 20px;
    height: 20px;
    fill: ${theme.colors.brandPrimary.normal};
  }
`);
