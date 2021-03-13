import { FC } from 'react'
import Logo from 'shared/components/Logo/'
import Navigation from 'website/components/Navigation'
import { TopBarStyled, ContainerStyled } from './TopBar.styles'

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
    label: 'entrar',
    destination: '/entrar'
  }
]

interface TopBarProps {
  background?: boolean;
  darkNav?: boolean;
}

const TopBar: FC<TopBarProps> = ({ background, darkNav }) => {
  return (
    <TopBarStyled background={background}>
      <ContainerStyled>
        <Logo size="medium" />
        <Navigation dark={darkNav} items={items} />
      </ContainerStyled>
    </TopBarStyled>
  )
}

export default TopBar;
