import styled from 'shared/styles/styled';
import { css } from '@emotion/react';

export const ContainerStyled = styled('div')(({ theme }) => css`
margin: 0 auto;
width: 90%;

@media screen and (min-width: ${theme.breakpoints.mega}px) {
  width: 85%;
}
`);

