import { NextPage } from 'next'
import { useRouter } from 'next/router'
import {
  useSession
} from 'next-auth/client'
import { DefaultHead } from 'shared/components/DefaultHead'
import Header from 'website/containers/Header'
import WhyMentoring from 'website/containers/WhyMentoring'
import MentorRegister from 'website/containers/MentorRegister'
import Footer from 'shared/containers/Footer'

type MentorsSignUpContent = {
  title: string;
  description?: string;
};

export interface MentorsSignUpProps {
  content: MentorsSignUpContent;
  providers: object;
}

export const MentorsSignUp: NextPage<MentorsSignUpProps> = ({ content, providers }) => {
  const router = useRouter()
  const [session] = useSession()

  // if (session) {
  //   router.push('/dashboard')
  //   return <></>;
  // }

  return (
    <>
      <DefaultHead title={content.title} description={content.description} />
      <main>
        <Header />
        <WhyMentoring />
        <MentorRegister providers={providers} />
        <Footer />
      </main>
    </>
  )
}
