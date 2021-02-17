import { FC } from "react"
import { DefaultHead } from "../../../shared/components/DefaultHead"
import Header from 'website/containers/Header'
import HowItWorks from 'website/containers/HowItWorks'
import Mentors from 'website/containers/Mentors'
import PresentationVideo from 'website/containers/PresentationVideo'
import Chat from 'website/containers/Chat'
import Footer from 'shared/containers/Footer'

type HomeContent = {
  title: string;
  description?: string;
};

export interface HomeProps {
  content: HomeContent;
}

export const Home: FC<HomeProps> = ({ content }) => {
  return (
    <>
      <DefaultHead title={content.title} description={content.description} />
      <main>
        <Header />
        <HowItWorks />
        <Mentors />
        <PresentationVideo />
        <Chat />
        <Footer />
      </main>
    </>
  );
};
