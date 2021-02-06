import { Home, HomeProps } from "../src/website/pages/Home";

export default Home;

export async function getStaticProps() {
  const props: HomeProps = {
    content: {
      title: "mentoria.tech",
    },
  };

  return { props };
}
