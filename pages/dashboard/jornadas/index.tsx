import Journeys, { JourneysProps } from 'dashboard/pages/Journeys'

export default Journeys

type StaticPropsResponse = {
  props: JourneysProps,
}

export async function getStaticProps(): Promise<StaticPropsResponse> {
  const props: JourneysProps = {
    content: {
      title: 'mentoria.tech | dashboard',
    },
    user: {},
  }

  return { props }
}
