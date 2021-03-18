import { Contribute, ContributeProps } from "dashboard/pages/Contribute";

export default Contribute;

export async function getStaticProps(context) {
  const props: ContributeProps = {
    content: {
      title: "mentoria.tech | mentoria",
    },
  };  

  return { props }
}
