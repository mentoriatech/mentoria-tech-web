import { FC } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { LoginWrapper, PageWrapper } from './Login.styles'
import { DefaultHead } from 'shared/components/DefaultHead'
import { LoginBackground } from 'website/components/HeaderBackground'
import TopBar from 'website/components/TopBar'
import SingIn from 'shared/components/SignIn'

type LoginContent = {
  title: string,
  description?: string,
}

export interface LoginProps {
  content: LoginContent;
  providers: {
    id: string,
    name: string,
    callbackUrl: string,
    signinUrl: string,
    type: string,
  };
}

const providersDetails = {
  github: {
    icon: '/icons/github.svg',
    label: 'Cadastrar com',
  },
  google: {
    icon: '/icons/google.svg',
    label: 'Cadastrar com',
  },
}

export const Login: FC<LoginProps> = ({ content, providers }) => {
  const router = useRouter()
  const [session] = useSession()

  if (session) {
    router.push('/dashboard')
    return <></>
  }

  return (
    <>
      <DefaultHead title={content.title} description={content.description} />
      <TopBar darkNav={true} />
      <PageWrapper>
        <LoginBackground />
        <LoginWrapper>
          <SingIn providers={providers} content={providersDetails} />
        </LoginWrapper>
      </PageWrapper>
    </>
  )
}
