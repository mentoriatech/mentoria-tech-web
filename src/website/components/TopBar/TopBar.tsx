import Logo from 'shared/components/Logo/';
import Container from 'shared/components/Container';
import Navigation from 'website/components/Navigation';
import { TopBarStyled } from './TopBar.styles';

const items = [
  {
    icon: '',
    label: 'slack',
    destination: '/'
  },
  {
    icon: '',
    label: 'blog',
    destination: '/blog'
  },
  {
    icon: '/lock.svg',
    label: 'entrar',
    destination: '/login'
  }
]

function TopBar() {
  return (
      <Container>
        <TopBarStyled>
          <Logo />
          <Navigation items={items} />
        </TopBarStyled>
      </Container>
  )
}

export default TopBar;
