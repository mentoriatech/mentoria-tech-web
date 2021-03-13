import Section  from 'website/components/Section'
import Topics from 'shared/components/Topics'
import SignIn from 'shared/components/SignIn'
import { ContainerStyled } from './MentorRegister.styles'

const nextSteps = [
  'depois de se cadastrar, você será redirecionado para uma página onde poderá completar o seu perfil, ok?',
  'nós te enviaremos um e-mail com os próximos passos.',
  'você também receberá o guia da pessoa mentora para te ajudar a conduzir essa jornada da melhor forma possível.',
  'enquanto você ainda não deu match com um possível mentorado, você pode entrar no nosso grupo do slack.',
]

const providersDetails = {
  github: {
    icon: '/icons/github.svg',
    label: 'Cadastrar com'
  },
  google: {
    icon: '/icons/google.svg',
    label: 'Cadastrar com'
  }
}

export const MentorRegister = ({ providers }) => {
  return (
    <>
      <Section 
      title="Cadastro"
      direction="column">
        <ContainerStyled>
          <SignIn providers={providers} content={providersDetails} />
          <Topics data={nextSteps} />
        </ContainerStyled>
      </Section>
    </>
  )
}
