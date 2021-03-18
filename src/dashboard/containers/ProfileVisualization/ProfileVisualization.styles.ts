import styled from 'shared/styles/styled'
import { css } from '@emotion/react'
import Card from 'dashboard/components/Card'
import ProfileIcon from 'svg/profile'
import MentoredIcon from 'svg/mentored'
import JourneyIcon from 'svg/journey'
import GuideIcon from 'svg/guide'
import HeartIcon from 'svg/heart'

export const UserDetails = styled('div')(({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid ${theme.colors.brandSupport.normal};
  text-align: center;
`);

export const UserName = styled('span')(({ theme }) => css`
  font-size: ${theme.typography.text.mega.fontSize};
  font-weight: ${theme.fontWeight.regular};
  font-family: ${theme.fontStack.default};
`);

export const Subtitle = styled('p')(({ theme }) => css`
  font-weight: ${theme.fontWeight.thin};
  font-style: italic;
  margin-top: ${theme.spacings.bit};
`);

export const Badge = styled('span')(({ theme }) => css`
  background-color: ${theme.colors.grey.light};
  border-radius: 4px;
  width: fit-content;
  padding: ${theme.spacings.bit} ${theme.spacings.byte};
  font-size: ${theme.typography.text.kilo.fontSize};
`);

export const Description = styled('p')(({ theme }) => css`
    width: 300px;
    font-size: ${theme.typography.text.mega.fontSize};
    display: flex;
    align-items: center;
    font-weight: ${theme.fontWeight.thin};
    position: relative;
    padding-left: ${theme.spacings.tera};

    &:before {
      content: '"';
      font-family: ${theme.fontStack.brand};
      font-size: ${theme.typography.headings.tera.fontSize};
      position: absolute;
      top: -8px;
      left: 0;
    }
`);

export const CustomCard = styled(Card)(({ theme }) => css`
    width: 80%;
    padding: 0;
    flex-direction: column;
    padding: 0 ${theme.spacings.mega} ${theme.spacings.mega};
`);


