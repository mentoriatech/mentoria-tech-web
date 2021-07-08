import { GetStaticProps } from 'next'
import { ContributeProps, Contribute } from 'website/pages/Contribute'

export default Contribute

export const getStaticProps: GetStaticProps = async () => {
  const props: ContributeProps = {
    content: {
      title: 'mentoria.tech | jornadas',
    },
  }

  return { props }
}
