import { GetStaticProps } from 'next'
import { Contribute, ContributeProps } from 'dashboard/pages/Contribute'

export default Contribute

export const getStaticProps: GetStaticProps = async () => {
  const props: ContributeProps = {
    content: {
      title: 'mentoria.tech | mentoria',
    },
  }

  return { props }
}
