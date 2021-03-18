import { ManageJourney, ManageJourneyProps } from "dashboard/pages/ManageJourney";

export default ManageJourney

export async function getStaticProps() {
  const props: ManageJourneyProps = {
    content: {
      title: "mentoria.tech | dashboard",
    },
  };

  return { props };
}
