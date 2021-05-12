import { GetStaticProps } from 'next'
import { Error, ErrorProps } from 'dashboard/pages/Error'

export default Error

export const getStaticProps: GetStaticProps = async () => {
  const props: ErrorProps = {
    content: {
      title: 'mentoria.tech | página não encontrada',
      description: '',
    },
    protectedRoute: true,
  }

  return { props }
}
