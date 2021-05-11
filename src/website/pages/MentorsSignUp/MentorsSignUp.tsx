import { FC } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { DefaultHead } from 'shared/components/DefaultHead'
import Header from 'website/containers/Header'
import WhyMentoring from 'website/containers/WhyMentoring'
import Footer from 'shared/containers/Footer'

type MentorsSignUpContent = {
  title: string,
  description?: string,
}

export interface MentorsSignUpProps {
  content: MentorsSignUpContent;
  providers: {
    id: string,
    name: string,
    callbackUrl: string,
    signinUrl: string,
    type: string,
  };
}

export const MentorsSignUp: FC<MentorsSignUpProps> = ({ content }) => {
  const router = useRouter()
  const [session] = useSession()

  if (session) {
    router.push('/dashboard')
    return <></>
  }

  return (
    <>
      <DefaultHead title={content.title} description={content.description} />
      <main>
        <Header />
        <WhyMentoring />
        <Footer />
      </main>
    </>
  )
}
