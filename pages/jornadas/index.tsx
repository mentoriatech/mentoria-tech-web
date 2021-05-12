import { GetStaticProps } from 'next'
import Journeys, { JourneysProps } from 'dashboard/pages/Journeys'

export default Journeys

export const getStaticProps: GetStaticProps = async () => {
  const props: JourneysProps = {
    content: {
      title: 'mentoria.tech | jornadas',
    },
  }

  return { props }
}
