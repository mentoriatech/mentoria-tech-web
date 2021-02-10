import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ContainerStyled = styled('div')(() => css`
margin: 0 auto;
width: 95%;

@media screen and (min-width: 768px) {
  width: 1235px;
  }
`);

