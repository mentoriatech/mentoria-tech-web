import { FC, useEffect, useState } from 'react'
import Layout from 'dashboard/containers/Layout'
import Loading from 'shared/components/Loading'
import RocketIcon from 'svg/rocket.svg'
import { useRouter } from 'next/router'

import {
  JourneyCard,
  JourneysWrapper,
  JourneyTitle,
  JourneyImage,
  JourneyDescription,
  CustomButton,
} from './Journeys.styles'
import { useJourneys } from './Journeys.hooks'

type JourneysContent = {
  title: string,
  description?: string,
}

export interface JourneysProps {
  content: JourneysContent;
  user?: {
    id?: number,
  };
}

export const Journeys: FC<JourneysProps> = ({ content, user }) => {
  const [loading, setLoading] = useState(true)
  const { journeys } = useJourneys(user.id)
  const router = useRouter()

  useEffect(() => {
    if (journeys.length) {
      setLoading(false)
    }
  }, [journeys])
  const handleButtonClick = (destination: string) => router.push(destination)

  return (
    <Layout icon={RocketIcon} content={content}>
      {loading && <Loading label="Buscando jornadas..." />}
      <JourneysWrapper>
        {journeys.map((journey) => (
          <JourneyCard key={journey.slug}>
            <JourneyTitle>{journey.title}</JourneyTitle>
            {journey.image && (
              <JourneyImage>
                <img src={journey.image} alt="" />
              </JourneyImage>
            )}
            <JourneyDescription>{journey.description}</JourneyDescription>
            <CustomButton
              onClick={() =>
                handleButtonClick(`/dashboard/journeys/${journey.slug}`)
              }
              variant="primary"
              size="small"
            >
              Iniciar {journey.title}
            </CustomButton>
          </JourneyCard>
        ))}
      </JourneysWrapper>
    </Layout>
  )
}
