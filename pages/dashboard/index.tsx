import ManageJourney, {
  ManageJourneyProps,
} from 'dashboard/pages/ManageJourney'

export default ManageJourney

type StaticPropsResponse = {
  props: ManageJourneyProps,
}

export async function getStaticProps(): Promise<StaticPropsResponse> {
  const props: ManageJourneyProps = {
    content: {
      title: 'mentoria.tech | dashboard',
    },
    user: {
      email: '',
      name: '',
      trelloToken: '',
      email: '',
    },
  }

  return { props }
}
