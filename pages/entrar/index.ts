import { providers } from 'next-auth/client'
import { Login, LoginProps } from 'src/website/pages/Login'

export default Login

interface GetStaticProps {
  props: LoginProps;
}

export async function getServerSideProps(
  context: unknown,
): Promise<GetStaticProps> {
  const props = {
    content: {
      title: 'mentoria.tech | entrar',
    },
    providers: await providers(context),
  }

  console.log(props)

  return { props }
}
