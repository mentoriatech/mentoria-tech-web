import { Home, HomeProps } from "dashboard/pages/Home";

export default Home;

export async function getStaticProps() {
  const props: HomeProps = {
    content: {
      title: "mentoria.tech | dashboard",
    },
  };

  return { props };
}
