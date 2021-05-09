import UserInfo from 'dashboard/components/UserInfo'
import Navigation from 'dashboard/components/Navigation'
import { SidebarStyled } from './Sidebar.styles'
import HomeIcon from 'svg/home'
import ProfileIcon from 'svg/profile'
import MentoredIcon from 'svg/mentored'
import JourneyIcon from 'svg/journey'
import GuideIcon from 'svg/guide'
import HeartIcon from 'svg/heart'

const items = [
  {
    icon: <HomeIcon fill="white" />,
    destination: '/dashboard',
    label: 'Início',
  },
  {
    icon: <ProfileIcon fill="white" />,
    destination: '/dashboard/perfil',
    label: 'Perfil',
  },
  {
    icon: <GuideIcon fill="white" />,
    destination: '/dashboard/mentoria',
    label: 'Mentoria',
  },
  {
    icon: <MentoredIcon fill="white" />,
    destination: '/dashboard/gerenciar',
    label: 'Gerenciar',
  },
  {
    icon: <HeartIcon fill="white" />,
    destination: '/dashboard/contribuir',
    label: 'Contribuir',
  },
]

export default function Sidebar({ user }) {
  return (
    <>
      {user && (
        <SidebarStyled>
          <div>
            <UserInfo name={user.name} image={user.image} />
          </div>
          <Navigation direction="column" items={items} />
        </SidebarStyled>
      )}
    </>
  )
}
