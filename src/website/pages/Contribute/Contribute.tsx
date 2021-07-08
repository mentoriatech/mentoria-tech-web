import { FC } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { PageWrapper } from './Contribute.styles'
import Header from 'website/containers/Header'
import { DefaultHead } from 'shared/components/DefaultHead'
import SquareCard from 'website/components/SquareCard'
import TopBar from 'website/components/TopBar'

type ContributeContent = {
  title: string,
  description?: string,
}

export interface ContributeProps {
  content?: ContributeContent;
}

const optionsToContribute = [
  {
    data: {
      title: 'Curadoria',
      description:
        'O nosso conteúdo é resultado de uma curadoria. Encontrou algum post/blog/vídeo/thread que acha que agregaria muito à quem está começando uma jornada? Envia pra gente!',
      action: 'Contribuir com curadoria',
    },
    order: 1,
    color: 'Primary',
    direction: 'left',
  },
  {
    data: {
      title: 'Blog',
      description:
        'Você também pode contribuir com conteúdo autoral escrevendo para o nosso blog!',
      action: 'Ir para blog',
    },
    order: 2,
    color: 'Secondary',
    direction: 'right',
  },
  {
    data: {
      title: 'Indique',
      description:
        'Conhece alguém que seria um(a) ótimo(a) mentor(a)? Indica pra gente!',
      action: 'Indicar pessoa mentora',
    },
    order: 1,
    color: 'Primary',
    direction: 'left',
  },
]

export const Contribute: FC<ContributeProps> = ({ content }) => {
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
      <Header
        title="Como contribuir"
        subtitle="O mentoria.tech só vai ser possível com a ajuda da comunidade, por isso, listamos algumas formas que vocês podem nos ajudar a construir uma jornada de mentoria incrível."
      />
      <PageWrapper>
        {optionsToContribute.map((option) => (
          <SquareCard {...option} />
        ))}
      </PageWrapper>
    </>
  )
}
