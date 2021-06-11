import { GetStaticProps } from 'next'
import Onboarding, { OnboardingProps } from 'dashboard/pages/Onboarding'

export default Onboarding

export const getStaticProps: GetStaticProps = async () => {
  const props: OnboardingProps = {
    content: {
      title: 'mentoria.tech | onboarding',
    },
  }

  return { props }
}
