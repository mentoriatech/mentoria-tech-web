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
  border-bottom: 2px solid ${theme.colors.brandSupport.normal};
  padding-bottom: ${theme.spacings.mega};
  margin-bottom: ${theme.spacings.mega};
`);

export const Title = styled('div')(({ theme, icon }) => css`
  color: ${theme.colors.brandSecondary.normal};
  font-size: ${theme.typography.headings.giga.fontSize};
  margin: 0 0 ${theme.spacings.bit};
  font-family: ${theme.fontStack.brand};
  display: flex;
  align-items: center;

  svg {
    margin-right: ${theme.spacings.kilo};
    width: 25px;
    height: 25px;
    fill: ${theme.colors.brandSupport.normal};
  }
`);
