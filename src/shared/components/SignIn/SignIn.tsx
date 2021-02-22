import { signIn } from 'next-auth/client'
import { FC } from 'react'
import { LoginWrapper, LoginButton } from './SignIn.styles'


interface SignInProps {
  providers: {
    id: string;
    name: string;
    callback: string;
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
        <LoginButton key={prop} onClick={() => signIn(providers[prop].id)}>
          <img src={content[prop].icon} />
          Login com {providers[prop].name}
        </LoginButton>
      ))}
    </LoginWrapper>
  )
}
