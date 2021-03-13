import { providers } from 'next-auth/client'
import { SignUp, SignUpProps } from "src/website/pages/SignUp";

export default SignUp;

export async function getStaticProps(context) {
  const props: SignUpProps = {
    content: {
      title: "mentoria.tech | entrar",
    },
    providers: await providers(context)
  };

  return { props };
}
