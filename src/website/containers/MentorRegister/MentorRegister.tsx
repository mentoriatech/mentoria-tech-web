import Section  from 'website/components/Section'
import Form from 'shared/components/Form'
import Topics from 'shared/components/Topics'
import SignIn from 'shared/components/SignIn'
import { ContainerStyled } from './MentorRegister.styles'

const { GeneratedForm } = Form

const registerForm = {
  onSubmit: (e: any) => {
    e.preventDefault()
  },
  submitLabel: 'cadastrar',
  fields: [
    {
      componentType: 'input',
      type: 'text',
      placeholder: 'Maria Silva',
      stretch: true,
      label: 'Como devemos te chamar?',
    },
    {
      componentType: 'select',
      placeholder: 'Selecione',
      stretch: true,
      label: 'Como você se identifica?',
      hint: 'Por que perguntamos isso?',
      onHintHover: () => {

      },
      options: [
        {
          value: 'male',
          label: 'Homem',
        },
        {
          value: 'female',
          label: 'Mulher',
        },
        {
          value: 'trans-female',
          label: 'Mulher Transsexual',
        },
        {
          value: 'trans-male',
          label: 'Homem Transsexual',
        },
        {
          value: 'non-binary',
          label: 'Homem',
        }
      ]
    },
    {
      componentType: 'input',
      type: 'text',
      placeholder: 'seu@email.com',
      stretch: true,
      label: 'Qual o seu e-mail?',
    },
    {
      componentType: 'select',
      placeholder: 'Selecione',
      stretch: true,
      label: 'Qual a sua disponibilidade semanal?',
      options: [
        {
          value: '1-3',
          label: '1 a 3 horas',
        },
        {
          value: '3-5',
          label: '3 a 5 horas',
        },
        {
          value: '5-8',
          label: '5 a 8 horas',
        }
      ]
    },
    {
      componentType: 'select',
      placeholder: 'Selecione',
      stretch: true,
      isMulti: true,
      label: 'Em quais tópicos você pode mentorar?',
      options: [
        {
          value: 'html',
          label: 'HTML',
        },
        {
          value: 'javascript',
          label: 'Javascript',
        },
        {
          value: 'css',
          label: 'CSS',
        },
        {
          value: 'react',
          label: 'React',
        },
        {
          value: 'angular',
          label: 'Angular',
        },
        {
          value: 'vuejs',
          label: 'Vue.js',
        },
        {
          value: 'nodejs',
          label: 'NodeJs',
        },
      ]
    },
    {
      componentType: 'textarea',
      stretch: true,
      label: 'Se abresente de forma breve',
      characterLimit: 240,
    }
  ]
}

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
    icon: '',
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
          {/* <GeneratedForm {...registerForm} /> */}
          <SignIn providers={providers} content={providersDetails} />
          <Topics data={nextSteps} />
        </ContainerStyled>
      </Section>
    </>
  )
}
