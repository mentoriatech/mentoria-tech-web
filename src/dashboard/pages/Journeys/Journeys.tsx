import { FC } from 'react'
import Layout from 'dashboard/containers/Layout'
import RocketIcon from 'svg/rocket.svg'

type JourneysContent = {
  title: string,
  description?: string,
}

export interface JourneysProps {
  content: JourneysContent;
}

export const Journeys: FC<JourneysProps> = ({ content }) => {
  return <Layout icon={RocketIcon} content={content}></Layout>
}
