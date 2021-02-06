import { FC } from "react";
import { DefaultHead } from "../../../shared/components/DefaultHead";

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
        <h1>{content.title}</h1>
      </main>
    </>
  );
};
