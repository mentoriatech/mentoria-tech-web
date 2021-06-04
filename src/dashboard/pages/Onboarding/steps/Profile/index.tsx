import { FC } from 'react'
import ProfileForm from 'dashboard/containers/ProfileForm'
import { StepTitle } from 'dashboard/pages/Onboarding'
import { UserType } from 'types'

interface ProfileFormStepProps {
  nextStep?: () => void;
  onNextStep?: (state: unknown) => void;
  user: UserType;
}

const ProfileFormStep: FC<ProfileFormStepProps> = ({
  nextStep,
  user,
  onNextStep,
}) => {
  const onSubmit = (state: unknown) => {
    onNextStep(state)
    nextStep()
  }

  return (
    <>
      <StepTitle>Complete o seu perfil</StepTitle>
      <ProfileForm onSubmit={onSubmit} user={user} hideTitle={true} />
    </>
  )
}

export default ProfileFormStep
