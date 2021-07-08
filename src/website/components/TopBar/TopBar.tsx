import { FC } from 'react'
import Link from 'next/link'
import Logo from 'shared/components/Logo/'
import Navigation from 'website/components/Navigation'
import { TopBarStyled, ContainerStyled } from './TopBar.styles'

const items = [
  {
    icon: '',
    label: 'slack',
    destination:
      'https://join.slack.com/t/mentoriatech/shared_invite/zt-r05kwhua-jvUHSyJBn_LgCKmBanlOAQ',
  },
  {
    icon: '',
    label: 'blog',
    destination: 'https://blog.mentoria.tech',
  },
  {
    label: 'entrar',
    destination: '/entrar',
    background: true,
  },
]

interface TopBarProps {
  background?: boolean;
  darkNav?: boolean;
}

const TopBar: FC<TopBarProps> = ({ background, darkNav }) => {
  return (
    <TopBarStyled background={background}>
      <ContainerStyled>
        <Link href="/">
          <Logo size="medium" />
        </Link>
        <Navigation dark={darkNav} items={items} />
      </ContainerStyled>
    </TopBarStyled>
  )
}

export default TopBar
