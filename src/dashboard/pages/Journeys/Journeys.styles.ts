import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import Card from 'dashboard/components/Card'
import { PrimaryButton } from 'shared/components/Button'

export const JourneysWrapper = styled('div')(
  () => css`
    display: grid;
    align-items: center;
    grid-template-columns: 30% 30% 30%;
    width: 100%;
  `,
)

export const JourneyCard = styled(Card)(
  () => css`
    flex-direction: column;
    cursor: pointer;
  `,
)

export const JourneyDescription = styled('p')(
  ({ theme }) => css`
    font-weight: ${theme.fontWeight.thin};
    padding: 0;
    margin: 0;
    margin-top: ${theme.spacings.mega};
  `,
)

export const JourneyImage = styled('div')(
  ({ theme }) => css`
    margin-top: ${theme.spacings.mega};
    flex-direction: column;
    cursor: pointer;
    width: 100%;
    text-align: center;
  `,
)

export const JourneyTitle = styled('span')(
  ({ theme }) => css`
    color: ${theme.colors.brandPrimary.normal};
    font-weight: ${theme.fontWeight.bold};
    text-transform: uppercase;
    text-align: center;
    width: 100%;
  `,
)

export const CustomButton = styled(PrimaryButton)(
  ({ theme }) => css`
    margin-top: ${theme.spacings.mega};
  `,
)
