import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

const bulletSize = '30px'

export const OnboardingContainer = styled('div')(
  ({ theme }) => css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${theme.spacings.mega} 0;
    flex-direction: column;
  `,
)

export const WizardNav = styled('div')(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: ${theme.spacings.giga};
  `,
)

export const WizardStep = styled('div')(
  ({ theme, totalSteps }) => css`
    width: ${bulletSize};
    height: ${bulletSize};
    border-radius: 50%;
    background-color: ${theme.colors.brandPrimary.normal};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    z-index: 1;

    &:first-of-type:before {
      content: '';
      width: calc(100% / ${totalSteps} - 1 - ${bulletSize}});
      height: 5px;
      display: block;
      background-color: ${theme.colors.grey.light};
      position: absolute;
      left: ${bulletSize};
      right: 0;
      z-index: -1;
    }
  `,
)
