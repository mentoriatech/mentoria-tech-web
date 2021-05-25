import { FC } from 'react'
import StepWizard from 'react-step-wizard'
import { UserType } from 'types'
import { OnboardingContainer, WizardNav, WizardStep } from './Onboarding.styles'
import ProfileStep from './steps/Profile'
import MentorshipStep from './steps/Mentorship'

export interface OnboardingProps {
  content: {
    title: string,
    description?: string,
  };
  user?: UserType;
}

interface WizardProps {
  totalSteps?: number;
  currentStep?: number;
}

const WizardBar: FC<WizardProps> = ({ totalSteps, currentStep }) => {
  const steps = new Array(totalSteps).fill(0)
  return (
    <WizardNav>
      {steps.map((_step: number, index: number) => (
        <WizardStep
          key={index}
          totalSteps={totalSteps}
          active={index === currentStep + 1}
        >
          {index + 1}
        </WizardStep>
      ))}
    </WizardNav>
  )
}

export const Onboarding: FC<OnboardingProps> = () => {
  return (
    <OnboardingContainer>
      <StepWizard nav={<WizardBar />}>
        <ProfileStep />
        <MentorshipStep />
      </StepWizard>
    </OnboardingContainer>
  )
}
