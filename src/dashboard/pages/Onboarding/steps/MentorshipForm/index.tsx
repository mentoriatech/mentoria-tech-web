import { FC } from 'react'
import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import MentorshipForm from 'dashboard/containers/Mentorship'
import { StepTitle } from 'dashboard/pages/Onboarding'

const MentorshipWrapper = styled('div')(
  () => css`
    width: 600px;
  `,
)

interface MentorshipFormStepProps {
  onNextStep?: (state: unknown) => void;
  mentor?: boolean;
}

const MentorshipFormStep: FC<MentorshipFormStepProps> = ({
  onNextStep,
  mentor,
}) => {
  const beforeSubmit = (state: unknown) => {
    onNextStep(state)
  }

  return (
    <MentorshipWrapper>
      <StepTitle>
        Precisamos saber algumas coisas antes que você possa mentorar
      </StepTitle>
      <MentorshipForm onSubmit={beforeSubmit} mentor={mentor} />
    </MentorshipWrapper>
  )
}

export default MentorshipFormStep
