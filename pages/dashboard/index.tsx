import Profile, { ProfileProps } from 'dashboard/pages/Profile'

export default Profile

type StaticPropsResponse = {
  props: ProfileProps,
}

export async function getStaticProps(): Promise<StaticPropsResponse> {
  const props: ProfileProps = {
    content: {
      title: 'mentoria.tech | dashboard',
    },
    user: {
      email: '',
      name: '',
    },
  }

  return { props }
}
