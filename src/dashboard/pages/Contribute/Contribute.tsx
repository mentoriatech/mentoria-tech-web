import { FC } from 'react'
import Layout from 'dashboard/containers/Layout'
import { PrimaryButton } from 'shared/components/Button'

import {
  ContributeContainer,
  Description,
  IconWrapper,
  CustomCard,
} from './Contribute.styles'

export interface ContributeProps {
  content: {
    title: string,
    description?: string,
  };
}

const optionsToContribute = [
  {
    icon: 'code',
    color: 'Primary',
    description:
      'Todo o nosso código está disponível do GitHub e você pode nos ajudar a torná-lo cada vez melhor. Encontrou um bug? Tem alguma sugestão? Abre um pull request :)',
    action: 'Ir para o GitHub',
  },
  {
    icon: 'content',
    color: 'Secondary',
    description:
      'O nosso conteúdo é resultado de uma curadoria. Encontrou algum post/blog/vídeo/thread que acha que agregaria muito às nossas pessoas mentoradas? Envia pra gente!',
    action: 'Contribuir com curadoria',
  },
  {
    icon: 'play',
    color: 'Support',
    description:
      'Você é fera em algum assunto específico? O que acha de compartilhar um pouco do seu conhecimento com a gente em vídeo e aparecer nos nossos stories de jornada?',
    action: 'Contribuir com conteúdo',
  },
  {
    icon: 'comment',
    color: 'Secondary',
    description:
      'Você é uma pessoa tímida? Tudo bem! Você pode escrever um post para o nosso blog :)',
    action: 'Ir para blog',
  },
  {
    icon: 'gift',
    color: 'Support',
    description:
      'O mentoria.tech é 100% mantido pelos fundadores, mas você pode ajudar com os custos, se puder.',
    action: 'Ver custos',
  },
  {
    icon: 'contact',
    color: 'Primary',
    description:
      'Tem alguma outra sugestão que não encontrou aqui? Manda uma mensagem pra gente!',
    action: 'Entrar em contato',
  },
]

export const Contribute: FC<ContributeProps> = ({ content }) => {
  return (
    <Layout content={content} direction="column">
      <Description>
        O mentoria.tech visa ser um projeto feito pela comunidade para a
        comunidade, por isso sinta-se à vontade para contribuir da forma que
        quiser.
      </Description>
      <ContributeContainer>
        {optionsToContribute.map((option) => (
          <CustomCard direction="column">
            <IconWrapper color={option.color}>
              <img src={`/icons/${option.icon}.svg`} />
            </IconWrapper>
            {option.description}
            <PrimaryButton variant="primary" size="small">
              {option.action}
            </PrimaryButton>
          </CustomCard>
        ))}
      </ContributeContainer>
    </Layout>
  )
}
