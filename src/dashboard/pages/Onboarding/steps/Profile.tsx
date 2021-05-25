import { FC } from 'react'
import { css } from '@emotion/react'
import styled from 'shared/styles/styled'
import ProfileForm from 'dashboard/containers/ProfileForm'
import { UserType } from 'types'

const ProfileWrapper = styled('div')(
  () => css`
    width: 500px;
  `,
)

interface ProfileFormStepProps {
  nextStep?: () => void;
  user: UserType;
}

const ProfileFormStep: FC<ProfileFormStepProps> = ({ nextStep, user }) => {
  const submitProfile = () => {
    nextStep()
  }

  return (
    <ProfileWrapper>
      <ProfileForm beforeSubmit={submitProfile} user={user} />
    </ProfileWrapper>
  )
}

export default ProfileFormStep
