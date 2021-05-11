import { providers } from 'next-auth/client'
import { Login, LoginProps } from 'src/website/pages/Login'

export default Login

export async function getStaticProps(context) {
  const props: LoginProps = {
    content: {
      title: 'mentoria.tech | entrar',
    },
    providers: await providers(context),
  }

  return { props }
}
