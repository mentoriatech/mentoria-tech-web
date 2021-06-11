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
  onSubmit?: (state: unknown) => void;
  mentor?: boolean;
}

const MentorshipFormStep: FC<MentorshipFormStepProps> = ({
  onSubmit,
  mentor,
}) => {
  const beforeSubmit = (state: unknown) => {
    console.log('🚀 ~ file: index.tsx ~ line 23 ~ beforeSubmit ~ state', state)
    onSubmit(state)
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
