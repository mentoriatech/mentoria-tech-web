import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import Container from 'shared/components/Container'

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

export const FooterContent = styled('footer')(({ theme }) => css`
  width: 100%;
  background-color: ${theme.colors.background.normal};
  padding: ${theme.spacings.exa} 0;
`)

export const FooterBottom = styled('div')(({ theme }) => css`
  width: 100%;
  background-color: ${theme.colors.background.light};
`);

export const FooterDescription = styled('div')(({ theme }) => css`
  width: 100%;
  color: ${theme.colors.white};
`);

export const FooterText = styled('p')(({ theme }) => css`
  font-size: ${theme.typography.text.kilo.fontSize};
  color: #858496;
  margin: 0;
`);

export const FooterNavigation = styled('ul')(({ theme }) => css`
  padding: 0;
  margin: 0;
  display: flex;

  li {
    list-style-type: none;
    margin-left: ${theme.spacings.mega};
  }
`);
