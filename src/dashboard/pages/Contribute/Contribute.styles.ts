import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import Card from 'dashboard/components/Card'

export const ContributeContainer = styled('div')(
  () => css`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    grid-gap: 32px;
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

export const IconWrapper = styled('div')(
  () => css`
    width: 200px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 50%;
    }
  `,
)

export const CustomCard = styled(Card)(
  ({ theme }) => css`
    align-items: center;
    justify-content: space-between;
    min-height: 300px;
    font-size: ${theme.typography.text.kilo.fontSize};
    font-weight: ${theme.fontWeight.thin};
    text-align: center;
  `,
)
