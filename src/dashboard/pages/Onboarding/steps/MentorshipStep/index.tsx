import { FC } from 'react'
import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import { StepTitle } from 'dashboard/pages/Onboarding'
import Card from 'dashboard/components/Card'
import { PrimaryButton } from 'shared/components/Button'

export const MentorshipContainer = styled('div')(
  () => css`
    display: grid;
    grid-template-columns: calc(50% - 16px) calc(50% - 16px);
    grid-gap: 32px;
    width: 600px;
  `,
)

export const CustomCard = styled(Card)(
  ({ theme }) => css`
    flex-direction: column;
    // min-height: 300px;
    font-size: ${theme.typography.text.kilo.fontSize};
    font-weight: ${theme.fontWeight.thin};
  `,
)

export const CustomButton = styled(PrimaryButton)(
  ({ theme }) => css`
    margin-top: ${theme.spacings.mega};
  `,
)

interface MentorshipFormStepProps {
  nextStep?: () => void;
  onNextStep?: (state: { mentor: boolean }) => void;
}

const MentorshipFormStep: FC<MentorshipFormStepProps> = ({
  nextStep,
  onNextStep,
}) => {
  const beforeSubmit = (mentor: boolean) => {
    onNextStep({ mentor })
    nextStep()
  }

  return (
    <>
      <StepTitle>Como você quer participar?</StepTitle>
      <MentorshipContainer>
        <CustomCard>
          <>
            <img src="https://plchldr.co/i/500x400" />
            <CustomButton
              onClick={() => beforeSubmit(true)}
              variant="primary"
              size="normal"
            >
              Quero mentorar
            </CustomButton>
          </>
        </CustomCard>
        <CustomCard>
          <img src="https://plchldr.co/i/500x400" />
          <CustomButton
            onClick={() => beforeSubmit(false)}
            variant="primary"
            size="normal"
          >
            Quero mentoria
          </CustomButton>
        </CustomCard>
      </MentorshipContainer>
    </>
  )
}

export default MentorshipFormStep
