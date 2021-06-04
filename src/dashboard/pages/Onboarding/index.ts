import Connect from 'store/config/connect'
import { Onboarding } from './Onboarding'

export * from './Onboarding.styles'

export default Connect(Onboarding)

export type { OnboardingProps } from './Onboarding'
