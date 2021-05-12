import Profile, { ProfileProps } from 'dashboard/pages/Profile'
import { GetStaticProps } from 'next'
export default Profile

export const getStaticProps: GetStaticProps = async () => {
  const props: ProfileProps = {
    content: {
      title: 'mentoria.tech | editar perfil',
    },
  }

  return { props }
}
