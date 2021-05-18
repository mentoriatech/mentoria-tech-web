import { signIn } from 'next-auth/client'
import { FC } from 'react'
import { LoginWrapper, LoginButton } from './SignIn.styles'
import { ENVS } from 'dashboard/constants'
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
    credentials: ProviderType,
    github: ProviderType,
    google: ProviderType,
  };
  content: {
    [key: string]: {
      icon: string,
      label: string,
    },
  };
}
// criar botão de login com email e senha que só aparece no ambiente te teste do cypress

export const SignIn: FC<SignInProps> = ({ providers, content }) => {
  const callbackURL = `${process.env.NEXT_CURRENT_URL}/dashboard`
  const isNotProduction =
    process.env.NODE_ENV === ENVS.DEVELOPMENT ||
    process.env.NODE_ENV === ENVS.TEST

  return (
    <LoginWrapper>
      {Object.keys(providers).map((prop) => (
        <>
          {content[prop]?.icon && (
            <LoginButton
              data-testid={providers[prop].name}
              variant="primary"
              size="normal"
              key={prop}
              onClick={() =>
                signIn(providers[prop].id, { callbackUrl: callbackURL })
              }
            >
              <img src={content[prop].icon} />
              Login com {providers[prop].name}
            </LoginButton>
          )}
        </>
      ))}
      {isNotProduction && (
        <LoginButton
          data-testid={providers.credentials.name}
          variant="primary"
          size="normal"
          onClick={() =>
            signIn('credentials', {
              username: process.env.CREDENTIALS_USERNAME,
              password: process.env.CREDENTIALS_PASSWORD,
            })
          }
        >
          Login
        </LoginButton>
      )}
      <Link href="/cadastro">
        <Hint align="center">Ainda não tem cadastro? Cadastre-se</Hint>
      </Link>
    </LoginWrapper>
  )
}
