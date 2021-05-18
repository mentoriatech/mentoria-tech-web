import { GetStaticProps } from 'next'
import { MentorshipProps, Mentorship } from 'dashboard/pages/Mentorship'

export default Mentorship

export const getStaticProps: GetStaticProps = async () => {
  const props: MentorshipProps = {
    content: {
      title: 'mentoria.tech | jornadas',
    },
  }

  return { props }
}
