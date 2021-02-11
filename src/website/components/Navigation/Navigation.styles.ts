import styled from 'shared/styles/styled';
import { css } from '@emotion/react';

export const List = styled('ul')(() => css`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
`);

export const Item = styled('li')(({ theme }) => css`
  list-style-type: none;
  margin-right: ${theme.spacings.zetta};
`);

export const LinkStyled = styled('a')(({ theme }) => css`
  text-decoration: none;
  color: ${theme.colors.white};
  cursor: pointer;
  
  img, div {
    margin-right: ${theme.spacings.byte};
  }

  &:hover {
    color: ${theme.colors.brandPrimary};
  }
`);
