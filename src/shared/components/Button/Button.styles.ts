import styled from 'shared/styles/styled';
import { css } from '@emotion/react';

export const PrimaryButton = styled('button')(({ theme, test }) => css`
  background-color: ${theme.colors.brandPrimary.normal};
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.tera};
  padding: ${theme.spacings.kilo} ${theme.spacings.giga};
  border: none;
  font-size: ${theme.typography.text.giga.fontSize};
  font-family: ${theme.fontStack.brand};
  font-weight: ${theme.fontWeight.bold};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.brandPrimary.dark};
  }

  &:focus {
    outline: 0;
  }
`);
