import { FC, useEffect, useState } from 'react'
import StepWizard from 'react-step-wizard'
import { useSession } from 'next-auth/client'
import { UserType, actionType } from 'types'
import ProfileStep from './steps/Profile/'
import MentorshipStep from './steps/MentorshipStep/'
import MentorshipForm from './steps/MentorshipForm/'
import Result from './steps/Result'
import { DefaultHead } from 'shared/components/DefaultHead'
import Loading from 'shared/components/Loading'
import { setUser } from 'store/userStore'
import { updateUser } from './OnboardingService'

import { OnboardingContainer, WizardNav, WizardStep } from './Onboarding.styles'

export interface OnboardingProps {
  dispatch?: (action: actionType) => void;
  content: {
    title: string,
    description?: string,
  };
  user?: UserType;
}

interface WizardProps {
  totalSteps?: number;
  currentStep?: number;
  goToStep?: (step: number) => void;
}

const WizardBar: FC<WizardProps> = ({ totalSteps, currentStep, goToStep }) => {
  const handleStepChange = (step: number) =>
    step <= currentStep ? goToStep(step) : null

  const steps = new Array(totalSteps).fill(0)
  return (
    <WizardNav>
      {steps.map((_step: number, index: number) => (
        <WizardStep
          onClick={() => handleStepChange(index + 1)}
          key={index}
          totalSteps={totalSteps}
          active={index + 1 === currentStep}
          disabled={index + 1 > currentStep}
        >
          {index + 1}
        </WizardStep>
      ))}
    </WizardNav>
  )
}

export const Onboarding: FC<OnboardingProps> = ({
  content,
  dispatch,
  user,
}) => {
  const [session] = useSession()
  const [userProfile, setUserProfile] = useState<UserType>({})
  const [isSuccessful, setSuccessful] = useState(false)
  const [result, setResult] = useState(false)
  const [loading, setLoading] = useState(true)

  const onNextStep = (state: UserType) => {
    setUserProfile((prev) => ({ ...prev, ...state }))
  }

  const onSubmit = async (state) => {
    try {
      const { successful } = await updateUser(user.email, {
        ...userProfile,
        ...state,
      })
      setSuccessful(successful)
      setResult(true)
    } catch (error: unknown) {
      setResult(true)
      setSuccessful(false)
    }
  }

  useEffect(() => {
    if (session) {
      if (session && !user?.name?.length) {
        dispatch(setUser({ user: { ...user, ...session?.user, ready: true } }))
        setLoading(false)
      }
    }
  }, [session])

  return (
    <>
      <DefaultHead title={content.title} description={content.description} />
      <OnboardingContainer>
        {(!user || loading) && <Loading label="Carregando" />}
        {result ? (
          <Result successful={isSuccessful} />
        ) : (
          <StepWizard nav={<WizardBar />}>
            <ProfileStep user={user} onNextStep={onNextStep} />
            <MentorshipStep onNextStep={onNextStep} />
            <MentorshipForm onSubmit={onSubmit} mentor={userProfile.mentor} />
          </StepWizard>
        )}
      </OnboardingContainer>
    </>
  )
}
