import { FC } from 'react'
import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import MentorshipForm from 'dashboard/containers/Mentorship'

const MentorshipWrapper = styled('div')(
  () => css`
    width: 800px;
  `,
)

interface MentorshipFormStepProps {
  nextStep?: () => void;
}

const MentorshipFormStep: FC<MentorshipFormStepProps> = ({ nextStep }) => {
  const submitMentorship = () => {
    nextStep()
  }

  return (
    <MentorshipWrapper>
      <MentorshipForm beforeSubmit={submitMentorship} />
    </MentorshipWrapper>
  )
}

export default MentorshipFormStep
