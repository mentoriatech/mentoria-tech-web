import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import Card from 'dashboard/components/Card'
import { PrimaryButton } from 'shared/components/Button'

export const MentorshipContainer = styled('div')(
  () => css`
    display: grid;
    grid-template-columns: calc(50% - 16px) calc(50% - 16px);
    grid-gap: 32px;
  `,
)

export const MentorshipTitle = styled('div')(
  ({ theme }) => css`
    width: 100%;
    text-align: center;
    font-size: ${theme.typography.headings.giga.fontSize};
    font-weight: ${theme.fontWeight.bold};
  `,
)

export const MentorshipDescription = styled('div')(
  ({ theme }) => css`
    width: 100%;
    font-weight: ${theme.fontWeight.thin};
  `,
)

export const Description = styled('div')(
  ({ theme }) => css`
    font-family: ${theme.fontStack.default};
    font-size: ${theme.typography.headings.kilo.fontSize};
    font-weight: ${theme.fontWeight.thin};
    width: 90%;
    display: block;
    margin-bottom: ${theme.spacings.giga};
  `,
)

export const CustomCard = styled(Card)(
  ({ theme }) => css`
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;
    font-size: ${theme.typography.text.kilo.fontSize};
    font-weight: ${theme.fontWeight.thin};
  `,
)

export const CustomButton = styled(PrimaryButton)(
  ({ theme }) => css`
    margin-top: ${theme.spacings.mega};
  `,
)
