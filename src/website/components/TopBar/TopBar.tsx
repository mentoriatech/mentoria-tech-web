import Logo from 'shared/components/Logo/';
import Container from 'shared/components/Container';
import { TopBarStyled } from './TopBar.styles';

function TopBar() {
  return (
    <TopBarStyled>
      <Container>
        <Logo />
      </Container>
    </TopBarStyled>
  )
}

export default TopBar;
