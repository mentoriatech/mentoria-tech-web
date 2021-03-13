import { signIn } from 'next-auth/client'
import { FC } from 'react'
import { LoginWrapper, LoginButton } from './SignIn.styles'
import Form from 'shared/components/Form'
import Link from 'next/link'

const { Hint } = Form

interface SignInProps {
  providers: {
    id: string;
    name: string;
    callbackUrl: string;
    signinUrl: string;
    type: string;
  };
  content: {
    [key: string]: {
      icon: string;
      label: string;
    }
  }
}

export const SignIn: FC<SignInProps> = ({ providers, content }) => {
  return (
    <LoginWrapper>
      {Object.keys(providers).map((prop) => (
        <LoginButton variant="primary" key={prop} onClick={() => signIn(providers[prop].id)}>
          <img src={content[prop].icon} />
          Login com {providers[prop].name}
        </LoginButton>
      ))}
      <Link href="/cadastro">
        <Hint align="center">Ainda não tem cadastro? Cadastre-se</Hint>
      </Link>
    </LoginWrapper>
  )
}
