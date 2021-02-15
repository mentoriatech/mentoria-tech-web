import styled from 'shared/styles/styled';
import { css } from '@emotion/react';
import { SectionTitle } from 'shared/components/Typography';

export const SectionStyled = styled('div')(({ theme, direction }) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: ${theme.spacings.mega};
`);

export const SectionTitleStyled = styled(SectionTitle)(({ theme, spaceBottom }) => css`
  font-size: ${theme.typography.headings.tera.fontSize };
  font-family: ${theme.fontStack.brand};
  text-align: center;
  margin-bottom: ${spaceBottom ? theme.spacings.zetta : 0};

  &:before {
    content: '_';
    color: ${theme.colors.brandPrimary.normal};
  }
`);

export const SectionDescription = styled('p')(({ theme }) => css`
  text-align: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${theme.spacings.zetta};
  font-size: ${theme.typography.headings.mega.fontSize};

`);

export const SectionContentWrapper = styled('div')(({ theme, direction }) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: center;
`);

export const SectionLinkWrapper = styled('div')(({ theme }) => css`
  width: 100%;
  text-align: center;
  margin-bottom: ${theme.spacings.zetta};
`);

export const SectionLinkStyled = styled('a')(({ theme }) => css`
  text-align: center;
  font-size: ${theme.typography.headings.mega.fontSize};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:before {
    content: '{';
    margin-right: ${theme.spacings.mega};
    color: ${theme.colors.brandPrimary.normal};
  }

  &:after {
    content: '}';
    margin-left: ${theme.spacings.mega};
    color: ${theme.colors.brandPrimary.normal};
  }
`);

