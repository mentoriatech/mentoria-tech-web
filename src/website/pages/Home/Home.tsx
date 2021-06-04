import { FC } from 'react'
import { DefaultHead } from '../../../shared/components/DefaultHead'
import TopBar from 'website/components/TopBar'
import Header from 'website/containers/Header'
import { HomeBackground } from 'website/components/HeaderBackground'
import HowItWorks from 'website/containers/HowItWorks'
import Mentors from 'website/containers/Mentors'
import PresentationVideo from 'website/containers/PresentationVideo'
import Chat from 'website/containers/Chat'
import Footer from 'shared/containers/Footer'

type HomeContent = {
  title: string,
  description?: string,
}

export interface HomeProps {
  content: HomeContent;
}

export const Home: FC<HomeProps> = ({ content }) => {
  return (
    <>
      <DefaultHead title={content.title} description={content.description} />
      <main>
        <TopBar />
        <Header
          title="mentoria em tecnologia"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit et pellentesque orci sagittis eget. Sed tristique nibh lorem."
          buttonLabel="começar agora"
          buttonDestination="/cadastro"
        />
        <HowItWorks />
        <Mentors />
        <PresentationVideo />
        <Chat />
        <Footer />
      </main>
    </>
  )
}
