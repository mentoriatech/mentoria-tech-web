import { Profile, ProfileProps } from "dashboard/pages/Profile";

export default Profile;

export async function getStaticProps() {
  const props: ProfileProps = {
    content: {
      title: "mentoria.tech | editar perfil",
    },
  };  

  return { props }
}
