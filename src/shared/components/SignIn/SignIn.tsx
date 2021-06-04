import { signIn } from 'next-auth/client'
import { FC, useEffect } from 'react'
import { LoginWrapper, LoginButton } from './SignIn.styles'
import Form from 'shared/components/Form'
import Link from 'next/link'

const { Hint } = Form

type ProviderType = {
  id: string,
  name: string,
  callbackUrl: string,
  signinUrl: string,
  type: string,
}

interface SignInProps {
  providers: {
    github: ProviderType,
    google: ProviderType,
  };
  content: {
    [key: string]: {
      icon: string,
      label: string,
    },
  };
  domain: string;
}

export const SignIn: FC<SignInProps> = ({ providers, content, domain }) => {
  const callbackURL = `${domain}/dashboard`
  return (
    <LoginWrapper className="LoginWrapper">
      {Object.keys(providers).map((prop) => (
        <>
          {content[prop]?.icon && (
            <LoginButton
              data-testid={providers[prop]?.name}
              variant="primary"
              size="normal"
              key={prop}
              onClick={() =>
                signIn(providers[prop].id, { callbackUrl: callbackURL })
              }
            >
              <img src={content[prop].icon} />
              Login com {providers[prop]?.name}
            </LoginButton>
          )}
        </>
      ))}
      <Link href="/cadastro">
        <Hint align="center">Ainda não tem cadastro? Cadastre-se</Hint>
      </Link>
    </LoginWrapper>
  )
}
