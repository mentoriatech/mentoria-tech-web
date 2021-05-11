import UserInfo from 'dashboard/components/UserInfo'
import Navigation from 'dashboard/components/Navigation'
import { SidebarStyled } from './Sidebar.styles'
import HomeIcon from 'svg/home.svg'
import ProfileIcon from 'svg/profile.svg'
import JourneyIcon from 'svg/journey.svg'
import GuideIcon from 'svg/guide.svg'
import HeartIcon from 'svg/heart.svg'

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
    icon: <JourneyIcon fill="white" />,
    destination: '/dashboard/jornadas',
    label: 'Jornadas',
  },
  {
    icon: <GuideIcon fill="white" />,
    destination: '/dashboard/mentoria',
    label: 'Mentoria',
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
