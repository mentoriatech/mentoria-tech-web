import { Error, ErrorProps } from "dashboard/pages/Error";

export default Error;

export async function getStaticProps(context) {
  const props: ErrorProps = {
    content: {
      title: "mentoria.tech | página não encontrada",
    },
    protectedRoute: true
  };  

  return { props }
}
