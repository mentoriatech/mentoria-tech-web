import { css } from '@emotion/react'
import styled from 'shared/styles/styled'

const bulletSize = '30px'

export const OnboardingContainer = styled('div')(
  ({ theme }) => css`
    height: 100%;
    display: flex;
    // justify-content: center;
    align-items: center;
    margin: calc(${theme.spacings.zetta} * 2) 0;
    flex-direction: column;
    width: 100%;
  `,
)

export const WizardNav = styled('div')(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: ${theme.spacings.giga};
    width: 600px;
    left: 0;
    right: 0;
    margin: 0 auto;
  `,
)

export const WizardStep = styled('div')(
  ({ theme, totalSteps, active, disabled }) => css`
    cursor: pointer;
    width: ${bulletSize};
    height: ${bulletSize};
    border-radius: 50%;
    background-color: ${theme.colors.black};
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
      background-color: ${theme.colors.black};
      position: absolute;
      left: ${bulletSize};
      right: 0;
      z-index: -1;
    }

    ${active ? `background-color: ${theme.colors.brandPrimary.normal};` : ''}
    ${disabled
      ? `background-color: ${theme.colors.white};
      border: 3px solid ${theme.colors.black};
      color: ${theme.colors.black};
      `
      : ''}
  `,
)

export const StepTitle = styled('div')(
  ({ theme }) => css`
    font-size: ${theme.typography.headings.mega.fontSize};
    font-family: ${theme.fontStack.brand};
    max-width: 500px;
    position: relative:
    left: 0;
    right: 0;
    margin: ${theme.spacings.mega} auto;
    text-align: center;
  `,
)
