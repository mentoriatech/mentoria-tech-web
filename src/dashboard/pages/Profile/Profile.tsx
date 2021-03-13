import { FC } from 'react'
import { useRouter } from 'next/router'
import Form from 'shared/components/Form'
import Wrapper from 'dashboard/containers/Wrapper'
import MainWrapper from 'dashboard/components/MainWrapper'
import Loading from 'shared/components/Loading'
import ProfileVisualization from 'dashboard/containers/ProfileVisualization'
import { Content, ContentHeader, ContentBody, ContentBar } from 'dashboard/containers/Content'
import Sidebar from 'dashboard/containers/Sidebar'
import TopBar from 'dashboard/containers/TopBar'
import Card from 'dashboard/components/Card'
import ProfileIcon from 'svg/profile'

import { DefaultHead } from 'shared/components/DefaultHead'

import { useSession } from 'next-auth/client'


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
      componentType: 'textarea',
      stretch: true,
      label: 'Se abresente de forma breve',
      characterLimit: 240,
    }
  ]
}

type ProfileContent = {
  title: string;
  description?: string;
};

export interface ProfileProps {
  content: ProfileContent;
}


export const Profile: FC<ProfileProps> = ({ content }) => {
  const [session, loading] = useSession()

  const profileIcon = <ProfileIcon />

  return (
    <>
      <DefaultHead title={content.title} description={content.description} />
      {loading ? <Loading /> : (
        <MainWrapper>
          <Wrapper>
          <Sidebar />
            <Content>
              <ContentHeader>
                <TopBar title="Perfil" icon={profileIcon} />
              </ContentHeader>
              <ProfileVisualization user={session.user} />
              <ContentBody>
                <Card>
                  <GeneratedForm {...registerForm} />
                </Card>
              </ContentBody>
            </Content>
          </Wrapper>
        </MainWrapper>
      )}
    </>
  )
}
