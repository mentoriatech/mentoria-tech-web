import styled from 'shared/styles/styled'
import { css } from '@emotion/react'
import Card from 'dashboard/components/Card'

export const SidebarStyled = styled(Card)(
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
    z-index: 2;
    border-radius: 15px;
    background-color: #272727;
    // background: linear-gradient(168.71deg, #595959 -2.03%, #000000 92.2%);
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.09);
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
