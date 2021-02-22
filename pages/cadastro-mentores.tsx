import { providers } from 'next-auth/client'
import { MentorsSignUp, MentorsSignUpProps } from "../src/website/pages/MentorsSignUp";

export default MentorsSignUp;

export async function getStaticProps(context) {
  const props: MentorsSignUpProps = {
    content: {
      title: "mentoria.tech | cadastro",
    },
    providers: await providers(context)
  };

  return { props };
}
