import { NextPageContext } from 'next'
import { providers } from 'next-auth/client'
import { Login, LoginProps } from 'src/website/pages/Login'

export default Login

interface GetStaticProps {
  props: LoginProps;
}

export async function getServerSideProps(
  context: NextPageContext,
): Promise<GetStaticProps> {
  const props = {
    content: {
      title: 'mentoria.tech | entrar',
    },
    domain: context.req.headers.host,
    providers: await providers(context),
  }

  return { props }
}
