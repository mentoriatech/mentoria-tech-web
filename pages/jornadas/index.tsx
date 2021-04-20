import { providers } from 'next-auth/client'
import { Journeys, JourneysProps } from "dashboard/pages/Journeys";
 
export default Journeys;

export async function getStaticProps(context) {
  const props: JourneysProps = {
    content: {
      title: "mentoria.tech | jornadas",
    },
    providers: await providers(context)
  };

  return { props };
}
