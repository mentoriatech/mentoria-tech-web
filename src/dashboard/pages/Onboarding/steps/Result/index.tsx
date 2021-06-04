import { FC } from 'react'
import { PrimaryButton } from 'shared/components/Button'
import {
  CustomErrorIcon,
  CustomSuccessfulIcon,
  CustomCard,
  ResultTitle,
  ResultMessages,
} from './Result.styles'

interface ResultProps {
  successful: boolean;
}

const Result: FC<ResultProps> = ({ successful }) => {
  return (
    <CustomCard>
      {successful ? (
        <>
          <CustomSuccessfulIcon successful={successful} />
          <ResultTitle>Perfil criado com sucesso!</ResultTitle>
          <ResultMessages>Agora é só começar a sua jornada :)</ResultMessages>
          <PrimaryButton variant="primary" size="normal">
            Ir para dashboard
          </PrimaryButton>
        </>
      ) : (
        <>
          <CustomErrorIcon successful={successful} />
          <ResultTitle>oops!</ResultTitle>
          <ResultMessages>Não foi possível criar o seu perfil</ResultMessages>
          <PrimaryButton variant="primary" size="normal">
            Tentar novamente
          </PrimaryButton>
        </>
      )}
    </CustomCard>
  )
}

export default Result
