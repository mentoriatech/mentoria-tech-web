import { FC } from "react";
import { DefaultHead } from "../../../shared/components/DefaultHead";
import Header from 'website/containers/Header'

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
      </main>
    </>
  );
};
