import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Form from 'shared/components/Form'
import Wrapper from 'dashboard/containers/Wrapper'
import MainWrapper from 'dashboard/components/MainWrapper'
import { Content, ContentHeader, ContentBody } from 'dashboard/containers/Content'
import Sidebar from 'dashboard/containers/Sidebar'
import TopBar from 'dashboard/containers/TopBar'
import HeartIncon from 'svg/heart'

import { DefaultHead } from 'shared/components/DefaultHead'

import {
  useSession
} from 'next-auth/client'

const { GeneratedForm } = Form

const registerForm = {
  onSubmit: (e: any) => {
    e.preventDefault()
  },
  onCancel: () => {},
  submitLabel: 'salvar',
  cancelLabel: 'cancelar',
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

const items = [
  {
    icon: '/icons/profile.svg',
    destination: '/perfil',
    label: 'Perfil',
  },
  {
    icon: '/icons/people.svg',
    destination: '/gerenciar',
    label: 'Gerenciar',
  }
]

type HomeContent = {
  title: string;
  description?: string;
};

export interface HomeProps {
  content: HomeContent;
}


export const Home: FC<HomeProps> = ({ content }) => {
  const router = useRouter()
  const [session] = useSession()

  useEffect(() => {
    if (!session) {
      router.push('/entrar')
    }
  }, [session])

  const titleIcon = <HeartIncon />
  return (
    <>
      <DefaultHead title={content.title} description={content.description} />
      <MainWrapper>
        <Wrapper>
          <Sidebar />
          <Content>
            <ContentHeader>
              <TopBar title="Dashboard" icon={titleIcon} />
            </ContentHeader>
            <ContentBody>

            </ContentBody>
          </Content>
        </Wrapper>
      </MainWrapper>
    </>
  )
}
