import { FC } from 'react'
import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import ProfileForm from 'dashboard/containers/ProfileForm'

const ProfileWrapper = styled('div')(
  () => css`
    width: 500px;
  `,
)

interface ProfileFormStepProps {
  nextStep?: () => void;
}

const ProfileFormStep: FC<ProfileFormStepProps> = ({ nextStep }) => {
  const submitProfile = () => {
    nextStep()
  }

  return (
    <ProfileWrapper>
      <ProfileForm beforeSubmit={submitProfile} />
    </ProfileWrapper>
  )
}

export default ProfileFormStep
