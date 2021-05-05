import styled from 'shared/styles/styled'
import { css } from '@emotion/react'
import ProfileIcon from 'svg/profile.svg'
import MentoredIcon from 'svg/mentored.svg'
import JourneyIcon from 'svg/journey.svg'
import GuideIcon from 'svg/guide.svg'
import HeartIcon from 'svg/heart.svg'

export const SidebarStyled = styled('div')(
  ({ theme }) => css`
    display: flex;
    left: -120px;
    position: absolute;
    overflow: hidden;
    padding: ${theme.spacings.mega} ${theme.spacings.giga};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: calc(100% - 90px);
    top: 0;
    bottom: 0;
    margin: auto 0 auto 0;
    background: rgb(245, 0, 87, 1);
    background: linear-gradient(
      45deg,
      rgba(245, 0, 87, 1) 0%,
      rgba(65, 33, 194, 1) 100%
    );
    z-index: 2;
    border-radius: 15px;

    &:after {
      content: '';
      position: absolute;
      background-image: url('/images/gradient-bottom.svg');
      background-repeat: no-repeat;
      width: 110%;
      height: 160px;
      z-index: 1;
      left: -5px;
      bottom: 0;
    }

    @media (min-height: 1000px) {
      height: calc(100% - 150px);
    }

    @media (min-width: ${theme.breakpoints.giga}px) {
      align-items: unset;
      flex-direction: column;
      justify-content: unset;
      width: 270px;

      & > div:first-of-type {
        margin: 0 0 ${theme.spacings.tera};
      }
    }

    @media (max-height: 900px) {
      height: calc(100% - 30px);
    }
  `,
)
